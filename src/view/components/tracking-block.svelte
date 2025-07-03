<script lang="ts">
	import type DaggerheartToolsPlugin from "src/main";
	import { _encounter, _plugin } from "../daggerstore";
	import type { Adversary } from "src/types/adversary";
	import { nanoid } from "src/util/util";
	import type { Combatant, Encounter } from "src/types/encounter";
	import CombatantBlock from "./combatant-block.svelte";

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

</script>

<div class="controls">
    {#if encounter}
    <h4>Combatants {encounter.id}</h4>
    <input type="button" value="Add" onclick={addCombatant}>
    {/if}

    {#each combatants as combatant }
        <CombatantBlock {...combatant}></CombatantBlock>
    {/each}

</div>