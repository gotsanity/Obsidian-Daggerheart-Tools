<script lang="ts">
	import DaggerheartToolsPlugin from "src/main";
	import LabeledBlock from "./components/labeled-block.svelte";
	import { _context, _encounter, _plugin, _renderer } from "./daggerstore";
	import Menu from "./components/menu.svelte";
	import type { Environment } from "src/types/environment";
	import type EnvironmentRenderer from "./environment-renderer";

  export interface LabeledItem {
    className: string;
    name: string;
    definition: string | number;
  }

  let {
    context,
    environment,
    plugin,
  } : {
    context: string;
    environment: Environment;
    plugin: DaggerheartToolsPlugin;
  } = $props();

  _plugin.set(plugin);
  _context.set(context);

  const onEnvironmentUpdate = (on: string, env: Environment) => {
    if (environment.id != env.id) {
      return;
    }

    if (on == "update") {
      environment = env;
    }
  }

  plugin.environments.subscribe(onEnvironmentUpdate);
  
  let displayName = $derived.by(() => {
    return environment.alias || environment.name;
  })

  let adversaries: LabeledItem = $derived({
      className: "potential-adversaries",
      name: "Potential Adversaries:",
      definition: environment.potential_adversaries!
  });

  let difficulty: LabeledItem = $derived({
      className: "difficulty",
      name: "Difficulty:",
      definition: environment.difficulty!
  });

  let impulses: LabeledItem = $derived({
    className: "impulses",
    name: "Impulses:",
    definition: environment.impulses!
  });


</script>

<div class="dht-adversary">
  <!-- <Menu data={environment}></Menu> -->
  {#if environment.image}
    <img src="#" alt={environment.name}/>
  {/if}
  <div class="dht-name">
    <h1>{displayName}</h1>
  </div>
  <div class="dht-tier">
    <h3>Tier {environment.tier} {environment.environmentType}</h3>
  </div>
  <div class="description">{environment.text}</div>
  <LabeledBlock {...impulses}></LabeledBlock>
  <hr class="divider" />
  <div class="attributes">
    <LabeledBlock {...difficulty}></LabeledBlock>
    <LabeledBlock {...adversaries}></LabeledBlock>
  </div>
  <hr class='divider' />
  <div class="features">
    <h4 class="feature-label">Features</h4>
    <ul class="feature-list">
      {#each environment.feats! as feature, i}
        <li class={ `feature-${i}` }>
          <LabeledBlock
            className={ `feature-block-${i}` }
            name={feature.name!}
            definition={ feature.text! }
          ></LabeledBlock>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .dht-environment {
    position: relative;
    min-width: 10px;
    min-height: 10px;
  }
</style>