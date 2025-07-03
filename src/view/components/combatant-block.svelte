<script lang="ts">
	import type { Combatant } from "src/types/encounter";


    let {
        name,
        id,
        hp = 1,
        stress = 1,
    }: Combatant = $props();

</script>

<div>{name}</div>


