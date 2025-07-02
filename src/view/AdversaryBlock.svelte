<script lang="ts">
	import DaggerheartToolsPlugin from "src/main";
	import type { Adversary } from "src/types/adversary";
	import AdversaryBlockRenderer from "./adversary-renderer";
	import LabeledBlock from "./components/labeled-block.svelte";

  export interface AdversaryProps {
    context: string;
    adversary: Partial<Adversary>;
    plugin: DaggerheartToolsPlugin;
    renderer: AdversaryBlockRenderer;
  }

  export interface LabeledItem {
    context: string;
    plugin: DaggerheartToolsPlugin;
    renderer: AdversaryBlockRenderer;
    className: string;
    name: string;
    definition: string | number;
  }

  let {
    context,
    adversary,
    plugin,
    renderer
  }: AdversaryProps = $props();

  let description: LabeledItem = $derived({
    context: context,
    plugin: plugin,
    renderer: renderer,
    className: "motives",
    name: "Motives and Tactics:",
    definition: adversary.motives_and_tactics! ?? 'An adversary.'
  });
  
  let difficulty: LabeledItem = $derived({
      context: context,
      plugin: plugin,
      renderer: renderer,
      className: "difficulty",
      name: "Difficulty:",
      definition: adversary.difficulty! ?? 0
  });

  let thresholds: LabeledItem = $derived({
      context: context,
      plugin: plugin,
      renderer: renderer,
      className: "thresholds",
      name: "Thresholds:",
      definition: adversary.thresholds! ?? '-/-'
  });

  let hp: LabeledItem = $derived({
      context: context,
      plugin: plugin,
      renderer: renderer,
      className: "hp",
      name: "HP:",
      definition: adversary.hp!
  });

  let stress: LabeledItem = $derived({
      context: context,
      plugin: plugin,
      renderer: renderer,
      className: "stress",
      name: "Stress:",
      definition: adversary.stress! ?? 1
  });

  let atk: LabeledItem = $derived({
      context: context,
      plugin: plugin,
      renderer: renderer,
      className: "atk",
      name: "ATK:",
      definition: adversary.atk! ?? 0
  });

  let attack: LabeledItem = $derived({
      context: context,
      plugin: plugin,
      renderer: renderer,
      className: "attack",
      name: `${adversary.attack! ?? 'Basic Attack'}`,
      definition: `${adversary.range! ?? 'Melee'} - ${adversary.damage! ?? '1 phys'}`
  });

  let experience: LabeledItem = $derived({
      context: context,
      plugin: plugin,
      renderer: renderer,
      className: "experience",
      name: "Experience:",
      definition: adversary.experience! ?? 'None'
  });

  let difficult: LabeledItem = $derived({
      context: context,
      plugin: plugin,
      renderer: renderer,
      className: "difficulty",
      name: "Difficulty:",
      definition: adversary.difficulty!
  });


</script>

<div class="dht-adversary">
  {#if adversary.image}
    <img src="#" alt={adversary.name}/>
  {/if}
  <div class="dht-name">
    <h1>{adversary.name}</h1>
  </div>
  <div class="dht-tier">
    <h3>Tier {adversary.tier} {adversary.type}</h3>
  </div>
  <div class="description">{adversary.description}</div>
  <LabeledBlock {...description}></LabeledBlock>
  <hr class="divider" />
  <div class="attributes">
    <LabeledBlock {...difficulty}></LabeledBlock>
    <LabeledBlock {...thresholds}></LabeledBlock>
    <LabeledBlock { ...hp }></LabeledBlock>
    <LabeledBlock { ...stress }></LabeledBlock>
    <LabeledBlock { ...atk }></LabeledBlock>
    <LabeledBlock { ...attack}></LabeledBlock>
  </div>
  <hr class='divider' />
  <LabeledBlock {...experience}></LabeledBlock>
  <div class="features">
    <h4 class="feature-label">Features</h4>
    <ul class="feature-list">
      {#each adversary.feats! as feature, i}
        <li class={ `feature-${i}` }>
          <LabeledBlock
            {context}
            {plugin}
            {renderer}
            className={ `feature-block-${i}` }
            name={feature.name}
            definition={ feature.text }
          ></LabeledBlock>
        </li>
      {/each}
    </ul>
  </div>
</div>