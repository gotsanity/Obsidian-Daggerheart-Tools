# Homebrew Guidelines — Daggerheart System Reference

> **Sources**: Daggerheart Homebrew Kit v1.0 p.3, 15–18 (July 2025), Daggerheart SRD (September 2025)

---

## Core Design Philosophy (Homebrew Kit p.3)

- **Self-contained**: All material needed to run an adversary or environment should be in its stat block.
- **Streamline**: If a mechanic doesn't fit in the allotted space, it's probably not right for Daggerheart.
- **Asymmetric**: Adversaries are designed differently from PCs. Don't reference PC-only mechanics (Evasion, Armor Slots, Proficiency, Hope, traits by name on adversary features).
- **Think narratively**: Adversary features should make fictional sense. Design the narrative first, then find the mechanic.

---

## Stat Design by Type

### Minions (always)
- `hp: 1`, `stress: 1`, `thresholds: "None"`
- Flat damage only (no dice): e.g., `"3 phy"`, `"10 phy"`
- Must include `"Minion (X) - Passive"` feat defining kill-count per damage dealt
- Fewest features; small role in scene

### Hordes (always)
- `adversaryType` specifies enemies-per-HP: `"Horde (N/HP)"`
- Must include `"Horde (NdX+Y) - Passive"` feat for degraded damage at half HP
- Higher starting damage (d8s/d10s), reduced to d4s/d6s by Horde passive

### Solos (recommended)
- Should have `"Relentless (X) - Passive"` (count 2–4 depending on tier/power)
- Highest HP range for their tier
- Most features; encounter centerpiece
- Consider a Phase Change reaction for boss encounters

---

## Stat Benchmarks by Tier (Homebrew Kit p.15)

| Statistic | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|-----------|--------|--------|--------|--------|
| Attack Modifier | +1 | +2 | +3 | +4 |
| Damage Dice | 1d6+2 to 1d12+4 | 2d6+3 to 2d12+4 | 3d8+3 to 3d12+5 | 4d8+10 to 4d12+15 |
| Difficulty | 11 | 14 | 17 | 20 |
| Major Threshold | 7 | 10 | 20 | 25 |
| Severe Threshold | 12 | 20 | 32 | 45 |

*Attack modifier can vary ±4 from tier baseline to tune hit frequency.*

---

## Damage Pools by Adversary Type

| Type | Damage Range |
|------|-------------|
| Bruiser, Solo | d10s or d12s |
| Horde | d8s/d10s (degraded to d4s/d6s by Horde passive) |
| Leader (individual threat) | d10s |
| Leader (command-focused) | d8s |
| Ranged | d8s or d10s |
| Skulk, Standard | d6s or d8s |
| Social, Support | d4s or d6s (lowest) |
| Minion | Flat damage number (no dice) |

Number of dice should equal or approximate the adversary's tier. The flat damage bonus pushes results toward the average threshold range for the tier.

---

## Feature Count by Adversary Type

| Type | Feature Count |
|------|--------------|
| Minion, Horde | 1–2 features max |
| Standard, Skulk | 2–3 features |
| Ranged, Bruiser | 2–3 features |
| Solo | 4–7 features (encounter centerpiece) |
| Leader, Social | 3–5 features (more command tools) |
| Support | 2–4 features |

---

## Feature Writing Guidelines

### Structure
`trigger → cost → range → effect → ending condition`

Frequency/usage limit can appear before or after the main mechanic.

### Costs
| Cost | Usage |
|------|-------|
| "Mark a Stress" | Common; naturally limits use (adversaries can't clear Stress mid-fight) |
| "Spend a Fear" | Powerful/impactful effects; GM resource cost |
| "Mark 2 Stress" | Very powerful effects |
| No cost | Passives; effects that are always on |

More powerful effect → higher cost or usage limit (once per scene, once per rest).

### What to Avoid in Features
- References to **Difficulty** (it's an adversary stat field, not used inside features)
- References to **Armor Slots** (PC mechanic)
- References to **Evasion** (PC mechanic)
- References to adversary **spending Hope** (adversaries can cause Hope loss, not force Hope spending)
- References to **Proficiency** (PC scaling factor)
- Trait names by name (e.g., "Agility", "Strength") unless specifically in a Reaction Roll call

### Feature Balance Rules
- Fear costs should create **large scene impact or turning points** — don't give trivial Fear-cost features
- **Do not** give both Momentum and Terrifying to the same adversary (would generate 2 Fear per successful hit)
- Stress costs naturally limit use frequency

---

## Scaling Adversaries Across Tiers (Homebrew Kit p.16)

To scale an adversary to a different tier:
1. Adjust Difficulty to tier baseline (11 / 14 / 17 / 20)
2. Adjust Attack modifier (±4 from tier baseline is acceptable range)
3. Adjust damage dice and flat bonus to tier range
4. Adjust damage thresholds to tier baseline
5. Adjust HP if needed (keep Minions at 1 HP always)
6. Add or remove features (add a reaction when scaling up; remove when scaling down)
7. Scale Experience bonuses up/down

---

## Experience Field

- Free-text trait list with bonus values, comma-separated.
- Format: `"Trait Name +N, Other Trait +M"` — e.g., `"Ambusher +3, Keen Senses +2"`
- GM spends a Fear to apply a relevant Experience to an attack roll or increase Difficulty on a roll against the adversary.

---

## Source Documents

| Document | Location |
|----------|----------|
| Daggerheart SRD | `docs/images/official-docs/Daggerheart-SRD-9-09-25.pdf` |
| Daggerheart Homebrew Kit v1.0 | `docs/images/official-docs/Daggerheart-Homebrew-Kit-v1.0-July-31-2025.pdf` |
| SRD Adversary Data | `src/bestiary/daggerheart-srd-bestiary.ts` |
| SRD Environment Data | `src/bestiary/daggerheart-srd-environments.ts` |
