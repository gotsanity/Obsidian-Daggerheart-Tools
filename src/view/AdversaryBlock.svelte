<script lang="ts">
	import DaggerheartToolsPlugin from "src/main";
	import type { Adversary } from "src/types/adversary";
	import AdversaryBlockRenderer from "./adversary-renderer";
	import LabeledBlock from "./components/labeled-block.svelte";
	import { features } from "process";

  export interface AdversaryProps {
    context: string;
    adversary: Partial<Adversary>;
    plugin: DaggerheartToolsPlugin;
    renderer: AdversaryBlockRenderer;
  }

  let {
    context,
    adversary,
    plugin,
    renderer
  }: AdversaryProps = $props();

  console.log(adversary);
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
  <LabeledBlock 
    {context}
    {plugin}
    {renderer}
    className="motives"
    name="Motives and Tactics:"
    definition={ adversary.motives_and_tactics! }
  ></LabeledBlock>
  <hr class="divider" />
  <div class="attributes">
    <LabeledBlock
      {context}
      {plugin}
      {renderer}
      className="difficulty"
      name="Difficulty:"
      definition={ adversary.difficulty! }
    ></LabeledBlock>
    <LabeledBlock
      {context}
      {plugin}
      {renderer}
      className="thresholds"
      name="Thresholds:"
      definition={ adversary.thresholds! }
    ></LabeledBlock>
    <LabeledBlock
      {context}
      {plugin}
      {renderer}
      className="hp"
      name="HP:"
      definition={ adversary.hp! }
    ></LabeledBlock>
    <LabeledBlock
      {context}
      {plugin}
      {renderer}
      className="stress"
      name="Stress:"
      definition={ adversary.stress! }
    ></LabeledBlock>
    <LabeledBlock
      {context}
      {plugin}
      {renderer}
      className="atk"
      name="ATK:"
      definition={ adversary.atk! }
    ></LabeledBlock>
    <LabeledBlock
      {context}
      {plugin}
      {renderer}
      className="attack"
      name={ adversary.attack ?? 'Attack' }
      definition={ `${adversary.range ?? 'Melee'} - ${adversary.damage ?? '1 phys'}` }
    ></LabeledBlock>
  </div>
  <hr class='divider' />
  <LabeledBlock
    {context}
    {plugin}
    {renderer}
    className="experience"
    name="Experience:"
    definition={ adversary.experience! }
  ></LabeledBlock>
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