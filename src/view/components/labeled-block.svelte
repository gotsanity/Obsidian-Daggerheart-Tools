<script lang="ts">
	import type { LabeledItem } from "../AdversaryBlock.svelte";

  let {
    context,
    plugin,
    renderer,
    className,
    name,
    definition,
    ...rest
  }: LabeledItem = $props();

</script>

<dl class={className}>
    <dt>{name}</dt>
    <dd>{definition}</dd>
</dl>