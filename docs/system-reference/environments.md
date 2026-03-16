# Environments — Daggerheart System Reference

> **Sources**: Daggerheart SRD p.102 (September 2025), Daggerheart Homebrew Kit v1.0 (July 2025)

---

## Environment Types (SRD p.102)

| Type | Role & Design Notes |
|------|---------------------|
| **Exploration** | Wondrous locations with mysteries and marvels to discover. Features help PCs investigate, find secrets, gather information. Reaction features = traps or consequences for missteps. May introduce adversaries protecting secrets. |
| **Social** | Locations that primarily present interpersonal challenges. Features focus on Presence rolls, social dynamics, power structures. Reaction features = consequences of social missteps. |
| **Traversal** | Dangerous locations where movement through and around the space itself is a challenge. Features define rules for traversal, specific hazards. Reaction features show cost of failure (Stress, damage, adversary strike). |
| **Event** | Special activities or occurrences (rather than physical spaces). Drastically changes scene dynamics. Features detail exceptional circumstances and PC options. Reaction features show how PCs can be pulled into danger. |

---

## Environment Stat Block Fields

| Field | Type | Format / Valid Values |
|-------|------|-----------------------|
| `id` | string | UUID |
| `name` | string | Display name |
| `tier` | number | `1` \| `2` \| `3` \| `4` |
| `environmentType` | string | `"Exploration"` \| `"Social"` \| `"Traversal"` \| `"Event"` |
| `text` | string | One-line evocative summary / flavor |
| `impulses` | string | Comma-separated environmental agendas — what the place "wants" |
| `difficulty` | number \| string | Number (most cases) or special string (e.g., `"Special (see 'RelativeStrength')"`) |
| `potential_adversaries` | string | Comma-separated adversary suggestions (by name, often grouped by faction/type) |
| `feats` | array | `{ id: string, name: string, text: string }[]` |

**Note**: Environments have **no** `hp`, `stress`, `atk`, `attack`, `damage`, `range`, or `thresholds` fields.

---

## Benchmark Statistics for Environments by Tier (SRD p.102)

| Stat | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|------|--------|--------|--------|--------|
| Damage Dice | 1d6+1 to 1d8+3 | 2d6+3 to 2d10+2 | 3d8+3 to 3d10+1 | 4d8+3 to 4d10+10 |
| Difficulty | 11 | 14 | 17 | 20 |

---

## Environment Feature Guidelines

- Environments have **no Stress slots** — most features cost **nothing**.
- Fear-cost features are reserved for impactful actions (usually summoning adversaries or major scene shifts).
- Feature order: **passives first, then actions, then reactions** (same as adversaries).
- Feature Questions (italicized prompts in feature text) give GMs narrative hooks to improvise — include these in feature text for all features.
- Recommended minimum feature set: **1 passive + 1 action + 1 reaction**.

---

## SRD Environments by Tier

### Tier 1
| Name | Type |
|------|------|
| Abandoned Grove | Exploration |
| Ambushed | Event |
| Ambushers | Event |
| Bustling Marketplace | Social |
| Cliffside Ascent | Traversal |
| Local Tavern | Social |
| Outpost Town | Social |
| Raging River | Traversal |

### Tier 2
| Name | Type |
|------|------|
| Cult Ritual | Event |
| Hallowed Temple | Social |
| Haunted City | Exploration |
| Mountain Pass | Traversal |

### Tier 3
| Name | Type |
|------|------|
| Burning Heart of the Woods | Exploration |
| Castle Siege | Event |
| Pitched Battle | Event |

### Tier 4
| Name | Type |
|------|------|
| Chaos Realm | Traversal |
| Divine Usurpation | Event |
| Imperial Court | Social |
| Necromancer's Ossuary | Exploration |
