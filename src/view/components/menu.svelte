<script lang="ts">
	import type DaggerheartToolsPlugin from "src/main";
	import type { Adversary } from "src/types/adversary";
	import { _plugin } from "../daggerstore";
	import type { Environment } from "src/types/environment";


    let {
        data,
        blockType,
        isOpen = false,
    } : {
        data: Adversary | Environment,
        blockType: string,
        isOpen?: boolean
    } = $props();

    let plugin: DaggerheartToolsPlugin;
    let plugSub = _plugin.subscribe(plug => plugin = plug);

    let editModal = () => {
        isOpen = false;
        plugin.openModal(blockType, data, true);
    };
    
    let saveModal = () => {
        isOpen = false;
        plugin.openModal(blockType, data);
    };
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
            <li class="menu-item"><button class="menu-action" onclick={editModal}>Edit</button></li>
            <li class="menu-item"><button class="menu-action" onclick={saveModal}>Save As</button></li>
            <!-- <li class="menu-item"><button class="menu-action">Export</button></li>
            <li class="menu-item"><button class="menu-action">Remove</button></li>
            <li class="menu-item"><button class="menu-action">Item</button></li> -->
        </ul>
        {/if}
    </div>
    
</div>