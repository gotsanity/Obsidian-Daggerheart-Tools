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

    let editAdversaryModal = () => {
        isOpen = false;
        plugin.openAdversaryModal(adversary, true);
    };
    
    let saveAdversaryModal = () => {
        isOpen = false;
        plugin.openAdversaryModal(adversary);
    };

    let removeAdversaryModal = () => {
        isOpen = false;
        plugin.removeAdversaryModal(adversary);
    }
</script>

<div class="dht-menu">
    <div class="dht-menu-controls">
        <div class="edit-block-button" onclick={() => isOpen = !isOpen} onkeypress={()=> isOpen = !isOpen} role="button" tabindex="-1" aria-label="Open Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-menu"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
        </div>
    </div>
    <div class="dht-menu-items">
        {#if (isOpen)}
        <ul class="menu-list">
            <li class="menu-item"><button class="menu-action" onclick={editAdversaryModal}>Edit</button></li>
            <li class="menu-item"><button class="menu-action" onclick={saveAdversaryModal}>Save As</button></li>
            <!-- <li class="menu-item"><button class="menu-action">Export</button></li> -->
            <!-- <li class="menu-item"><button class="menu-action" onclick={removeAdversaryModal}>Remove</button></li> -->
            <!-- <li class="menu-item"><button class="menu-action">Item</button></li> -->
        </ul>
        {/if}
    </div>
    
</div>

<style>
    .dht-menu {
        position: absolute;
        float: left;
        top: 15px;
        right: -15px;
    }

    .dht-menu-controls {
        display: flex;
        flex-direction: row;
        align-items: end;
        justify-content: end;
    }

    .menu-list,
    .menu-item {
        margin: 0;
        margin-top: 0.5rem;
        padding: 0;
    }

    .menu-list {
        margin-top: 2.0rem;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: end;
    }

    .menu-item {
        margin: 0.25rem;
    }

    /* .menu-reveal {
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        box-shadow: none;
    }

    .menu-reveal:hover {
        background-color: var(--background-secondary-alt);
        box-shadow: inset;
    } */

</style>