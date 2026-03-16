# Core Mechanics — Daggerheart System Reference

> **Sources**: Daggerheart SRD (September 2025), Daggerheart Homebrew Kit v1.0 (July 2025)

---

## The Basics

- **Daggerheart** is a collaborative fantasy TTRPG for 1 GM and 2–5 players. Sessions last 2–4 hours.
- Players make **action rolls** using two differently colored d12s called **Duality Dice** — one representing Hope, one Fear. The total + modifiers is compared to the GM's Difficulty. If the total meets or beats Difficulty, the player succeeds. The higher Duality Die indicates Hope (if the Hope die) or Fear (if the Fear die) as a secondary resource effect.

---

## Key Terms

| Term | Definition |
|------|------------|
| **Difficulty** | Target number for rolls. Known elsewhere as DC. Set per adversary/environment stat block, or by the GM. |
| **Target** | Anything a feature affects — a creature (living being) or object. "Creature" = any living being regardless of side. Use "target" for broader applicability. |
| **Evasion** | How hard it is for the GM to hit a PC. Adversaries do **not** have Evasion — PC features should not reference adversary Evasion or Difficulty. |
| **Proficiency** | A PC's scaling factor (1–6). Adversaries do not have Proficiency. |
| **Spotlight** | Focus of action at the table. Players and GM pass it back and forth. GM spends Fear to shift spotlight to adversaries. |
| **Actions** | When a PC takes the spotlight to do something requiring an action roll (or a feature that calls for one). |
| **Reactions** | Features with a listed trigger; fire without the spotlight. Adversary reactions work the same way. |
| **Move** | An action or reaction the GM makes — introduced by a failed roll, Fear spend, or another source. |
| **GM Turn** | All GM moves after a failed roll, Fear roll, or other Fear source — grouped as one "GM turn." Adversaries typically act once per GM turn (except Relentless). |

---

## Duality Roll Results

| Result | Outcome |
|--------|---------|
| **Critical Success** (doubles meeting/beating Difficulty) | Enhanced outcome |
| **Success with Hope** | Succeed + earn a Hope |
| **Success with Fear** | Succeed + GM earns a Fear |
| **Failure with Hope** | Fail + earn a Hope |
| **Failure with Fear** | Fail + GM earns a Fear |

---

## Hope & Fear Economy

### Fear
- **GM resource.** Maximum: 12.
- **Spent to**: spotlight an adversary, trigger Fear-cost features, make additional GM moves.
- **Earned from**: failed PC rolls, adversary features (Momentum, Terrifying), other triggers.

### Hope
- **Player resource.**
- **Spent to**: use Hope Features (class abilities, cost 3 Hope), certain domain card features.
- **Earned from**: successful rolls with Hope die showing higher.
- Adversary features can cause PCs to **lose** Hope, but cannot force them to **spend** it.

---

## Spotlight & Action Economy

- Players hold spotlight by default. GM spends Fear to shift to adversaries.
- Adversaries act **once per GM turn**. To act more often, they need **Relentless (X) - Passive**.
- **Relentless (X) - Passive**: Spotlighted up to X times per GM turn; spend Fear as usual each time.
- **Slow - Passive**: Needs a token to act. When spotlighted without token: place token and describe preparation. When spotlighted with token: clear it and act. Creates telegraphed powerful moves.

---

## Adversary Attacks

- The GM rolls a d20 and adds the adversary's Attack Modifier. If the total meets or beats the target's Evasion, the attack succeeds.
- For attacks against multiple targets: make one attack roll and compare to each target's Evasion separately.
- On a success, the adversary deals the damage listed in their stat block.
- The GM can grant advantage (roll extra d20, keep higher), impose disadvantage (extra d20, keep lower), or spend a Fear to add a relevant Experience from the stat block.

---

## Reaction Rolls

The "saving throw" equivalent. GM calls for these to see how a target reacts.

- Format: `"[Trait] Reaction Roll ([Difficulty])"` — e.g., `"Agility Reaction Roll (15)"`
- Alternatives can be offered: `"an Agility or Instinct Reaction Roll"`
- **Do not** generate Hope or Fear.

---

## Thresholds & Damage

- **Thresholds** are damage checkpoints: **Major** (minor consequence) and **Severe** (significant consequence).
- Format in stat blocks: `"Major/Severe"` as a string (e.g., `"7/12"`). Minions use `"None"`.
- **Direct damage**: Bypasses armor. Written in feat text as `"direct physical damage"` or `"direct magic damage"`.
- **Standard damage**: Subject to armor reduction.
- Damage expression format: `NdX+Y phy`, `NdX+Y mag`, or flat `N phy` (Minions).
- **Damage types**: `phy` (physical), `mag` (magic). Some feats deal both: `NdX+Y phy/mag`.

---

## Status Conditions

| Condition | Effect |
|-----------|--------|
| **Vulnerable** | Attacker gains advantage; target can't avoid effects at disadvantage |
| **Restrained** | Can't move freely; freed by Strength/Finesse roll or specific damage |
| **Hidden** | Attacker gains advantage on attacks; can't be targeted |
| **Dazed/Dizzied** | Disadvantage on next action roll, then clears |
| **Cloaked** | Concealment/stealth state |
| **Poisoned** | Must roll before action rolls; specific severity varies |
| **Asleep** | Incapacitated until damage or GM ends |
| **Entranced** | Fixed focus; Vulnerable; can't act |
| **Rooted** | Can't move; resistance to physical damage in some cases |
| **On Fire** | Ongoing damage; extinguished with Finesse Roll |
| **Silenced** | Can't make noise or cast spells |
| **Stunned** | Can't use reactions or other actions until cleared |
| **Enraptured** | Attention fixed; disadvantage on rolls against source |
| **Horrified** | Vulnerable; reaction roll required |
| **Invisible** | Disadvantage on attacks against invisible target |
| **Spectral** | Immune to attacks; can pass through objects |
| **Guilty** | Takes double damage from specific source until removed |
| **Chilled** | Disadvantage on attack rolls |
| **Deathlocked** | Attacks from holder deal direct damage |
| **Frenzied** | Bonus damage rolls; can't use Armor Slots |
| **Imbuement** | Adversary gains advantage on all attacks (temporary) |
| **Enveloped** | Must mark Stress each action roll; freed on Severe damage |

---

## Countdown Types

| Type | Behavior |
|------|---------|
| **Standard Countdown (n)** | Starts at n, advances by 1 each time a player makes an action roll. Triggers at 0. |
| **Dynamic — Consequence Countdown** | Advances toward negative effects. |
| **Dynamic — Progress Countdown** | Advances toward positive effects. |
| **Long-Term Countdown** | Advances after rests instead of action rolls. |
| **Loop Countdown (n)** | Resets to n after triggering; repeats. |
| **Countdown (Decreasing n)** | Starts at n, decreases maximum value by 1 each time it loops. |

### Dynamic Countdown Advancement by Roll Result

| Roll Result | Consequence Countdown | Progress Countdown |
|-------------|----------------------|-------------------|
| Failure with Fear | Tick down 3 | No advancement |
| Failure with Hope | Tick down 2 | No advancement |
| Success with Fear | Tick down 1 | Tick down 1 |
| Success with Hope | No advancement | Tick down 2 |
| Critical Success | No advancement | Tick down 3 |

---

## Rule of Six and Twelve

Design using the existing 6/12 structures rather than introducing new scales:

- Characters have 6 HP slots, 6 Stress slots
- Max trait modifier: +6
- Max Proficiency: 6
- GM maximum Fear: 12
- Max Armor Slots: 12
