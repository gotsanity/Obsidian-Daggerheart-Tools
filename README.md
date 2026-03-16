# Daggerheart Tools for Obsidian

This plugin aims to be a comprehensive set of tools for Daggerheart game masters. This plugin is a fan project and uses content available under the Darrington Press Community License. See LICENSE.md for details about the license.

## Features and Status

- [x] Data Persistence (compatible with Obsidian Sync)
- [x] Adversary stat blocks: SRD content and inline content
- [x] Encounter tracking (per MD document)
- [x] Custom adversary creator and editor
- [x] Environment stat blocks
- [x] Custom environment creator and editor
- [x] Data import/export with per-item selection
- [ ] Domain Card Display: Planned (will use placeholder art for SRD content)
- [ ] Domain Card Creator Modal (custom domain cards): Planned
- [ ] Campaign Frame Creator and Tracking: Planned
- [ ] Fantasy Dice Roller plugin integration: Planned, low priority
- [ ] VTT exports: Not currently planned — if you have the knowledge to tackle this, feel free to submit a pull request.
- [ ] Non-SRD official content: Not planned due to legal requirements.

## Usage

### Adversaries

#### Add an adversary block to a note

````yaml
```adversary
name: Jagged Knife Bandit
```
````

#### Select a block from the database

Use the command palette option **Daggerheart Tools: Add a Daggerheart Block to the document** to open a search modal. Clicking any entry places the block at the cursor position.

![Search Function Example](/docs/images/search-function.png)

#### Add a new adversary to the database

Click the Daggerheart symbol on the ribbon or use the **Daggerheart Tools: Add a new Adversary to the database** command palette option.

#### Override the adversary name temporarily

````yaml
```adversary
name: Jagged Knife Bandit
alias: Jimmy the Bandit
```
````

> [!NOTE] Markdown in stat blocks
> Some markdown is allowed inside of blocks but the field must be surrounded in quotes in order for it to render correctly.

#### Edit or save an adversary

**To permanently edit a saved adversary**: From a rendered adversary block, click the menu icon in the top right of the block and select Edit.

![Screenshot of adversary menu](/docs/images/adversary-menu.png)

**To create a custom adversary from an existing block**: Render the adversary block in reading mode, open the menu at the top right, and select Save As.

---

## How to Install

### Via BRAT (recommended)

Install the [Obsidian BRAT plugin](https://github.com/TfTHacker/obsidian42-brat) and add this repository to track releases.

### Manual Installation

- Clone the repository into your vault's `.obsidian/plugins/` folder.
- From the plugin directory, run: `npm run build`
- Reload Obsidian and enable the plugin in Settings → Community Plugins.

---

## Contributing

Contributions are welcome. To get started:

1. Fork the repository and create a feature branch from `development`.
2. Make your changes and run `npm run build` to verify there are no errors.
3. Open a pull request targeting the `development` branch.

Please keep PRs focused — one feature or fix per PR. For larger changes, open an issue first to discuss the approach.
