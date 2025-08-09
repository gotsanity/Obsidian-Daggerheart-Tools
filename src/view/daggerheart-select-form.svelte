<script lang="ts">
	import type DaggerheartToolsPlugin from "src/main";
	import type { Adversary } from "src/types/adversary";
	import type { Environment } from "src/types/environment";
	import type { DaggerheartSelectModal } from "./daggerheart-select-modal";

    let {
        plugin,
        modal
    } : {
        plugin: DaggerheartToolsPlugin
        modal: DaggerheartSelectModal
    } = $props();

    let selected = $state();

    let objTypes = [
        "Adversary",
        "Environment"
    ]

    let selectedType: string = $state("Adversary");

    let filteredObjects : { filter: string, objects: Adversary[] | Environment[] }= $state({ filter: "", objects: plugin.adversaries.filter(() => true) });

    $effect(() => {
        console.log(filteredObjects.filter);
        if (selectedType == "Adversary"){
            filteredObjects.objects = plugin.adversaries.filter(() => true)
                .filter(adv => adv.name.toLowerCase()
                    .contains(filteredObjects.filter.toLowerCase())
                )
                .sort((a, b) => a.name > b.name ? 1 : -1)
        } else if (selectedType == "Environment") {
            filteredObjects.objects = plugin.environments.filter(() => true)
                .filter(adv => adv.name.toLowerCase()
                    .contains(filteredObjects.filter.toLowerCase())
                )
                .sort((a, b) => a.name > b.name ? 1 : -1)
        }
        
    })

    let isDisabled = $derived.by(() => filteredObjects.objects.length === 1)

    let submitForm = (name: string) => {
        console.log("selected", name, "type", selectedType);
        modal.addObjectToDocument(name, selectedType);
    }
</script>

<div class="dht-select-modal">
    <div class="form-group">
        <label for="selection">Type:</label>
        <select class="dht-type-selector" bind:value={selectedType}>
            {#each objTypes as value}
                <option {value}>{value}</option>
            {/each}
        </select>
    </div>
    <div class="form-group">
        <label for="selection">Filter:</label>
        <input type="text" bind:value={filteredObjects.filter} class="form-control" />
        <ul class="select-item-list">
            {#each filteredObjects.objects as object}
                <li class="select-item"><button class="select-item" onclick={() => {
                    submitForm($state.snapshot(object).name);
                }}>{object.name}</button></li>
            {/each}
        </ul>
    </div>
</div>