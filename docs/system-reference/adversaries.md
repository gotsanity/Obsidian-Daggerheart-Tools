# Adversaries — Daggerheart System Reference

> **Sources**: Daggerheart SRD p.71–72 (September 2025), Daggerheart Homebrew Kit v1.0 p.15–18 (July 2025)

---

## Adversary Types (SRD p.71)

| Type | Role & Design Notes |
|------|---------------------|
| **Solo** | Formidable challenge for a whole party, with or without support. High HP/Stress. Almost always has Relentless passive (typically 2–4 spotlights/turn). Most features of any type. Used as encounter centerpiece alongside Standards or Minions. |
| **Bruiser** | Tough; delivers powerful attacks. High HP and damage (d10s/d12s). Strong knockback and control. Lower attack modifier. |
| **Standard** | Representative of their fictional group. Baseline infantry. d6s or d8s. Safe HP range 4–6. No special spotlight rules. |
| **Skulk** | Maneuvering; exploits opportunities to ambush opponents. Fast, evasive. Hit-and-run. Bonuses when Hidden. d6s or d8s. |
| **Leader** | Commands and summons other adversaries. Lower personal HP; high impact via ally buffs, Fear generation, ally spotlighting. Higher damage (d10s) if meant as individual threat; lower (d8s) if command-focused. More features than average. |
| **Support** | Enhances allies; disrupts opponents. Low HP, high Stress. Lowest damage (d4s/d6s). Features focus on buffing/debuffing. |
| **Ranged** | Fragile in close encounters; high damage at range. Slightly higher damage dice (d8s or d10s). Higher attack modifier. Limited melee. |
| **Minion** | Easily dispatched but dangerous in numbers. Always: `hp: 1`, `stress: 1`, `thresholds: "None"`, flat damage. Fewest features. Killed when any damage is dealt. Minion passives define kill-count per damage. |
| **Social** | Presents challenges around conversation instead of combat. Low attack modifier (often negative). d4s/d6s. Features focus on Presence rolls, social manipulation, intrigue. More features than average. |
| **Horde** | Groups of identical creatures acting together as a single unit. `adversaryType` includes kill-count: `"Horde (N/HP)"`. Always includes a `"Horde (NdX+Y) - Passive"` feat describing reduced damage at half HP. d8s/d10s, halved at half HP. |

---

## Stat Block Fields

| Field | Type | Format / Valid Values |
|-------|------|-----------------------|
| `name` | string | Display name |
| `id` | string | UUID |
| `tier` | number | `1` \| `2` \| `3` \| `4` |
| `adversaryType` | string | One of the types above; Horde includes count: `"Horde (3/HP)"` |
| `source` | string | `"Daggerheart SRD"` for official; custom string for homebrew |
| `text` | string | Short flavor/description (shown in stat block) |
| `motives_and_tactics` | string | Comma-separated behavioral priorities |
| `difficulty` | number | Target number for rolls against this adversary |
| `thresholds` | string | `"Major/Severe"` (e.g., `"7/12"`) or `"None"` for Minions |
| `hp` | number | Hit points |
| `stress` | number | Stress slots |
| `atk` | string | Attack modifier with explicit sign: `"+3"`, `"-2"`, `"0"` |
| `attack` | string | Name of the standard attack |
| `range` | string | `"Melee"` \| `"Very Close"` \| `"Close"` \| `"Far"` \| `"Very Far"` |
| `damage` | string | `"NdX+Y phy"` \| `"NdX+Y mag"` \| `"NdX+Y phy/mag"` \| flat `"N phy"` |
| `experience` | string | Optional. Comma-separated trait bonuses: `"Ambusher +3, Keen Senses +2"` |
| `subtype` | string | Optional. Sub-classification |
| `feats` | array | `{ id: string, name: string, text: string }[]` |

---

## Feat Naming Conventions

Feature names always include a category suffix separated by ` - `:

| Suffix | Meaning |
|--------|---------|
| `"Name - Passive"` | Always active, no cost |
| `"Name - Action"` | Costs "Mark a Stress" or "Spend a Fear" |
| `"Name - Reaction"` | Triggered by a condition; fires without spotlight |
| `"Name - Action: Countdown (n)"` | Activates on trigger, standard countdown |
| `"Name - Passive: Countdown (Loop n)"` | Passive loop countdown |
| `"Name - Reaction: Countdown (Loop nd6)"` | Reaction that starts a countdown |

**Feature order in stat block**: passives first, then actions, then reactions.

---

## Official Stat Block Benchmarks by Tier (SRD p.72 / Homebrew Kit p.15)

| Statistic | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|-----------|--------|--------|--------|--------|
| Attack Modifier | +1 | +2 | +3 | +4 |
| Damage Dice | 1d6+2 to 1d12+4 | 2d6+3 to 2d12+4 | 3d8+3 to 3d12+5 | 4d8+10 to 4d12+15 |
| Difficulty | 11 | 14 | 17 | 20 |
| Major Threshold | 7 | 10 | 20 | 25 |
| Severe Threshold | 12 | 20 | 32 | 45 |

*Attack modifier can vary ±4 from tier baseline to tune hit frequency.*

### Tier to Player Level Mapping

| Tier | Player Levels |
|------|--------------|
| 1 | Level 1 |
| 2 | Levels 2–4 |
| 3 | Levels 5–7 |
| 4 | Levels 8–10 |

---

## HP Guidelines (Homebrew Kit p.15)

| HP | Meaning |
|----|---------|
| 1 | Cannon fodder (Minion). Defeated by any hit. No thresholds. |
| 2 | Survives one hit; two will defeat it. Needs only a Major threshold. |
| 3 | Could be defeated in one big (Severe) hit. |
| 4–6 | Safe bet for Standard adversaries. Default range when unsure. |
| 7–9 | Tougher, lasts longer. Battles can drag — use cautiously. |
| 10+ | Most difficult. Use only one per fight with smaller lackeys. Consider Phase Change to extend the fight. |

---

## Damage Dice by Adversary Type

| Type | Damage Range |
|------|-------------|
| Bruiser, Solo | Highest — d10s or d12s |
| Horde | d8s/d10s starting; Horde passive halves to d4s/d6s at half HP |
| Leader (individual threat) | d10s |
| Leader (command-focused) | d8s |
| Ranged | Slightly higher — d8s or d10s |
| Skulk, Standard | Middle — d6s or d8s |
| Social, Support | Lowest — d4s or d6s |
| Minion | Flat damage value (no dice) |

---

## Common Adversary Features (Homebrew Kit p.17–18)

| Feature | Description | Common On |
|---------|-------------|-----------|
| **Momentum - Reaction** | When this adversary makes a successful attack against a PC, you gain a Fear. | Bruisers, Leaders, Solos |
| **Terrifying - Passive** | When this adversary makes a successful attack, all PCs within Close range lose a Hope and you gain a Fear. | Powerful adversaries |
| **Relentless (X) - Passive** | Can be spotlighted up to X times per GM turn; spend Fear as usual. | Solos (essential) |
| **Slow - Passive** | Needs a token to act; place token when spotlighted without one; act when spotlighted with one. | Telegraphed powerful adversaries |
| **Minion (X) - Passive** | Defeated when they take any damage. For every X damage dealt, defeat an additional Minion in range. | Minions (required) |
| **Horde (NdX+Y) - Passive** | When Horde has marked half or more HP, standard attack deals NdX+Y damage instead. | Hordes (required) |
| **Group Attack - Action** | Spend a Fear to spotlight Minions/Horde and attack as a group. | Minion/Horde groups |
| **Arcane Form - Passive** | Resistant to magic damage. | Magic-resistant adversaries |
| **Armored Carapace - Passive** | Reduce physical damage taken by X. | Heavily armored adversaries |

> **Do not** give both Momentum and Terrifying to the same adversary — would generate 2 Fear per successful hit.

---

## Phase Change

Some adversaries (especially Solos and boss tiers) have a **Phase Change** reaction that replaces them with a new adversary when they mark their last HP. The new adversary immediately takes the spotlight.

**Example**: Volcanic Dragon: Obsidian Predator → Molten Scourge → Ashen Tyrant

---

## Building Balanced Encounters (SRD p.72)

Start with **(3 × number of PCs) + 2 Battle Points**, then adjust:

### Adjustments
| Modifier | Effect |
|----------|--------|
| −1 | Easier or shorter fight |
| −2 | Using 2 or more Solos |
| −2 | Adding +1d4 (or static +2) to all adversaries' damage rolls |
| +1 | Choosing adversary from a lower tier |
| +1 | Not including Bruisers, Hordes, Leaders, or Solos |
| +2 | Harder or longer fight |

### Battle Point Costs

| Cost | Adversary |
|------|-----------|
| 1 | Group of Minions equal to party size |
| 1 | Social or Support adversary |
| 2 | Horde, Ranged, Skulk, or Standard adversary |
| 3 | Leader adversary |
| 4 | Bruiser adversary |
| 5 | Solo adversary |

---

## SRD Adversaries by Tier

### Tier 1
Acid Burrower, Bear, Cave Ogre, Construct, Courtier, Deeproot Defender, Dire Wolf, Giant Mosquitoes, Giant Rat, Giant Scorpion, Glass Snake, Harrier, Archer Guard, Bladed Guard, Head Guard, Jagged Knife Bandit, Jagged Knife Hexer, Jagged Knife Kneebreaker, Jagged Knife Lackey, Jagged Knife Lieutenant, Jagged Knife Shadow, Jagged Knife Sniper, Merchant, Minor Chaos Elemental, Minor Fire Elemental, Minor Demon, Minor Treant, Green Ooze, Tiny Green Ooze, Red Ooze, Tiny Red Ooze, Petty Noble, Pirate Captain, Pirate Raiders, Pirate Tough, Sellsword, Skeleton Archer, Skeleton Dredge, Skeleton Knight, Skeleton Warrior, Spellblade, Swarm of Rats, Sylvan Soldier, Tangle Bramble, Tangle Bramble Swarm, Weaponmaster, Young Dryad, Brawny Zombie, Patchwork Zombie Hulk, Rotted Zombie, Shambling Zombie, Zombie Pack

### Tier 2
Archer Squadron, Assassin Poisoner, Apprentice Assassin, Master Assassin, Battle Box, Chaos Skull, Conscript, Courtesan, Cult Adept, Cult Fang, Cult Initiate, Demonic Hound Pack, Electric Eels, Elite Soldier, Failed Experiment, Giant Beastmaster, Giant Brawler, Giant Eagle, Giant Recruit, Gorgon, Juvenile Flickerfly, Knight of the Realm, Masked Thief, Merchant Baron, Minotaur Wrecker, Mortal Hunter, Royal Advisor, Secret-Keeper, Shark, Siren, Spectral Archer, Spectral Captain, Spectral Guardian, Spy, Stonewraith, War Wizard

### Tier 3
Adult Flickerfly, Demon of Avarice, Demon of Despair, Demon of Hubris, Demon of Jealousy, Demon of Wrath, Dire Bat, Dryad, Elemental Spark, Greater Earth Elemental, Greater Water Elemental, Huge Green Ooze, Hydra, Monarch, Oak Treant, Stag Knight, Treant Sapling, Head Vampire, Vampire, Vault Guardian Gaoler, Vault Guardian Sentinel, Vault Guardian Turret, Young Ice Dragon

### Tier 4
Arch-Necromancer, Fallen Shock Troop, Fallen Sorcerer, Fallen Warlord: Realm-Breaker, Fallen Warlord: Undefeated Champion, Hallowed Archer, Hallowed Soldier, High Seraph, Kraken, Oracle of Doom, Outer Realms Abomination, Outer Realms Corrupter, Outer Realms Thrall, Perfected Zombie, Volcanic Dragon: Obsidian Predator, Volcanic Dragon: Molten Scourge, Volcanic Dragon: Ashen Tyrant, Zombie Legion
