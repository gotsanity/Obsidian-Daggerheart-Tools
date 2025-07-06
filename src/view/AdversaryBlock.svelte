<script lang="ts">
	import DaggerheartToolsPlugin from "src/main";
	import type { Adversary } from "src/types/adversary";
	import AdversaryBlockRenderer from "./adversary-renderer";
	import LabeledBlock from "./components/labeled-block.svelte";
	import TrackingBlock from "./components/tracking-block.svelte";
	import { _context, _encounter, _plugin, _renderer } from "./daggerstore";
	import type { Encounter } from "src/types/encounter";

  export interface AdversaryBlockProps {
    context: string;
    adversary: Adversary;
    plugin: DaggerheartToolsPlugin;
    renderer: AdversaryBlockRenderer;
    encounter: Encounter;
    blockConfiguration?: Map<string, boolean>;
  }

  export interface LabeledItem {
    className: string;
    name: string;
    definition: string | number;
  }

  let {
    context,
    adversary,
    plugin,
    renderer,
    encounter,
    blockConfiguration = new Map<string, boolean>([["tracked", true]]),
  }: AdversaryBlockProps = $props();

  _plugin.set(plugin);
  _renderer.set(renderer);
  _context.set(context);
  _encounter.set(encounter);

  let encounterState: Encounter = $state(encounter);

  const onEncounterUpdate = (on: string, enc: Encounter) => {
    if (encounter.id != enc.id) {
      return;
    }

    if (on == "update") {
      encounterState = enc;
      _encounter.set(enc);
    }     
  }

  plugin.encounters.subscribe(onEncounterUpdate);

  const onAdversaryUpdate = (on: string, adv: Adversary) => {
    if (adversary.id != adv.id) {
      return;
    }

    if (on == "update") {
      adversary = adv;
    }
  }

  plugin.adversaries.subscribe(onAdversaryUpdate);
  

  let description: LabeledItem = $derived({
    className: "motives",
    name: "Motives and Tactics:",
    definition: adversary.motives_and_tactics! ?? 'An adversary.'
  });
  
  let difficulty: LabeledItem = $derived({
      className: "difficulty",
      name: "Difficulty:",
      definition: adversary.difficulty! ?? 0
  });

  let thresholds: LabeledItem = $derived({
      className: "thresholds",
      name: "Thresholds:",
      definition: adversary.thresholds! ?? '-/-'
  });

  let hp: LabeledItem = $derived({
      className: "hp",
      name: "HP:",
      definition: adversary.hp!
  });

  let stress: LabeledItem = $derived({
      className: "stress",
      name: "Stress:",
      definition: adversary.stress! ?? 1
  });

  let atk: LabeledItem = $derived({
      className: "atk",
      name: "ATK:",
      definition: adversary.atk! ?? 0
  });

  let attack: LabeledItem = $derived({
      className: "attack",
      name: `${adversary.attack! ?? 'Basic Attack'}`,
      definition: `${adversary.range! ?? 'Melee'} - ${adversary.damage! ?? '1 phys'}`
  });

  let experience: LabeledItem = $derived({
      className: "experience",
      name: "Experience:",
      definition: adversary.experience! ?? 'None'
  });

  let difficult: LabeledItem = $derived({
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
    <h3>Tier {adversary.tier} {adversary.adversaryType}</h3>
  </div>
  <div class="description">{adversary.text}</div>
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
            className={ `feature-block-${i}` }
            name={feature.name!}
            definition={ feature.text! }
          ></LabeledBlock>
        </li>
      {/each}
    </ul>
  </div>

  {#if blockConfiguration.get("tracked") == true}
    <TrackingBlock {adversary} encounter={encounterState}></TrackingBlock>
  {/if}
</div>