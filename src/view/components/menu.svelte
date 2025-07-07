<script lang="ts">
	import type DaggerheartToolsPlugin from "src/main";
	import type { Adversary } from "src/types/adversary";
	import { _plugin } from "../daggerstore";


    let {
        adversary,
        isOpen = false,
    } : {
        adversary: Adversary,
        isOpen?: boolean
    } = $props();

    let plugin: DaggerheartToolsPlugin;
    let plugSub = _plugin.subscribe(plug => plugin = plug);

    let saveAdversary = () => {
        console.log("saving", adversary);
        isOpen = false;
        plugin.openSaveAdversaryModal(adversary);
    };
</script>

<div class="dht-menu">
    <button class="menu-reveal" onclick={() => isOpen = !isOpen}>Menu</button>
    {#if (isOpen)}
    <ul class="menu-list">
        {#if (adversary.alias)}
        <li class="menu-item"><button class="menu-action" onclick={saveAdversary}>Save</button></li>
        {/if}
        <li class="menu-item"><button class="menu-action">Extend</button></li>
        <li class="menu-item"><button class="menu-action">Export</button></li>
        <li class="menu-item"><button class="menu-action">Remove</button></li>
        <li class="menu-item"><button class="menu-action">Item</button></li>
    </ul>
    {/if}
</div>

<style>
    .dht-menu {
        position: absolute;
        float: left;
        top: -10px;
        left: -10px;
    }

    .menu-list,
    .menu-item {
        margin: 0;
        padding: 0;
    }

    .menu-reveal {
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        box-shadow: none;
    }

    .menu-reveal:hover {
        background-color: var(--background-secondary-alt);
        box-shadow: inset;
    }

    /* .menu-list {
        position: relative;
        display: inline-block;
    }

    .menu-item {
        display: none;
        position: absolute;
        min-width: 10px;
    }

    .menu-list:hover .menu-item {
        display: block;
    } */

</style>