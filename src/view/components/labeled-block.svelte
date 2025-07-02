<script lang="ts">
	import DaggerheartToolsPlugin from "src/main";
	import type AdversaryBlockRenderer from "../adversary-renderer";

  export interface TermDef {
    context: string;
    plugin: DaggerheartToolsPlugin;
    renderer: AdversaryBlockRenderer;
    className?: string;
    name: string;
    definition: string | number;
  }

  let {
    context,
    plugin,
    renderer,
    className,
    name,
    definition
  }: TermDef = $props();

</script>

<dl class={className}>
    <dt>{name}</dt>
    <dd>{definition}</dd>
</dl>