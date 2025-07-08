<script lang="ts">
	import DaggerheartToolsPlugin from "src/main";
	import type { Adversary } from "src/types/adversary";
	import { nanoid } from "src/util/util";
	import { _plugin } from "./daggerstore";
	import type { FeaturesProps } from "src/types/daggerheart-types";

    let {
        adversary = {
            name: "",
            id: nanoid(),
            tier: 1,
            adversaryType: "Standard",
            motives_and_tactics: "",
            hp: 1,
            stress: 1,
            difficulty: 10,
            atk: "+0",
            attack: "Strike",
            range: "Melee",
            damage: "1 phys",
            text: "Adversary description",
            experience: "",
            feats: [],
            source: "",
            thresholds: "-/-"
        }
    } : {
        adversary?: Adversary
    } = $props();

    let adversaryState: Adversary = $state(adversary);

    let errors: {
      name?: string,
      tier?: string,
      adversaryType?: string,
      motives_and_tactics?: string,
      hp?: string,
      stress?: string,
      major_threshold?: string,
      severe_threshold?: string,
      difficulty?: string,
      atk?: string,
      attack?: string,
      range?: string,
      damage?: string,
      text?: string,
      experiences?: string,
      feats?: string,
      source?: string
    } = $state({})

    let adversaryTypes: string[] = [
        "Bruiser",
        "Horde",
        "Leader",
        "Minion",
        "Ranged",
        "Skulk",
        "Social",
        "Solo",
        "Standard",
        "Support"
    ];

    let adversaryRanges: string[] = [
        "Melee",
        "Very Close",
        "Close",
        "Far",
        "Very Far",
        "Out of Range"
    ]

    let major_threshold: number | undefined = $derived.by(() => {
        return Number(adversary?.thresholds?.split("/")[0]) || undefined
    })

    let severe_threshold: number | undefined = $derived.by(() => {
        return Number(adversary?.thresholds?.split("/")[1]) || undefined
    })

    let thresholds: string = $derived.by(() => {
        return `${major_threshold ?? "-"}/${severe_threshold ?? "-"}`;
    }) 

    let plugin: DaggerheartToolsPlugin;

    _plugin.subscribe(plug => {
      plugin = plug
    })

    const valid = $derived.by(() => {
      return Object.values(errors).some(val => typeof val === 'string');
    })

    const isNumber = (val: any) => {
      return typeof val === 'number' && !isNaN(val)
    }

    const inRange = (val: number, min: number, max: number) => {
      return val >= min && val <= max;
    }

    const minLength = (val: string, minLength: number) => {
      return val.length >= minLength;
    }

    const maxLength = (val: string, maxLength: number) => {
      return val.length <= maxLength;
    }

    const required = (val?: any) => {
      return val == undefined;
    }

    $effect(() => {
      if (required(adversaryState.name) || plugin.adversaries.exists(adv => adv.name == adversaryState.name)) {
        errors.name = "Name already exists, please choose another.";
      } else {
        errors.name = undefined;
      }
    });

    $effect(() => {
      if (required(adversaryState.text)) {
        errors.text = "Please enter a description";
      } else {
        errors.text = undefined;
      }
    })

    $effect(() => {
      if (required(adversaryState.tier) || !isNumber(adversaryState.tier) || !inRange(adversaryState.tier!, 1, 4)) {
        errors.tier = "Tier must be between 1 and 4.";
      } else {
        errors.tier = undefined;
      }
    });

    $effect(() => {
      if (required(adversaryState.hp) || !isNumber(adversaryState.hp) || !inRange(adversaryState.hp!, 1, 100)) {
        errors.hp = "HP must be between 1 and 100.";
      } else {
        errors.hp = undefined;
      }
    });

    $effect(() => {
      if (required(adversaryState.stress) || !isNumber(adversaryState.stress) || !inRange(adversaryState.stress!, 1, 100)) {
        errors.stress = "Stress must be between 1 and 100.";
      } else {
        errors.stress = undefined;
      }
    });

    $effect(() => {
      if (required(adversaryState.motives_and_tactics)) {
        errors.motives_and_tactics = "Motives and Tactics must have a value.";
      } else {
        errors.motives_and_tactics = undefined;
      }
    });

    $effect(() => {
      if (required(adversaryState.difficulty) || !isNumber(adversaryState.difficulty) || !inRange(adversaryState.difficulty!, 1, 100)) {
        errors.difficulty = "Difficulty must be between 1 and 100.";
      } else {
        errors.difficulty = undefined;
      }
    });

    $effect(() => {
      console.log("atk updated")
      if (required(adversaryState.atk)) {
        errors.atk = "Attack Bonus must contain a value.";
      } else {
        errors.atk = undefined;
      }
    });

    $effect(() => {
      if (required(adversaryState.attack)) {
        errors.attack = "Attack Name must contain a value.";
      } else {
        errors.attack = undefined;
      }
    });

    $effect(() => {
      if (required(adversaryState.damage)) {
        errors.damage = "Damage must contain a value.";
      } else {
        errors.damage = undefined;
      }
    });

    $effect(() => {
      if (required(adversaryState.source)) {
        errors.source = "Source must contain a value.";
      } else {
        errors.source = undefined;
      }
    });

    let features: FeaturesProps = $state({ feats: [] })

    const addFeature = () => {
      features.feats.push({
        name: "",
        text: "",
      })
    }

    const onSubmit = () => {
        let adv = Object.assign($state.snapshot(adversaryState), { thresholds: thresholds }, features);
        console.log("submitting", adv);
        // adversary.thresholds = thresholds;
        // plugin.adversaries.add(adversary);
    }
</script>

<style>
    .dht-adversary-form {
        display: flex;
        /* min-height: 80vh; */
        flex-direction: column;
        align-items: center; 
        justify-content: center;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        min-width: 80%;
    }

    .text-destructive {
        color: var(--text-error);
    }

    .text-sm {
        font-size: var(--font-small)
    }

    .text-xs {
        font-size: var(--font-smallest);
    }

    .text-muted-foreground {
        color: var(--text-muted)
    }
</style>

<div class="dht-adversary-form">
    <div class="form-group">
      <label for="name" class={errors.name && "text-destructive"}>Name</label>
      <input type="text" id="name" name="name" placeholder="Enter a name" bind:value={adversaryState.name} />
      {#if errors.text}
        <p class="text-sm text-destructive">{errors.name}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's name.
      </p>
    </div>

    <div class="form-group">
      <label for="description" class={errors.text && "text-destructive"}>Description</label>
      <textarea
        placeholder="What is the description of the adversary?"
        class="resize-none"
        id="description"
        name="description"
        bind:value={adversaryState.text}
      ></textarea>
      <p class="text-xs text-muted-foreground">
        This is the adversary's description
      </p>
      {#if errors.text}
        <p class="text-xs text-destructive">{errors.text}</p>
      {/if}
    </div>
    
    <div class="form-group">
      <label for="tier" class={errors.tier && "text-destructive"}>Tier</label>
      <input type="number" id="tier" name="tier" placeholder="1" bind:value={adversaryState.tier} />
      {#if errors.tier}
        <p class="text-sm text-destructive">{errors.tier}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        The adversary's tier
      </p>
    </div>
    
    
    <div class="form-group">
      <label for="type" class={errors.adversaryType && "text-destructive"}>Adversary Type</label>
      <select bind:value={adversaryState.adversaryType} name="type">
        {#each adversaryTypes as advType}
            <option value={advType} label={advType}></option>    
        {/each}
      </select>
      <p class="text-xs text-muted-foreground">
        Select the type of adversaryState.
      </p>
      {#if errors.adversaryType}
          <p class="text-sm text-destructive">{errors.adversaryType}</p>
      {/if}
    </div>


    <div class="form-group">
      <label for="motives_and_tactics" class={errors.motives_and_tactics && "text-destructive"}>Motives and Tactics</label>
      <input type="text" id="motives_and_tactics" name="motives_and_tactics" placeholder="" bind:value={adversaryState.motives_and_tactics} />
      {#if errors.motives_and_tactics}
        <p class="text-sm text-destructive">{errors.motives_and_tactics}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        What motives the adversary and what tactics does it use.
      </p>
    </div>

    
    <div class="form-group">
      <label for="hp" class={errors.hp && "text-destructive"}>HP</label>
      <input type="number" id="hp" name="hp" placeholder="1" bind:value={adversaryState.hp} />
      {#if errors.hp}
        <p class="text-sm text-destructive">{errors.hp}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's HP
      </p>
    </div>
    

    <div class="form-group">
      <label for="stress" class={errors.stress && "text-destructive"}>Stress</label>
      <input type="number" id="stress" name="stress" placeholder="1" bind:value={adversaryState.stress} />
      {#if errors.stress}
        <p class="text-sm text-destructive">{errors.stress}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's Stress
      </p>
    </div>
    
    <div class="form-group">
      <label for="major_threshold" class={errors.major_threshold && "text-destructive"}>Major Threshold</label>
      <input type="number" id="major_threshold" name="major_threshold" placeholder="-" bind:value={major_threshold} />
      {#if errors.major_threshold}
        <p class="text-sm text-destructive">{errors.major_threshold}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's Major Armor Threshold
      </p>
    </div>
    
    <div class="form-group">
      <label for="severe_threshold" class={errors.severe_threshold && "text-destructive"}>Sever Threshold</label>
      <input type="number" id="severe_threshold" name="severe_threshold" placeholder="-" bind:value={severe_threshold} />
      {#if errors.severe_threshold}
        <p class="text-sm text-destructive">{errors.severe_threshold}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's Sever Armor Threshold
      </p>
    </div>
    
    
    <div class="form-group">
      <label for="difficulty" class={errors.difficulty && "text-destructive"}>Difficulty</label>
      <input type="number" id="difficulty" name="difficulty" placeholder="10" bind:value={adversaryState.difficulty} />
      {#if errors.difficulty}
        <p class="text-sm text-destructive">{errors.difficulty}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's difficulty.
      </p>
    </div>
    
    <div class="form-group">
      <label for="atk" class={errors.atk && "text-destructive"}>Attack Bonus</label>
      <input type="text" id="atk" name="atk" placeholder="+1" bind:value={adversaryState.atk} />
      {#if errors.atk}
        <p class="text-sm text-destructive">{errors.atk}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's Attack Bonus
      </p>
    </div>
    
    <div class="form-group">
      <label for="attack" class={errors.attack && "text-destructive"}>Attack Name</label>
      <input type="text" id="attack" name="attack" placeholder="Claw" bind:value={adversaryState.attack} />
      {#if errors.attack}
        <p class="text-sm text-destructive">{errors.attack}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's basic attack name.
      </p>
    </div>
    
    <div class="form-group">
      <label for="range" class={errors.range && "text-destructive"}>range</label>
      <select bind:value={adversaryState.range} name="range">
        {#each adversaryRanges as advRange}
            <option value={advRange} label={advRange}></option>    
        {/each}
      </select>
      <p class="text-xs text-muted-foreground">
        This is the range of the adversary's basic attack.
      </p>
      {#if errors.range}
          <p class="text-sm text-destructive">{errors.range}</p>
      {/if}
    </div>

    <div class="form-group">
      <label for="damage" class={errors.damage && "text-destructive"}>Damage</label>
      <input type="text" id="damage" name="damage" placeholder="1d6+1 phys" bind:value={adversaryState.damage} />
      {#if errors.damage}
        <p class="text-sm text-destructive">{errors.damage}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the damage calculation of the adversary's basic attack.
      </p>
    </div>
    
    <!-- 
    <div class="form-group">
      <label for="experience" class={errors.experience && "text-destructive"}>Experience</label>
      <input type="text" id="experience" name="experience" placeholder="Die to heroes +2" bind:value={adversaryState.experience} />
      {#if errors.experience}
        <p class="text-sm text-destructive">{errors.experience}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is one of the adversary's experiences.
      </p>
    </div>
-->

    <div class="form-group">
      <label for="source" class={errors.source && "text-destructive"}>Source</label>
      <input type="text" id="source" name="source" placeholder="homebrew" bind:value={adversaryState.source} />
      {#if errors.source}
        <p class="text-sm text-destructive">{errors.source}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's source (book, homebrew, etc)
      </p>
    </div>

    <button type="submit" onclick={onSubmit} disabled={valid}>Submit</button>
</div>