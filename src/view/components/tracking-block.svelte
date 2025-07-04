<script lang="ts">
	import type DaggerheartToolsPlugin from "src/main";
	import { _encounter, _plugin, _renderer } from "../daggerstore";
	import type { Adversary } from "src/types/adversary";
	import { nanoid } from "src/util/util";
	import type { Combatant, Encounter } from "src/types/encounter";
	import CombatantBlock from "./combatant-block.svelte";
	import type AdversaryBlockRenderer from "../adversary-renderer";
	import { onMount } from "svelte";

    let {
        adversary,
        encounter,
    } : {
        adversary: Adversary,
        encounter: Encounter,
    } = $props();

    let plugin: DaggerheartToolsPlugin;
    let plugSub = _plugin.subscribe(plug => plugin = plug);

    let combatants = $derived.by(() => {
        return encounter.adversaries.filter(c => c.name === adversary.name);
    });

    export async function addCombatant() {        
        await plugin.addCombatant(encounter.id, adversary as Adversary);
    }

    onMount(() => {
        plugin.checkDirtyEncounter(encounter.id, adversary);
    });

</script>

<div class="encounter-tracker">
    {#if encounter}
        <h4>Combatants</h4>
        <div class="controls">
            <input type="button" value="Add" onclick={addCombatant}>
        </div>
    {/if}

    {#each combatants as combatant, index }
        <div class="tracker">
            <CombatantBlock {...combatant} combatantNumber={index}></CombatantBlock>
        </div>
    {/each}
</div>