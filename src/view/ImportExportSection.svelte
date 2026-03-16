<script lang="ts">
    import { Notice } from "obsidian";
    import type DaggerheartToolsPlugin from "src/main";
    import type { ImportBatch } from "src/settings/settings";
    import type { Adversary } from "src/types/adversary";
    import type { Environment } from "src/types/environment";
    import type { Encounter } from "src/types/encounter";
    import type { AbilityCard } from "src/types/card";
    import { serializeExport, parseImport, tagItemsWithBatch, isSRDItem } from "src/util/import-export";
    import type { ExportSelection } from "src/util/import-export";
    import { BESTIARY } from "src/bestiary/daggerheart-srd-bestiary";
    import { ENVIRONMENTS as SRD_ENVIRONMENTS } from "src/bestiary/daggerheart-srd-environments";
    import { nanoid } from "src/util/util";

    // ID-based SRD detection — reliable even if the source field is missing from saved data.
    // Environments don't have a source field at all, so source-based check always fails for them.
    const SRD_ADVERSARY_IDS = new Set(BESTIARY.map(a => a.id));
    const SRD_ENVIRONMENT_IDS = new Set(SRD_ENVIRONMENTS.map(e => e.id));
    function isAdvSRD(a: Adversary): boolean { return SRD_ADVERSARY_IDS.has(a.id); }
    function isEnvSRD(e: Environment): boolean { return SRD_ENVIRONMENT_IDS.has(e.id); }

    let { plugin }: { plugin: DaggerheartToolsPlugin } = $props();

    // --- Export: all items loaded once ---
    let allAdversaries: Adversary[] = plugin.adversaries.filter(() => true).sort((a, b) => a.name > b.name ? 1 : -1);
    let allEnvironments: Environment[] = plugin.environments.filter(() => true).sort((a, b) => a.name > b.name ? 1 : -1);
    let allEncounters: Encounter[] = plugin.encounters.filter(() => true);
    let allAbilityCards: AbilityCard[] = plugin.abilityCards.filter(() => true).sort((a, b) => a.name > b.name ? 1 : -1);

    // --- Export: selection state ---
    let selectedAdversaryIds = $state(new Set<string>());
    let selectedEnvironmentIds = $state(new Set<string>());
    let selectedEncounterIds = $state(new Set<string>());
    let selectedAbilityCardIds = $state(new Set<string>());
    let excludeSRD = $state(false);
    let exportError = $state("");

    // --- Export: collapsible sections ---
    let openSections = $state({ adversaries: true, environments: false, encounters: false, abilityCards: false });

    // Search inputs — the only mutable export UI state needed.
    // Filtering is done inline in the template so {#each} reacts directly to $state reads.
    let searchAdversaries = $state("");
    let searchEnvironments = $state("");
    let searchAbilityCards = $state("");

    // When excludeSRD changes: clear SRD selections and collapse all sections so they
    // re-evaluate their lists when reopened.
    function onExcludeSRDChange() {
        openSections = { adversaries: false, environments: false, encounters: false, abilityCards: false };
        if (excludeSRD) {
            selectedAdversaryIds = selectNone(allAdversaries.filter(isAdvSRD), selectedAdversaryIds);
            selectedEnvironmentIds = selectNone(allEnvironments.filter(isEnvSRD), selectedEnvironmentIds);
        }
    }

    function toggleItem(set: Set<string>, id: string): Set<string> {
        const next = new Set(set);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
    }

    function selectAll(items: { id: string }[], set: Set<string>): Set<string> {
        const next = new Set(set);
        items.forEach(i => next.add(i.id));
        return next;
    }

    function selectNone(items: { id: string }[], set: Set<string>): Set<string> {
        const next = new Set(set);
        items.forEach(i => next.delete(i.id));
        return next;
    }

    function selectedCount(allItems: { id: string }[], set: Set<string>): number {
        return allItems.filter(i => set.has(i.id)).length;
    }

    function handleExport() {
        exportError = "";
        const items: ExportSelection = {
            adversaries: allAdversaries.filter(a => selectedAdversaryIds.has(a.id)),
            environments: allEnvironments.filter(e => selectedEnvironmentIds.has(e.id)),
            encounters: allEncounters.filter(e => selectedEncounterIds.has(e.id)),
            abilityCards: allAbilityCards.filter(c => selectedAbilityCardIds.has(c.id)),
        };

        const totalSelected = items.adversaries.length + items.environments.length +
                              items.encounters.length + items.abilityCards.length;
        if (totalSelected === 0) {
            exportError = "No items selected.";
            return;
        }

        const data = serializeExport(items, getPluginVersion());
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const date = new Date().toISOString().split("T")[0];
        const a = document.createElement("a");
        a.href = url;
        a.download = `daggerheart-tools-export-${date}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // --- Import state ---
    let fileInput: HTMLInputElement | undefined = $state();
    let conflictResolution = $state<"skip" | "overwrite" | "addNew">("skip");
    let importMessage = $state("");
    let importError = $state("");

    // --- Batch list (reactive from settings) ---
    let importBatches = $derived(plugin.settings.importBatches ?? []);

    function getPluginVersion(): string {
        const v = plugin.settings.version;
        return `${v.major}.${v.minor}.${v.patch}`;
    }

    async function handleImport() {
        importMessage = "";
        importError = "";

        const file = fileInput?.files?.[0];
        if (!file) {
            importError = "No file selected.";
            return;
        }

        const text = await file.text();
        const result = parseImport(text);

        if (result instanceof Error) {
            importError = result.message;
            return;
        }

        const batchId = nanoid();
        const filename = file.name;
        const importedAt = new Date().toISOString();

        const taggedAdversaries = tagItemsWithBatch(result.adversaries, batchId);
        const taggedEnvironments = tagItemsWithBatch(result.environments, batchId);
        const taggedEncounters = result.encounters.map(e => ({ ...e }));
        const taggedAbilityCards = tagItemsWithBatch(result.abilityCards, batchId);

        let counts = { adversaries: 0, environments: 0, encounters: 0, abilityCards: 0 };
        let skipped = 0;

        if (conflictResolution === "skip") {
            const filteredAdv = taggedAdversaries.filter(a => !plugin.adversaries.exists(x => x.id === a.id));
            skipped += taggedAdversaries.length - filteredAdv.length;
            plugin.adversaries.addRange(filteredAdv);
            counts.adversaries = filteredAdv.length;

            const filteredEnv = taggedEnvironments.filter(e => !plugin.environments.exists(x => x.id === e.id));
            skipped += taggedEnvironments.length - filteredEnv.length;
            plugin.environments.addRange(filteredEnv);
            counts.environments = filteredEnv.length;

            const filteredEnc = taggedEncounters.filter(e => !plugin.encounters.exists(x => x.id === e.id));
            skipped += taggedEncounters.length - filteredEnc.length;
            plugin.encounters.addRange(filteredEnc);
            counts.encounters = filteredEnc.length;

            const filteredCards = taggedAbilityCards.filter(c => !plugin.abilityCards.exists(x => x.id === c.id));
            skipped += taggedAbilityCards.length - filteredCards.length;
            plugin.abilityCards.addRange(filteredCards);
            counts.abilityCards = filteredCards.length;

        } else if (conflictResolution === "overwrite") {
            for (const adv of taggedAdversaries) {
                if (plugin.adversaries.exists(x => x.id === adv.id)) {
                    plugin.adversaries.update("id", adv);
                } else {
                    plugin.adversaries.add(adv);
                }
            }
            counts.adversaries = taggedAdversaries.length;

            for (const env of taggedEnvironments) {
                if (plugin.environments.exists(x => x.id === env.id)) {
                    plugin.environments.update("id", env);
                } else {
                    plugin.environments.add(env);
                }
            }
            counts.environments = taggedEnvironments.length;

            for (const enc of taggedEncounters) {
                if (plugin.encounters.exists(x => x.id === enc.id)) {
                    plugin.encounters.update("id", enc);
                } else {
                    plugin.encounters.add(enc);
                }
            }
            counts.encounters = taggedEncounters.length;

            for (const card of taggedAbilityCards) {
                if (plugin.abilityCards.exists(x => x.id === card.id)) {
                    plugin.abilityCards.update("id", card);
                } else {
                    plugin.abilityCards.add(card);
                }
            }
            counts.abilityCards = taggedAbilityCards.length;

        } else {
            // addNew: generate fresh IDs for all
            const reId = <T extends { id: string }>(items: T[]): T[] =>
                items.map(item => ({ ...item, id: nanoid() }));

            const newAdv = reId(taggedAdversaries);
            plugin.adversaries.addRange(newAdv);
            counts.adversaries = newAdv.length;

            const newEnv = reId(taggedEnvironments);
            plugin.environments.addRange(newEnv);
            counts.environments = newEnv.length;

            const newEnc = reId(taggedEncounters);
            plugin.encounters.addRange(newEnc);
            counts.encounters = newEnc.length;

            const newCards = reId(taggedAbilityCards);
            plugin.abilityCards.addRange(newCards);
            counts.abilityCards = newCards.length;
        }

        const batch: ImportBatch = { id: batchId, filename, importedAt, counts };
        plugin.settings.importBatches = [...(plugin.settings.importBatches ?? []), batch];
        await plugin.saveSettings();

        const total = counts.adversaries + counts.environments + counts.encounters + counts.abilityCards;
        importMessage = skipped > 0
            ? `Imported ${total} item${total !== 1 ? "s" : ""}, skipped ${skipped} duplicate${skipped !== 1 ? "s" : ""}.`
            : `Imported ${total} item${total !== 1 ? "s" : ""}.`;

        if (fileInput) fileInput.value = "";
    }

    async function removeBatch(batch: ImportBatch) {
        const tag = `import:${batch.id}`;
        plugin.adversaries.deleteBySource(tag);
        plugin.environments.deleteBySource(tag);
        plugin.encounters.deleteBySource(tag);
        plugin.abilityCards.deleteBySource(tag);

        plugin.settings.importBatches = plugin.settings.importBatches.filter(b => b.id !== batch.id);
        await plugin.saveSettings();

        new Notice(`Removed import batch "${batch.filename}".`);
    }

    function formatDate(iso: string): string {
        try {
            return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
        } catch {
            return iso;
        }
    }

    function countSummary(counts: ImportBatch["counts"]): string {
        const parts: string[] = [];
        if (counts.adversaries) parts.push(`${counts.adversaries} adversar${counts.adversaries !== 1 ? "ies" : "y"}`);
        if (counts.environments) parts.push(`${counts.environments} environment${counts.environments !== 1 ? "s" : ""}`);
        if (counts.encounters) parts.push(`${counts.encounters} encounter${counts.encounters !== 1 ? "s" : ""}`);
        if (counts.abilityCards) parts.push(`${counts.abilityCards} ability card${counts.abilityCards !== 1 ? "s" : ""}`);
        return parts.length ? parts.join(", ") : "0 items";
    }
</script>

<div class="dh-import-export">
    <h3>Import / Export</h3>

    <!-- Export -->
    <div class="dh-section">
        <h4>Export</h4>

        <label class="dh-exclude-srd">
            <input type="checkbox" bind:checked={excludeSRD} onchange={onExcludeSRDChange} />
            Exclude SRD items
        </label>

        <!-- Adversaries -->
        {#snippet adversaryRows()}
            {#each allAdversaries.filter(a => (!excludeSRD || !isAdvSRD(a)) && (!searchAdversaries || a.name.toLowerCase().includes(searchAdversaries.toLowerCase()))) as adv (adv.id)}
                <label class="dh-item-row">
                    <input
                        type="checkbox"
                        checked={selectedAdversaryIds.has(adv.id)}
                        onchange={() => selectedAdversaryIds = toggleItem(selectedAdversaryIds, adv.id)}
                    />
                    <span class="dh-item-name">{adv.name}</span>
                    {#if isAdvSRD(adv)}<span class="dh-srd-badge">SRD</span>{/if}
                </label>
            {/each}
        {/snippet}
        <div class="dh-collapsible">
            <button
                class="dh-collapsible-header"
                onclick={() => openSections.adversaries = !openSections.adversaries}
                aria-expanded={openSections.adversaries}
            >
                <span class="dh-chevron">{openSections.adversaries ? "▾" : "▸"}</span>
                <span>Adversaries</span>
                <span class="dh-section-count">
                    ({selectedCount(allAdversaries, selectedAdversaryIds)} selected,
                    {allAdversaries.filter(a => !excludeSRD || !isAdvSRD(a)).length} total)
                </span>
            </button>
            {#if openSections.adversaries}
                <div class="dh-collapsible-body">
                    {#if allAdversaries.filter(a => !excludeSRD || !isAdvSRD(a)).length === 0}
                        <p class="dh-empty">No items.</p>
                    {:else}
                        <div class="dh-list-controls">
                            <input class="dh-search" type="text" placeholder="Search..." bind:value={searchAdversaries} />
                            <button class="dh-small-btn" onclick={() => selectedAdversaryIds = selectAll(allAdversaries.filter(a => !excludeSRD || !isAdvSRD(a)), selectedAdversaryIds)}>All</button>
                            <button class="dh-small-btn" onclick={() => selectedAdversaryIds = selectNone(allAdversaries.filter(a => !excludeSRD || !isAdvSRD(a)), selectedAdversaryIds)}>None</button>
                        </div>
                        <div class="dh-item-list">{@render adversaryRows()}</div>
                    {/if}
                </div>
            {/if}
        </div>

        <!-- Environments -->
        {#snippet environmentRows()}
            {#each allEnvironments.filter(e => (!excludeSRD || !isEnvSRD(e)) && (!searchEnvironments || e.name.toLowerCase().includes(searchEnvironments.toLowerCase()))) as env (env.id)}
                <label class="dh-item-row">
                    <input
                        type="checkbox"
                        checked={selectedEnvironmentIds.has(env.id)}
                        onchange={() => selectedEnvironmentIds = toggleItem(selectedEnvironmentIds, env.id)}
                    />
                    <span class="dh-item-name">{env.name}</span>
                    {#if isEnvSRD(env)}<span class="dh-srd-badge">SRD</span>{/if}
                </label>
            {/each}
        {/snippet}
        <div class="dh-collapsible">
            <button
                class="dh-collapsible-header"
                onclick={() => openSections.environments = !openSections.environments}
                aria-expanded={openSections.environments}
            >
                <span class="dh-chevron">{openSections.environments ? "▾" : "▸"}</span>
                <span>Environments</span>
                <span class="dh-section-count">
                    ({selectedCount(allEnvironments, selectedEnvironmentIds)} selected,
                    {allEnvironments.filter(e => !excludeSRD || !isEnvSRD(e)).length} total)
                </span>
            </button>
            {#if openSections.environments}
                <div class="dh-collapsible-body">
                    {#if allEnvironments.filter(e => !excludeSRD || !isEnvSRD(e)).length === 0}
                        <p class="dh-empty">No items.</p>
                    {:else}
                        <div class="dh-list-controls">
                            <input class="dh-search" type="text" placeholder="Search..." bind:value={searchEnvironments} />
                            <button class="dh-small-btn" onclick={() => selectedEnvironmentIds = selectAll(allEnvironments.filter(e => !excludeSRD || !isEnvSRD(e)), selectedEnvironmentIds)}>All</button>
                            <button class="dh-small-btn" onclick={() => selectedEnvironmentIds = selectNone(allEnvironments.filter(e => !excludeSRD || !isEnvSRD(e)), selectedEnvironmentIds)}>None</button>
                        </div>
                        <div class="dh-item-list">{@render environmentRows()}</div>
                    {/if}
                </div>
            {/if}
        </div>

        <!-- Encounters -->
        <div class="dh-collapsible">
            <button
                class="dh-collapsible-header"
                onclick={() => openSections.encounters = !openSections.encounters}
                aria-expanded={openSections.encounters}
            >
                <span class="dh-chevron">{openSections.encounters ? "▾" : "▸"}</span>
                <span>Encounters</span>
                <span class="dh-section-count">
                    ({selectedCount(allEncounters, selectedEncounterIds)} selected, {allEncounters.length} total)
                </span>
            </button>
            {#if openSections.encounters}
                <div class="dh-collapsible-body">
                    {#if allEncounters.length === 0}
                        <p class="dh-empty">No items.</p>
                    {:else}
                        <div class="dh-list-controls">
                            <button class="dh-small-btn" onclick={() => selectedEncounterIds = selectAll(allEncounters, selectedEncounterIds)}>All</button>
                            <button class="dh-small-btn" onclick={() => selectedEncounterIds = selectNone(allEncounters, selectedEncounterIds)}>None</button>
                        </div>
                        <div class="dh-item-list">
                            {#each allEncounters as enc (enc.id)}
                                <label class="dh-item-row">
                                    <input
                                        type="checkbox"
                                        checked={selectedEncounterIds.has(enc.id)}
                                        onchange={() => selectedEncounterIds = toggleItem(selectedEncounterIds, enc.id)}
                                    />
                                    <span class="dh-item-name dh-item-id">{enc.id}</span>
                                </label>
                            {/each}
                        </div>
                    {/if}
                </div>
            {/if}
        </div>

        <!-- Ability Cards -->
        {#snippet abilityCardRows()}
            {#each allAbilityCards.filter(c => !searchAbilityCards || c.name.toLowerCase().includes(searchAbilityCards.toLowerCase())) as card (card.id)}
                <label class="dh-item-row">
                    <input
                        type="checkbox"
                        checked={selectedAbilityCardIds.has(card.id)}
                        onchange={() => selectedAbilityCardIds = toggleItem(selectedAbilityCardIds, card.id)}
                    />
                    <span class="dh-item-name">{card.name}</span>
                </label>
            {/each}
        {/snippet}
        <div class="dh-collapsible">
            <button
                class="dh-collapsible-header"
                onclick={() => openSections.abilityCards = !openSections.abilityCards}
                aria-expanded={openSections.abilityCards}
            >
                <span class="dh-chevron">{openSections.abilityCards ? "▾" : "▸"}</span>
                <span>Ability Cards</span>
                <span class="dh-section-count">
                    ({selectedCount(allAbilityCards, selectedAbilityCardIds)} selected, {allAbilityCards.length} total)
                </span>
            </button>
            {#if openSections.abilityCards}
                <div class="dh-collapsible-body">
                    {#if allAbilityCards.length === 0}
                        <p class="dh-empty">No items.</p>
                    {:else}
                        <div class="dh-list-controls">
                            <input class="dh-search" type="text" placeholder="Search..." bind:value={searchAbilityCards} />
                            <button class="dh-small-btn" onclick={() => selectedAbilityCardIds = selectAll(allAbilityCards, selectedAbilityCardIds)}>All</button>
                            <button class="dh-small-btn" onclick={() => selectedAbilityCardIds = selectNone(allAbilityCards, selectedAbilityCardIds)}>None</button>
                        </div>
                        <div class="dh-item-list">{@render abilityCardRows()}</div>
                    {/if}
                </div>
            {/if}
        </div>

        <button onclick={handleExport}>Export to JSON</button>
        {#if exportError}
            <p class="dh-error">{exportError}</p>
        {/if}
    </div>

    <!-- Import -->
    <div class="dh-section">
        <h4>Import</h4>
        <input
            type="file"
            accept=".json"
            bind:this={fileInput}
        />
        <div class="dh-conflict-options">
            <span>On conflict:</span>
            <label><input type="radio" bind:group={conflictResolution} value="skip" /> Skip duplicates</label>
            <label><input type="radio" bind:group={conflictResolution} value="overwrite" /> Overwrite</label>
            <label><input type="radio" bind:group={conflictResolution} value="addNew" /> Add as new</label>
        </div>
        <button onclick={handleImport}>Import</button>
        {#if importMessage}
            <p class="dh-success">{importMessage}</p>
        {/if}
        {#if importError}
            <p class="dh-error">{importError}</p>
        {/if}
    </div>

    <!-- Imported Batches -->
    {#if importBatches.length > 0}
        <div class="dh-section">
            <h4>Imported Batches</h4>
            {#each importBatches as batch (batch.id)}
                <div class="dh-batch-row">
                    <div class="dh-batch-info">
                        <span class="dh-batch-filename">{batch.filename}</span>
                        <span class="dh-batch-meta">{formatDate(batch.importedAt)} — {countSummary(batch.counts)}</span>
                    </div>
                    <button class="dh-remove-btn" onclick={() => removeBatch(batch)}>Remove</button>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .dh-import-export {
        margin-top: 1.5rem;
        border-top: 1px solid var(--background-modifier-border);
        padding-top: 1rem;
    }

    .dh-import-export h3 {
        margin: 0 0 1rem;
        font-size: 1rem;
        font-weight: 600;
    }

    .dh-import-export h4 {
        margin: 0 0 0.5rem;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .dh-section {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .dh-exclude-srd {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        cursor: pointer;
        font-size: 0.875rem;
    }

    .dh-collapsible {
        border: 1px solid var(--background-modifier-border);
        border-radius: 4px;
        overflow: hidden;
    }

    .dh-collapsible-header {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.4rem 0.6rem;
        background: var(--background-secondary);
        border: none;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 500;
        text-align: left;
        box-shadow: none;
    }

    .dh-collapsible-header:hover {
        background: var(--background-modifier-hover);
    }

    .dh-chevron {
        font-size: 0.75rem;
        color: var(--text-muted);
    }

    .dh-section-count {
        margin-left: auto;
        font-size: 0.8rem;
        color: var(--text-muted);
        font-weight: 400;
    }

    .dh-collapsible-body {
        padding: 0.5rem 0.6rem;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .dh-list-controls {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    .dh-search {
        flex: 1;
        font-size: 0.8rem;
        padding: 0.2rem 0.4rem;
        border: 1px solid var(--background-modifier-border);
        border-radius: 3px;
        background: var(--background-primary);
        color: var(--text-normal);
    }

    .dh-small-btn {
        font-size: 0.75rem;
        padding: 0.2rem 0.5rem;
    }

    .dh-item-list {
        max-height: 200px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
    }

    .dh-item-row {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.15rem 0.2rem;
        cursor: pointer;
        border-radius: 3px;
        font-size: 0.875rem;
    }

    .dh-item-row:hover {
        background: var(--background-modifier-hover);
    }

    .dh-item-name {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .dh-item-id {
        font-family: var(--font-monospace);
        font-size: 0.75rem;
        color: var(--text-muted);
    }

    .dh-srd-badge {
        font-size: 0.7rem;
        color: var(--text-muted);
        border: 1px solid var(--background-modifier-border);
        border-radius: 3px;
        padding: 0 0.3rem;
        white-space: nowrap;
    }

    .dh-empty {
        font-size: 0.8rem;
        color: var(--text-muted);
        margin: 0;
        font-style: italic;
    }

    .dh-conflict-options {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;
        align-items: center;
    }

    .dh-conflict-options span {
        color: var(--text-muted);
        font-size: 0.875rem;
    }

    .dh-conflict-options label {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        cursor: pointer;
    }

    .dh-success {
        color: var(--color-green);
        margin: 0;
        font-size: 0.875rem;
    }

    .dh-error {
        color: var(--color-red);
        margin: 0;
        font-size: 0.875rem;
    }

    .dh-batch-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.4rem 0.6rem;
        border: 1px solid var(--background-modifier-border);
        border-radius: 4px;
        gap: 0.5rem;
    }

    .dh-batch-info {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        min-width: 0;
    }

    .dh-batch-filename {
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .dh-batch-meta {
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    .dh-remove-btn {
        flex-shrink: 0;
    }
</style>
