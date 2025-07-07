# Daggerheart Tools for Obsidian

This plugin aims to be a comprehensive set of tools for Daggerheart game masters. This plugin is a fan project and uses content available under the Darrington Press Community License. See LICENSE.md for details about the license.
## Planned Features and Status

The plugin aims to include the following features:

- [x] Data Persistence: Complete (should work with Obsidian Sync but needs confirmation)
- [x] Adversary stat blocks: Currently working for SRD Content and inline content
- [x] Encounter tracking (per MD document): Working, needs testing.
- [ ] Saving custom adversaries: In Progress
- [ ] Environment stat blocks: Planned
- [ ] Domain Card Display: Planned (will use placeholder art for SRD content)
- [ ] Adversary Creator Modal (custom adversaries): Planned
- [ ] Environment Creator Modal (custom environments): Planned
- [ ] Domain Card Creator Modal (custom domain cards): Planned
- [ ] Campaign Frame Creator and Tracking: Planned
- [ ] Fantasy Dice Roller plugin Integration: Planned, low priority
- [ ] Database/website importers/integration: TBD on availability of exported data. I'm open and willing if there is interest. Leave an issues suggesting your ideas.
- [ ] Custom Themes: TBD if it's even needed. Currently the css uses standard obsidian CSS so your theme should automatically apply.

### Features not current planned
- Non-SRD Official Content. Due to legal requirements this is simply unrealistic.
- VTT exports. I am not a user of any VTT so at the moment I just simply don't have the ability to write this. If you have the knowledge to tackle this, feel free to submit a pull request.
- Probably something else I forgot at the moment. This is a hobby project so if I have time and there is interest I will see what I can do.

## Usage:

### Adversaries

To create an adversary statblock:

````yaml
```adversary
name: Jagged Knife Bandit
```
````

To override the name of the adversary:

````yaml
```adversary
name: Jagged Knife Bandit
alias: Jimmy the Bandit
```
````

To create a custom adversary:
````yaml
````yaml
```adversary
source: "daggerheart-adversary"
name: "Acid Burrower"
alias: "Scar, Terror of Shay's Crossing"
tier: 1
type: "Solo"
description: "A horse-sized insect with digging claws and acidic blood. Scar has a large gash across one mandible and eye."
motives_and_tactics: "Burrow, drag away, feed, reposition"
difficulty: 14
thresholds: "8/15"
hp: 8
stress: 3
atk: "+3"
attack: "Claws"
range: "Very Close"
damage: "1d12+2 phy"
experience: "Tremor Sense +2"
feats:
- name: "Relentless (3) - Passive"
  text: "The Burrower can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
- name: "Earth Eruption - Action"
  text: "Mark a Stress to have the Burrower burst out of the ground. All creatures within Very Close range must succeed on an Agility Reaction Roll or be knocked over, making them Vulnerable until they next act."
- name: "Spit Acid - Action"
  text: "Make an attack against all targets in front of the Burrower within Close range. Targets the Burrower succeeds against take 2d6 physical damage and must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP and you gain a Fear."
- name: "Acid Bath - Reaction"
  text: "When the Burrower takes Severe damage, all creatures within Close range are bathed in their acidic blood, taking 1d10 physical damage. This splash covers the ground within Very Close range with blood, and all creatures other than the Burrower who move through it take 1d6 physical damage."
```
````


> [!NOTE] Markdown in stat blocks
> Some markdown is allowed inside of blocks but the field must be surrounded in quotes in order for it to render correctly.

## How to install the plugin

When a release is ready, and while waiting for Obsidian to include the program, you will be able to install it using the Obsidian BRAT plugin. In the mean time, ==**IF** you want to suffer through bugs and lost data you can manually install the plugin using the instructions below.==

## Manually installing the plugin

Provided the repository is stable and bug free (which it is very much not ATM):

- Clone the repository to your vault plugins folder.
- From the plugin directory run: npm run-script build
- Reload Obsidian.

## Contributing

Contributions are welcome. More information on how best to 
## API Documentation

More to come.
