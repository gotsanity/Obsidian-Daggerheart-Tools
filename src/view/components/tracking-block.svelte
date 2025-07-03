<script lang="ts">
	import type DaggerheartToolsPlugin from "src/main";
	import { _encounter, _plugin } from "../daggerstore";
	import type { Adversary } from "src/types/adversary";
	import { nanoid } from "src/util/util";
	import type { Combatant, Encounter } from "src/types/encounter";
	import CombatantBlock from "./combatant-block.svelte";

    let {
        adversary,
        encounterId = null,
    } : {
        adversary: Adversary,
        encounterId?: string | null,
    } = $props();

    let plugin: DaggerheartToolsPlugin;
    console.log("loaded")
    let plugSub = _plugin.subscribe(plug => plugin = plug);

    let encounter: Encounter | undefined = $state();
    let combatants: Combatant[] = $state([]); 
    let encSub = _encounter.subscribe(e => {
        encounter = e
        console.log(e);
        // combatants = e.adversaries
    });

    export async function startTracking() {
        if (!encounterId) {
            let fm = await plugin.getFrontmatter();
            if (!fm || !fm["encounterId"]) {
                encounterId = nanoid();
            } else {
                encounterId = fm['encounterId'];
            }
        }
        
        await plugin.addCombatant(encounterId!, adversary as Adversary);
        encounter = plugin.settings.encounters.find(e => e.id === encounterId);
        console.log(await encounter);
    }

</script>

<div class="controls">
    {#if !encounter}
    <div class="tracking-control"><input type="button" value="Start Tracking" onclick={startTracking}></div>
    {/if}
    
    {#each combatants as combatant }
        <CombatantBlock {...combatant}></CombatantBlock>
    {/each}
</div>