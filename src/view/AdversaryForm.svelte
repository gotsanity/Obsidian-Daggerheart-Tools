<script lang="ts">
	import DaggerheartToolsPlugin from "src/main";
	import type { Adversary } from "src/types/adversary";
	import { nanoid } from "src/util/util";
	import { _plugin } from "./daggerstore";
	import { inRange, isNumber, required } from "./components/validators";

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
            attack: "",
            range: "Melee",
            damage: "",
            text: "",
            feats: [],
            source: "",
            thresholds: "-/-"
        },
        update = false,
        plugin
    } : {
        adversary?: Adversary,
        update: boolean,
        plugin: DaggerheartToolsPlugin,
    } = $props();

    if (!update) {
      let id = nanoid();
      console.log("setting id", id);
      adversary.id = id;
    }

    let adversaryState = $state(adversary);

    export interface AdversaryErrorProps {
      name?: string,
      alias?: string,
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
      source?: string
    };

    let errors: AdversaryErrorProps = $state({})
    let touched: Partial<Record<keyof AdversaryErrorProps, boolean>> = $state({});

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
        "Support",
        "Colossus"
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

    _plugin.set(plugin);

    $effect(() => {
      if (update) {
        if (required(adversaryState.name)) {
          errors.name = "Name cannot be empty.";
        } else {
          errors.name = undefined;
        }
      } else {
        console.log(plugin, adversaryState);
        if (required(adversaryState.name)) {
          errors.name = "Name cannot be empty.";
        } else if (plugin.adversaries.exists(adv => adv.name == adversaryState.name)) {
          errors.name = "Name already exists, please choose another.";
        } else {
          errors.name = undefined;
        }
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

    let features: {
      name?: string,
      text?: string,
      errors: {
        name?: string
        text?: string,
      },
      touched: {
        name?: boolean,
        text?: boolean,
      }
    }[] = $state([]);

    if (adversary.feats) {
      adversary.feats.forEach(feat => {
        features.push({
          name: feat.name,
          text: feat.text,
          errors: {},
          touched: {}
        });
      })
    }

    const addFeature = () => {
      features.push({
        name: "",
        text: "",
        errors: {},
        touched: {}
      })
    }

    $effect(() => {
      features.forEach(feat => {
        if (required(feat.name)) {
          feat.errors.name = "Feature name cannot be empty."
        } else {
          feat.errors.name = undefined;
        }

        if (required(feat.text)) {
          feat.errors.text = "Feature text cannot be empty.";
        } else {
          feat.errors.text = undefined;
        }
      })
    })

    let experiences: {
      text?: string,
      value: number,
      errors: {
        text?: string,
        value?: string
      },
      touched: {
        text?: boolean,
        value?: boolean,
      }
    }[] = $state([]);

    if (adversary.experience) {
      adversary.experience.split(', ').forEach(exp => {
        experiences.push({ text: exp.split(' +')[0], value: Number(exp.split(' +')[1]), errors: {}, touched: {}});
      })
    }

    const addExperience = () => {
      experiences.push({ value: 2, errors: {}, touched: {}});
    }

    $effect(() => {
      experiences.forEach(exp => {
        if (required(exp.text)) {
          exp.errors.text = "Experience text cannot be empty."
        } else {
          exp.errors.text = undefined;
        }

        if (!isNumber(exp.value) || !inRange(exp.value, 1, 10)) {
          exp.errors.value = "Experience value must be between 1 and 10.";
        } else {
          exp.errors.value = undefined;
        }
      })
    })

    const onSubmit = () => {
        let adv = Object.assign(
          $state.snapshot(adversaryState),
          { thresholds: thresholds },
          { feats: features.map(feat => {
            return { name: feat.name, text: feat.text };
          })},
          { experience: experiences.map(exp => {
              return `${exp.text} +${exp.value}`
            }).join(', ')
          }
        );
        console.log("submitting", adv);

        if (update) {
          plugin.updateAdversary(adv.id, adv);
        } else {
          plugin.addNewAdversary(adv);
        }
    }

    const hasErrors = $derived.by(() => {
      return Object.values(errors).some(val => typeof val === 'string');
    })

</script>

{#snippet formInput({
    errorKey,
    label,
    type,
    value,
    description,
    placeholder
  } : {
    errorKey: keyof AdversaryErrorProps,
    label: string,
    type: string,
    value: keyof Adversary,
    description: string,
    placeholder?: string
  })}
    <div class="form-group">
      <label for={label} class={errors[errorKey] && touched[errorKey] && "text-destructive"}>{label}</label>
      <input {type} id={label} name={label} {placeholder} bind:value={adversaryState[value]} onblur={() => (touched[errorKey] = true)} />
      {#if errors[errorKey] && touched[errorKey]}
        <p class="text-sm text-destructive">{errors[errorKey]}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        {description}
      </p>
    </div>
{/snippet}

<div class="dht-adversary-form">

    <!-- Identity -->
    {@render formInput({
      errorKey: "name",
      label: "Name",
      type: "text",
      value: "name",
      description: "The adversary's name.",
      placeholder: "Bandit"
    })}

    {@render formInput({
      errorKey: "alias",
      label: "Alias",
      type: "text",
      value: "alias",
      description: "The adversary's alias, used instead of name on save.",
      placeholder: "Tim"
    })}

    <div class="form-group">
      <label for="description" class={errors.text && touched.text && "text-destructive"}>Description</label>
      <textarea
        placeholder="What is the description of the adversary?"
        class="resize-none"
        id="description"
        name="description"
        bind:value={adversaryState.text}
        onblur={() => (touched.text = true)}
      ></textarea>
      <p class="text-xs text-muted-foreground">
        This is the adversary's description
      </p>
      {#if errors.text && touched.text}
        <p class="text-xs text-destructive">{errors.text}</p>
      {/if}
    </div>

    <!-- Classification -->
    <hr class="dht-form-divider" />
    <h4 class="dht-form-section-heading">Classification</h4>

    {@render formInput({
        errorKey: "tier",
        label: "Tier",
        type: "number",
        value: "tier",
        description: "The adversary's tier.",
        placeholder: "1"
      })}

    <div class="form-group">
      <label for="type" class={errors.adversaryType && touched.adversaryType && "text-destructive"}>Adversary Type</label>
      <select bind:value={adversaryState.adversaryType} name="type" onblur={() => (touched.adversaryType = true)}>
        {#each adversaryTypes as advType}
            <option value={advType} label={advType}></option>
        {/each}
      </select>
      <p class="text-xs text-muted-foreground">
        Select the type of adversaryState.
      </p>
      {#if errors.adversaryType && touched.adversaryType}
          <p class="text-sm text-destructive">{errors.adversaryType}</p>
      {/if}
    </div>

    {@render formInput({
      errorKey: "motives_and_tactics",
      label: "Motives and Tactics",
      type: "text",
      value: "motives_and_tactics",
      description: "The adversary's motives and tactics.",
      placeholder: "Conquer the world, die horribly."
    })}

    {@render formInput({
      errorKey: "source",
      label: "Source",
      type: "text",
      value: "source",
      description: "The adversary's source.",
      placeholder: "homebrew"
    })}

    <!-- Combat Stats -->
    <hr class="dht-form-divider" />
    <h4 class="dht-form-section-heading">Combat Stats</h4>

    <div class="dht-form-row">
      <div class="form-group">
        <label for="HP" class={errors.hp && touched.hp && "text-destructive"}>HP</label>
        <input type="number" id="HP" name="HP" placeholder="1" bind:value={adversaryState.hp} onblur={() => (touched.hp = true)} />
        {#if errors.hp && touched.hp}
          <p class="text-sm text-destructive">{errors.hp}</p>
        {/if}
        <p class="text-xs text-muted-foreground">The adversary's HP.</p>
        {#if adversaryState.adversaryType === "Horde"}
          <label for="horde_count">#/HP</label>
          <input type="number" id="horde_count" name="horde_count" placeholder="3" bind:value={adversaryState.horde_count} />
          <p class="text-xs text-muted-foreground">
            Number of units defeated per 1 HP of damage dealt.
          </p>
        {/if}
      </div>

      <div class="form-group">
        <label for="Stress" class={errors.stress && touched.stress && "text-destructive"}>Stress</label>
        <input type="number" id="Stress" name="Stress" placeholder="1" bind:value={adversaryState.stress} onblur={() => (touched.stress = true)} />
        {#if errors.stress && touched.stress}
          <p class="text-sm text-destructive">{errors.stress}</p>
        {/if}
        <p class="text-xs text-muted-foreground">The adversary's Stress.</p>
      </div>
    </div>

    <div class="dht-form-row">
      <div class="form-group">
        <label for="major_threshold" class={errors.major_threshold && touched.major_threshold && "text-destructive"}>Major Threshold</label>
        <input type="number" id="major_threshold" name="major_threshold" placeholder="-" bind:value={major_threshold} onblur={() => (touched.major_threshold = true)} />
        {#if errors.major_threshold && touched.major_threshold}
          <p class="text-sm text-destructive">{errors.major_threshold}</p>
        {/if}
        <p class="text-xs text-muted-foreground">
          This is the adversary's Major Armor Threshold
        </p>
      </div>

      <div class="form-group">
        <label for="severe_threshold" class={errors.severe_threshold && touched.severe_threshold && "text-destructive"}>Severe Threshold</label>
        <input type="number" id="severe_threshold" name="severe_threshold" placeholder="-" bind:value={severe_threshold} onblur={() => (touched.severe_threshold = true)} />
        {#if errors.severe_threshold && touched.severe_threshold}
          <p class="text-sm text-destructive">{errors.severe_threshold}</p>
        {/if}
        <p class="text-xs text-muted-foreground">
          This is the adversary's Severe Armor Threshold
        </p>
      </div>
    </div>

    {@render formInput({
      errorKey: "difficulty",
      label: "Difficulty",
      type: "number",
      value: "difficulty",
      description: "The adversary's difficulty.",
      placeholder: "10"
    })}

    <!-- Attack -->
    <hr class="dht-form-divider" />
    <h4 class="dht-form-section-heading">Attack</h4>

    {@render formInput({
      errorKey: "atk",
      label: "Attack Bonus",
      type: "text",
      value: "atk",
      description: "The adversary's Attack Bonus.",
      placeholder: "+1"
    })}

    <div class="dht-form-row">
      {@render formInput({
        errorKey: "attack",
        label: "Attack Name",
        type: "text",
        value: "attack",
        description: "The adversary's Attack Name.",
        placeholder: "Claw"
      })}
      {@render formInput({
        errorKey: "damage",
        label: "Damage Value",
        type: "text",
        value: "damage",
        description: "The adversary's attack damage value.",
        placeholder: "1d4+1 phys"
      })}
    </div>

    <div class="form-group">
      <label for="range" class={errors.range && touched.range && "text-destructive"}>Range</label>
      <select bind:value={adversaryState.range} name="range" onblur={() => (touched.range = true)}>
        {#each adversaryRanges as advRange}
            <option value={advRange} label={advRange}></option>
        {/each}
      </select>
      <p class="text-xs text-muted-foreground">
        This is the range of the adversary's basic attack.
      </p>
      {#if errors.range && touched.range}
          <p class="text-sm text-destructive">{errors.range}</p>
      {/if}
    </div>

    <!-- Experiences -->
    <hr class="dht-form-divider" />
    <h4 class="dht-form-section-heading">Experiences</h4>

    <div class="form-group">
      <p class="text-xs text-muted-foreground">
        These are the adversary's experiences.
      </p>
      {#each experiences as experience, i}
        <div class="sub-group">
          <div class="added-button">
            <label for="experience-name" class={experience.errors.text && experience.touched.text && "text-destructive"}>Experience Text</label>
            <button onclick={() => {
              experiences.remove(experience);
            }}>X</button>
          </div>
          <input type="text" name="experience-text" placeholder="Die to heroes" bind:value={experience.text} onblur={() => (experience.touched.text = true)} />
          {#if experience.errors.text && experience.touched.text}
            <p class="text-sm text-destructive">{experience.errors.text}</p>
          {/if}
          <label for="experience-value" class={experience.errors.value && experience.touched.value && "text-destructive"}>Experience Value</label>
          <input type="number" name="experience-value" placeholder="2" bind:value={experience.value} onblur={() => (experience.touched.value = true)} />
          {#if experience.errors.value && experience.touched.value}
            <p class="text-sm text-destructive">{experience.errors.value}</p>
          {/if}
        </div>
      {/each}
      <button class="add-button" onclick={addExperience}>Add Experience</button>
    </div>

    <!-- Features -->
    <hr class="dht-form-divider" />
    <h4 class="dht-form-section-heading">Features</h4>

    <div class="form-group">
      <p class="text-xs text-muted-foreground">
        These are the adversary's features.
      </p>
      {#each features as feature}
        <div class="sub-group">
          <div class="added-button">
            <label for="feature-name" class={feature.errors.name && feature.touched.name && "text-destructive"}>Feature Name</label>
            <button onclick={() => {
              features.remove(feature);
            }}>X</button>
          </div>
          <input type="text" name="feature-name" placeholder="Feature name here" bind:value={feature.name} onblur={() => (feature.touched.name = true)} />
          <label for="feature-text" class={feature.errors.text && feature.touched.text && "text-destructive"}>Feature Text</label>
          <textarea name="feature-text" placeholder="Feature text here" class="resize-none" bind:value={feature.text} onblur={() => (feature.touched.text = true)}></textarea>
          {#if feature.errors.name && feature.touched.name}
            <p class="text-sm text-destructive">{feature.errors.name}</p>
          {/if}
          {#if feature.errors.text && feature.touched.text}
            <p class="text-sm text-destructive">{feature.errors.text}</p>
          {/if}
        </div>
      {/each}
      <button class="add-button" onclick={addFeature}>Add Feature</button>
    </div>

    <button type="submit" onclick={onSubmit} disabled={hasErrors}>Submit</button>
</div>
