<script lang="ts">
	import type DaggerheartToolsPlugin from "src/main";
	import type { Adversary } from "src/types/adversary";
	import type { SelectAdversaryModal } from "./select-adversary-modal";

    let {
        plugin,
        adversaries,
        modal
    } : {
        plugin: DaggerheartToolsPlugin
        adversaries: Adversary[],
        modal: SelectAdversaryModal
    } = $props();

    let selected = $state();
    let filteredAdversaries : { filter: string, adversaries: Adversary[] }= $state({ filter: "", adversaries: adversaries });

    $effect(() => {
        console.log(filteredAdversaries.filter);
        filteredAdversaries.adversaries = adversaries
            .filter(adv => adv.name.toLowerCase()
                .contains(filteredAdversaries.filter.toLowerCase())
            )
            .sort((a, b) => a.name > b.name ? 1 : -1)
    })

    let isDisabled = $derived.by(() => filteredAdversaries.adversaries.length === 1)

    let submitForm = (adversary: Adversary) => {
        console.log(adversary);
        modal.addAdversaryToDocument(adversary);
    }
</script>

<div class="dht-select-modal">
    <div class="form-group">
        <label for="selection">Filter:</label>
        <input type="text" bind:value={filteredAdversaries.filter} class="form-control" />
        <ul class="select-item-list">
            {#each filteredAdversaries.adversaries as adversary}
                <li class="select-item"><button class="select-item" onclick={() => {
                    submitForm($state.snapshot(adversary));
                }}>{adversary.name}</button></li>
            {/each}
        </ul>
    </div>
</div>