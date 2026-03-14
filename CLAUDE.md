# Daggerheart Tools — Claude Context

## Project Overview

Daggerheart Tools is an Obsidian plugin (TypeScript + Svelte) that provides a GM toolkit for the Daggerheart RPG system. It renders YAML code blocks inside Obsidian notes as interactive stat blocks for adversaries and environments, and provides modals for creating/editing/searching game content stored in plugin settings.

**Repo:** https://github.com/gotsanity/obsidian-daggerheart-tools
**Current version:** 1.1.1

---

## Branch & Deployment Pipeline

```
feature-branch → development-branch → main
```

- **Feature branches** are where individual fixes and features are developed (e.g. `fix-complex-statblocks`).
- **Development branch** is the integration branch — PRs from feature branches merge here first.
- **`main`** is the release branch. Merging to `main` triggers the automated release pipeline.

### Automated Release (release-please)

`.github/workflows/release-please.yml` runs on every push to `main` (and can be triggered manually).

**How it works:**

1. **Job: `release-please`** — Uses `google-github-actions/release-please-action@v3` in `manifest` mode with `release-type: node`. This action reads conventional commits merged into `main` and automatically:
   - Maintains a release PR that accumulates changes and bumps `package.json` version
   - When the release PR is merged, creates a GitHub Release and git tag

2. **Job: `upload-build`** — Runs only when `release_created == true` (i.e., the release PR was just merged). It:
   - Checks out code and sets up Node 20
   - Runs `npm install && npm run build`
   - Packages build artifacts into `Daggerheart-Tools/` directory
   - Creates `Daggerheart-Tools.zip`
   - Uploads four release assets to the GitHub Release:
     - `Daggerheart-Tools-{tag}.zip` — full plugin zip
     - `main.js` — compiled bundle
     - `manifest.json` — Obsidian plugin manifest
     - `styles.css` — compiled styles

### npm Publish

`.github/workflows/npm-publish.yml` triggers on release creation (or manually). It publishes the package to npm under `@gotsanity/obsidian-daggerheart-tools` with public access, using `secrets.npm_token`.

### Summary: What triggers a release

| Action | Effect |
|--------|--------|
| Push feature branch | Nothing automated |
| Merge to development | Nothing automated |
| Merge to `main` | release-please opens/updates a release PR |
| Merge the release PR | GitHub Release created + build artifacts uploaded + npm publish |

> **Do not manually bump versions or create tags.** release-please manages `package.json` version, `CHANGELOG.md`, and git tags based on conventional commit messages.

---

## Build System

- **Dev:** `npm run dev` — watches with esbuild, inline sourcemaps, no type-check
- **Prod:** `npm run build` — `tsc -noEmit` type-check, then esbuild minified bundle
- **Outputs:** `main.js` (bundled TS + Svelte) and `styles.css` (compiled SASS)
- **Bundler:** esbuild with `esbuild-svelte` and `esbuild-sass-plugin`

---

## Architecture

### Entry Point

`src/main.ts` — extends `obsidian.Plugin`. Registers:
- Ribbon icon → `DaggerheartSelectModal`
- Commands: `open-new-adversary-modal`, `open-new-environment-modal`, `daggerheart-select-modal`
- Markdown post-processors for `adversary` and `environment` code blocks
- Editor autocompletion suggester
- Settings tab

### Data Flow

```
User input (Ribbon / Command palette)
    ↓
Modal (DaggerheartSelectModal / AdversaryModal / EnvironmentModal)
    ↓
Svelte Form (AdversaryForm / EnvironmentForm)
    ↓
Repository (AdversaryRepository / EnvironmentRepository)
    ↓
Persisted in Obsidian plugin settings
```

```
Markdown code block (```adversary / ```environment)
    ↓
main.ts postprocessor
    ↓
Linkifier.transformSource()  [src/parser/linkify.ts]
    ↓
LinkStringifier.transformSource()  [src/parser/stringifier.ts]
    → sanitizeYamlColonValues()  ← quotes values containing ': '
    ↓
parseYaml()
    ↓
Bestiary.get(name) lookup
    ↓
AdversaryBlock.svelte / EnvironmentBlock.svelte
```

### Key Modules

| Path | Purpose |
|------|---------|
| `src/main.ts` | Plugin entry point, registers everything |
| `src/api/api.ts` | Public API exposed as `window.DaggerheartTools` |
| `src/bestiary/bestiary.ts` | Singleton combining SRD + custom creatures |
| `src/bestiary/repository.ts` | Generic `Repository<T>` with CRUD + subscriptions |
| `src/parser/linkify.ts` | Resolves wiki/markdown links via Obsidian metadata cache |
| `src/parser/stringifier.ts` | Tokenises links for YAML safety; sanitises colon-in-value |
| `src/settings/settings.ts` | Plugin settings shape and defaults |
| `src/types/` | TypeScript interfaces for all domain types |
| `src/view/` | All Svelte components and renderer classes |

### Adversary Types

`solo`, `horde`, `standard`, `skulk`, `bruiser`, `ranged`, `support`, `leader`, `artillery`, `colossus`

### Renderer Pipeline Detail

Both `postprocessor` (adversary) and `environmentPostprocessor` in `main.ts` call:
```
Linkifier.transformSource(source)
  → LinkStringifier.transformSource(source)
      → [wiki/markdown link tokenisation]
      → sanitizeYamlColonValues()   // auto-quotes values with ': '
  → parseYaml()
  → mount Svelte component
```

---

## Common Patterns

### Repository Pattern
`Repository<T>` in `src/bestiary/repository.ts` provides generic CRUD. Each entity (adversary, encounter, environment, ability card) has a concrete subclass. Repositories persist data through Obsidian's `saveData` and notify subscribers on change.

### Link Tokenisation
Links are replaced with `<DHTOOLS-WIKI-LINK>…</DHTOOLS-WIKI-LINK>` or `<DHTOOLS-MARKDOWN-LINK>…</DHTOOLS-MARKDOWN-LINK>` tokens before YAML parsing, so colons inside link text don't break the YAML. Token-to-link conversion happens after parsing in Svelte components.

### YAML Colon Sanitisation (Issue #34 fix)
`LinkStringifier.sanitizeYamlColonValues()` post-processes each line: if a non-array, non-block-scalar, unquoted value contains `': '`, it wraps the value in double quotes. This fixes names like `Fallen Warlord: Realm-Breaker` without requiring authors to manually quote them in code blocks.

---

## SRD Content

- `src/bestiary/daggerheart-srd-bestiary.ts` — bundled adversary data
- `src/bestiary/daggerheart-srd-environments.ts` — bundled environment data
- SRD content can be toggled off in plugin settings; user-created content always shows

---

## Secrets Required

| Secret | Used by |
|--------|---------|
| `GITHUB_TOKEN` | Auto-provided by GitHub Actions (release asset uploads) |
| `secrets.npm_token` | npm publish workflow |
