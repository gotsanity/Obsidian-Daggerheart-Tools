<script lang="ts">
	import type DaggerheartToolsPlugin from "src/main";
	import type { Combatant, Encounter } from "src/types/encounter";
	import { _encounter, _plugin } from "../daggerstore";
	import type { Adversary } from "src/types/adversary";


    let {
        name,
        id,
        hp,
        stress,
        ...rest
    }: Combatant = $props();

    let plugin: DaggerheartToolsPlugin;
    let plugSub = _plugin.subscribe(plug => plugin = plug);

    let encounter: Encounter;
    let encSub = _encounter.subscribe(enc => encounter = enc);

    export async function removeCombatant() {        
        await plugin.removeCombatant(encounter.id, id);
    }

</script>

<div>
    { name }
    <input type="button" value="x" onclick={removeCombatant}>
</div>


