<script lang="ts">
	import type { Adversary } from "src/types/adversary";
	import { nanoid } from "src/util/util";

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
        }
    } : {
        adversary?: Adversary
    } = $props();

    let errors = $derived.by(() => {
        return {
            name: undefined,
            tier: undefined,
            adversaryType: undefined,
            motives_and_tactics: undefined,
            hp: undefined,
            stress: undefined,
            major_threshold: undefined,
            severe_threshold: undefined,
            difficulty: undefined,
            atk: undefined,
            attack: undefined,
            range: undefined,
            damage: undefined,
            text: undefined,
            experiences: undefined,
            feats: undefined,
            source: undefined
        };
    })

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

    let adversaryData: Adversary = ({
        name: adversary?.alias || adversary?.name || "",
        id: nanoid(),
        tier: adversary?.tier || 1,
        adversaryType: adversary?.adversaryType || "Standard",
        motives_and_tactics: adversary?.motives_and_tactics || "",
        hp: adversary?.hp || 1,
        stress: adversary?.stress || 1,
        difficulty: adversary?.difficulty || 10,
        atk: adversary?.atk || "+0",
        attack: adversary?.attack || "Strike",
        range: adversary?.range || "Melee",
        damage: adversary?.damage || "1 phys",
        text: adversary?.text || "Adversary description",
        experience: adversary?.experience || "",
        feats: adversary?.feats || [],
        source: adversary?.source || "",
    });

    const onSubmit = () => {
        console.log("submitting", adversary);
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
      <input type="text" id="name" name="name" placeholder="Enter a name" bind:value={adversary.name} />
      {#if errors.name}
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
        bind:value={adversary.text}
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
      <input type="number" id="tier" name="tier" placeholder="1" bind:value={adversary.tier} />
      {#if errors.tier}
        <p class="text-sm text-destructive">{errors.tier}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        The adversary's tier
      </p>
    </div>
    
    
    <div class="form-group">
      <label for="type" class={errors.adversaryType && "text-destructive"}>Adversary Type</label>
      <select bind:value={adversary.adversaryType} name="type">
        {#each adversaryTypes as advType}
            <option value={advType} label={advType}></option>    
        {/each}
      </select>
      <p class="text-xs text-muted-foreground">
        Select the type of adversary.
      </p>
      {#if errors.adversaryType}
          <p class="text-sm text-destructive">{errors.adversaryType}</p>
      {/if}
    </div>


    <div class="form-group">
      <label for="motives_and_tactics" class={errors.motives_and_tactics && "text-destructive"}>Motives and Tactics</label>
      <input type="text" id="motives_and_tactics" name="motives_and_tactics" placeholder="" bind:value={adversary.motives_and_tactics} />
      {#if errors.motives_and_tactics}
        <p class="text-sm text-destructive">{errors.motives_and_tactics}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        What motives the adversary and what tactics does it use.
      </p>
    </div>

    
    <div class="form-group">
      <label for="hp" class={errors.hp && "text-destructive"}>HP</label>
      <input type="number" id="hp" name="hp" placeholder="1" bind:value={adversary.hp} />
      {#if errors.hp}
        <p class="text-sm text-destructive">{errors.hp}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's HP
      </p>
    </div>
    

    <div class="form-group">
      <label for="stress" class={errors.stress && "text-destructive"}>Stress</label>
      <input type="number" id="stress" name="stress" placeholder="1" bind:value={adversary.stress} />
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
      <input type="number" id="difficulty" name="difficulty" placeholder="10" bind:value={adversary.difficulty} />
      {#if errors.difficulty}
        <p class="text-sm text-destructive">{errors.difficulty}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's difficulty.
      </p>
    </div>
    
    <div class="form-group">
      <label for="atk" class={errors.atk && "text-destructive"}>Attack Bonus</label>
      <input type="text" id="atk" name="atk" placeholder="+1" bind:value={adversary.atk} />
      {#if errors.atk}
        <p class="text-sm text-destructive">{errors.atk}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's Attack Bonus
      </p>
    </div>
    
    <div class="form-group">
      <label for="attack" class={errors.attack && "text-destructive"}>Attack Name</label>
      <input type="text" id="attack" name="attack" placeholder="Claw" bind:value={adversary.attack} />
      {#if errors.attack}
        <p class="text-sm text-destructive">{errors.attack}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's basic attack name.
      </p>
    </div>
    
    <div class="form-group">
      <label for="range" class={errors.range && "text-destructive"}>range</label>
      <select bind:value={adversary.range} name="range">
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
      <input type="text" id="damage" name="damage" placeholder="1d6+1 phys" bind:value={adversary.damage} />
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
      <input type="text" id="experience" name="experience" placeholder="Die to heroes +2" bind:value={adversary.experience} />
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
      <input type="text" id="source" name="source" placeholder="homebrew" bind:value={adversary.source} />
      {#if errors.source}
        <p class="text-sm text-destructive">{errors.source}</p>
      {/if}
      <p class="text-xs text-muted-foreground">
        This is the adversary's source (book, homebrew, etc)
      </p>
    </div>

    <button type="submit" onclick={onSubmit}>Submit</button>
</div>