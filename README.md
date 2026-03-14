# Daggerheart Tools for Obsidian

This plugin aims to be a comprehensive set of tools for Daggerheart game masters. This plugin is a fan project and uses content available under the Darrington Press Community License. See LICENSE.md for details about the license.
## Planned Features and Status

The plugin aims to include the following features:

- [x] Data Persistence: Complete (should work with Obsidian Sync but needs confirmation)
- [x] Adversary stat blocks: Currently working for SRD Content and inline content
- [x] Encounter tracking (per MD document)
- [x] Saving custom adversaries: Working, needs testing.
- [x] Adversary Creator Modal (custom adversaries): Working, needs ui cleanup.
- [x] Environment stat blocks: Working, needs testing
- [x] Environment Creator Modal (custom environments): Working, needs testing and ui cleanup
- [ ] Domain Card Display: Planned (will use placeholder art for SRD content)
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

#### To add an existing adversary block you can type the following into your note:
````yaml
```adversary
name: Jagged Knife Bandit
```
````

#### To select a block from the database:
Using the command pallete option *Daggerheart Tools: Add a Daggerheart Block to the document* will open a search modal. Clicking on any of the entries will place the block at the cursor position.

![Search Function Example](/docs/images/search-function.png)

#### To add a new adversary to the note:
Click on the Daggerheart symbol on the ribbon or use the *Daggerheart Tools: Add a new Adversary to the database* command pallete option.

#### To override the name of the adversary temporarily:

````yaml
```adversary
name: Jagged Knife Bandit
alias: Jimmy the Bandit
```
````

> [!NOTE] Markdown in stat blocks
> Some markdown is allowed inside of blocks but the field must be surrounded in quotes in order for it to render correctly.


#### Editing/Saving
**To permenently edit the details of a saved adversary**:

From a rendered adversary block, click on the menu icon in the top right of the block and select edit.
![Screenshot of adversary menu](/docs/images/adversary-menu.png)

**To create a custom adversary from an existing saved block**:

Create an adversary block using the directions above and (in reading mode) click on the menu at the top right of the block and select save as.

![Screenshot of adversary menu](/docs/images/adversary-menu.png)


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
