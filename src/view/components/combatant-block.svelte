<script lang="ts">
	import type DaggerheartToolsPlugin from "src/main";
	import type { Combatant, Encounter } from "src/types/encounter";
	import { _encounter, _plugin } from "../daggerstore";
	import { onMount } from "svelte";


    let {
        name,
        parentId,
        id,
        hp,
        stress,
        maxHP,
        maxStress,
        combatantNumber,
    }: Combatant & {
        combatantNumber: number
    } = $props();

    let plugin: DaggerheartToolsPlugin;
    let plugSub = _plugin.subscribe(plug => plugin = plug);

    let encounter: Encounter;
    let encSub = _encounter.subscribe(enc => encounter = enc);

    export async function removeCombatant() {        
        await plugin.removeCombatant(encounter.id, id); 
    }

    export async function updateCombatant() {
        plugin.updateCombatant(encounter.id, {
            name: name,
            parentId: parentId,
            id: id,
            hp: hp,
            stress: stress,
            maxHP: maxHP,
            maxStress: maxStress,
        });
    }

    onMount(() => {
        let update = false;

        if (hp > maxHP) {
            hp = maxHP
            update = true;
        }

        if (hp < 0) {
            hp = 0;
            update = true;
        }

        if (stress > maxStress) {
            stress = maxStress
            update = true;
        }

        if (stress < 0) {
            stress = 0;
            update = true;
        }

        if (update) {
            updateCombatant();
        }
    })
  
</script>

<div class="unit unit-{id}">
    <div class="combatant-header">
        <h3 class="adversary-slug">{ name } #{String(combatantNumber + 1).padStart(2, "0")}</h3>
        <div class="controls">
            <input type="button" class="unit-controls btn-danger" value="Remove" onclick={removeCombatant}>
        </div>
    </div>
    <div class="hp-toggles">
        <ul class="toggle-list">
            <li class="toggle-item hp-label-item">
                <span class="hp-label">HP:</span>
            </li>
            {#each {length: maxHP} as i, index}
                <li class="toggle-item hp-{index}">
                    <input type="checkbox" class="hp-input-{index}" bind:checked={() => {
                        return hp > index;
                    }, (checked) => {
                        if (!checked) {
                            hp--;
                        } else {
                            hp++;
                        }
                        updateCombatant();
                    }}>
                </li>
            {/each}
        </ul>
    </div>
    <div class="stress-toggles">
        <ul class="toggle-list">
            <li class="toggle-item stress-label-item">
                <span class="stress-label">Stress:</span>
            </li>
            {#each {length: maxStress} as i, index}
                <li class="toggle-item stress-{index}">
                    <input type="checkbox" class="stress-input-{index}" bind:checked={() => {
                        return stress > index;
                    }, (checked) => {
                        if (!checked) {
                            stress--;
                        } else {
                            stress++;
                        }
                        updateCombatant();
                    }}>
                </li>
            {/each}
        </ul>
    </div>
</div>


