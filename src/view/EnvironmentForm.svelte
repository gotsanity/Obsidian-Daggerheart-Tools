<script lang="ts">
	import DaggerheartToolsPlugin from "src/main";
	import type { Environment } from "src/types/environment";
	import { nanoid } from "src/util/util";
	import { _plugin } from "./daggerstore";
	import { inRange, isNumber, required } from "./components/validators";

    let {
        environment = {
            name: "",
            id: nanoid(),
            tier: 1,
            environmentType: "Exploration",
            potential_adversaries: "",
            alias: "",
            impulses: "",
            difficulty: "",
            text: "",
            feats: [],
            source: "homebrew",
        },
        update = false,
        plugin
    } : {
        environment?: Environment,
        update: boolean,
        plugin: DaggerheartToolsPlugin,
    } = $props();

    if (!update) {
      let id = nanoid();
      console.log("setting id", id);
      environment.id = id;
    }
    
    let environmentState = $state(environment);

    export interface EnvironmentErrorProps {
      name?: string,
      alias?: string,
      tier?: string,
      environmentType?: string,
      difficulty?: string | number,
      text?: string,
      source?: string
    };

    let errors: EnvironmentErrorProps = $state({})

    let environmentTypes: string[] = [
      "Event",
      "Exploration",
      "Social",
      "Traversal"
    ];

    _plugin.set(plugin);
    
    $effect(() => {
      if (update) {
        if (required(environmentState.name)) {
          errors.name = "Name cannot be empty.";
        } else {
          errors.name = undefined;
        }
      } else {
        console.log(plugin, environmentState);
        if (required(environmentState.name)) {
          errors.name = "Name cannot be empty.";
        } else if (plugin.environments.exists(env => env.name == environmentState.name)) {
          errors.name = "Name already exists, please choose another.";
        } else {
          errors.name = undefined;
        }
      }
    });

    $effect(() => {
      if (required(environmentState.tier) || !isNumber(environmentState.tier) || !inRange(environmentState.tier!, 1, 4)) {
        errors.tier = "Tier must be between 1 and 4.";
      } else {
        errors.tier = undefined;
      }
    });

    $effect(() => {
      if (!required(environmentState.difficulty) && (!isNumber(environmentState.difficulty) || !inRange(environmentState.difficulty!, 0, 100))) {
        errors.difficulty = "Difficulty must be between 1 and 100.";
      } else {
        errors.difficulty = undefined;
      }
    });

    $effect(() => {
      if (required(environmentState.source)) {
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
      }
    }[] = $state([]);

    if (environment.feats) {
      environment.feats.forEach(feat => {
        features.push({
          name: feat.name,
          text: feat.text,
          errors: {}
        });
      })
    }

    const addFeature = () => {
      features.push({
        name: "",
        text: "",
        errors: {}
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

    const onSubmit = () => {
        let env = Object.assign(
          $state.snapshot(environmentState),
          { feats: features.map(feat => {
            return { name: feat.name, text: feat.text };
          })},
        );
        console.log("submitting", env);

        if (update) {
          plugin.updateEnvironment(env.id, env);
        } else {
          plugin.addNewEnvironment(env);
        }
    }

    const valid = $derived.by(() => {
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
    errorKey: keyof EnvironmentErrorProps,
    label: string,
    type: string,
    value: keyof Environment,
    description: string,
    placeholder?: string
  })}
    <div class="form-group">
      <label for={label} class={errors[errorKey] && "text-destructive"}>{label}</label>
      <input {type} id={label} name={label} {placeholder} bind:value={environmentState[value]} />
      {#if errors[errorKey]}
        <p class="text-sm text-destructive">{errors[errorKey]}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        {description}
      </p>
    </div>
{/snippet}

<div class="dht-environment-form">

    {@render formInput({
      errorKey: "name",
      label: "Name",
      type: "text",
      value: "name",
      description: "The environment's name.",
      placeholder: "Bandit"
    })}

    {#if environmentState.alias}
      {@render formInput({
        errorKey: "alias",
        label: "Alias",
        type: "text",
        value: "alias",
        description: "The environment's alias, used instead of name on save.",
        placeholder: "Tim"
      })}
    {/if}

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        placeholder="What is the description of the environment?"
        class="resize-none"
        id="description"
        name="description"
        bind:value={environmentState.text}
      ></textarea>
      <p class="text-xs text-muted-foreground">
        This is the environment's description
      </p>
    </div>

    <div class="form-group">
      <label for="potential_adversaries">Potential Adversaries</label>
      <textarea
        placeholder="What are the potential adversaries that can be found here?"
        class="resize-none"
        id="potential_adversaries"
        name="potential_adversaries"
        bind:value={environmentState.text}
      ></textarea>
      <p class="text-xs text-muted-foreground">
        This is the environment's potential adversaries.
      </p>
    </div>
    
    {@render formInput({
        errorKey: "tier",
        label: "Tier",
        type: "number",
        value: "tier",
        description: "The environment's tier.",
        placeholder: "1"
      })}
    
    <div class="form-group">
      <label for="type" class={errors.environmentType && "text-destructive"}>Environment Type</label>
      <div>
        <select bind:value={environmentState.environmentType} name="type">
          {#each environmentTypes as advType}
              <option value={advType} label={advType}></option>    
          {/each}
        </select>
      </div>
      <p class="text-xs text-muted-foreground">
        Select the type of environment.
      </p>
      {#if errors.environmentType}
          <p class="text-sm text-destructive">{errors.environmentType}</p>
      {/if}
    </div>


    <div class="form-group">
      <label for="impulses">Impulses</label>
      <input type="text" id="impulses" name="impulses" placeholder="impulses" bind:value={environmentState.impulses} />
      <p class="text-xs text-muted-foreground">
        The impulses of the environment.
      </p>
    </div>

    {@render formInput({
      errorKey: "difficulty",
      label: "Difficulty",
      type: "number",
      value: "difficulty",
      description: "The environment's difficulty. (empty for none, number otherwise)",
      placeholder: "-"
    })}
    
    <div class="form-group">
      <label class="label-heading" for="features">Features</label>
      <p class="text-xs text-muted-foreground">
        These are the environment's features.
      </p>
      {#each features as feature}
        <div class="sub-group">
          <div class="added-button">
            <label for="feature-name" class={feature.errors.name && "text-destructive"}>Feature Name</label>
            <button onclick={() => {
              features.remove(feature);
            }}>X</button>
          </div>
          <input type="text" name="feature-name" placeholder="Feature name here" bind:value={feature.name} />
          <label for="feature-text" class={feature.errors.text && "text-destructive"}>Feature Text</label>
          <textarea
            placeholder="Feature text here?"
            class="resize-none"
            bind:value={feature.text}
          ></textarea>
          {#if feature.errors.name}
            <p class="text-sm text-destructive">{feature.errors.name}</p>
          {/if}
          {#if feature.errors.text}
            <p class="text-sm text-destructive">{feature.errors.text}</p>
          {/if}
        </div>
      {/each}
      <button class="add-button" onclick={addFeature}>Add Feature</button>
    </div>

    {@render formInput({
      errorKey: "source",
      label: "Source",
      type: "text",
      value: "source",
      description: "The environment's source.",
      placeholder: "homebrew"
    })}

    <button type="submit" onclick={onSubmit} disabled={valid}>Submit</button>
</div>