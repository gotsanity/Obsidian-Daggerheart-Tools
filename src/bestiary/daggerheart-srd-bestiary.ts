import type { Adversary } from "src/types/adversary";

export const BESTIARY: Adversary[] = [
  {
    name: "Acid Burrower",
    id: 'c09b1e63-b5b5-4ef4-851c-8d88e150b5b8',
    tier: "1",
    source: "Daggerheart SRD",
    type: "Solo",
    text: "A horse-sized insect with digging claws and acidic blood.",
    motives_and_tactics: "Burrow, drag away, feed, reposition",
    difficulty: 14,
    thresholds: "8/15",
    hp: 8,
    stress: 3,
    atk: "+3",
    attack: "Claws",
    range: "Very Close",
    damage: "1d12+2 phy",
    experience: "Tremor Sense +2",
    feats: [
      {
        id: "EiDYVI4tFW7VYA7QHSYrx",
        name: "Relentless (3) - Passive",
        text: "The Burrower can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "kfMdQMACnV1TtdZcznOgA",
        name: "Earth Eruption - Action",
        text: "Mark a Stress to have the Burrower burst out of the ground. All creatures within Very Close range must succeed on an Agility Reaction Roll or be knocked over, making them Vulnerable until they next act."
      },
      {
        id: "JHtTa8gVxnWDurkPa_2Nz",
        name: "Spit Acid - Action",
        text: "Make an attack against all targets in front of the Burrower within Close range. Targets the Burrower succeeds against take 2d6 physical damage and must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP and you gain a Fear."
      },
      {
        id: "8CHTGS6fSRaQR3eYsN96V",
        name: "Acid Bath - Reaction",
        text: "When the Burrower takes Severe damage, all creatures within Close range are bathed in their acidic blood, taking 1d10 physical damage. This splash covers the ground within Very Close range with blood, and all creatures other than the Burrower who move through it take 1d6 physical damage."
      }
    ]
  },
  {
    name: "Bear",
    id: '4d13c6f8-7393-4aeb-8a4b-850f6b11554f',
    tier: "1",
    type: "Bruiser",
    text: "A large bear with thick fur and powerful claws.",
    motives_and_tactics: "Climb, defend territory, pummel, track",
    difficulty: 14,
    thresholds: "9/17",
    hp: 7,
    stress: 2,
    atk: "+1",
    attack: "Claws",
    range: "Melee",
    damage: "1d8+3 phy",
    experience: "Ambusher +3, Keen Senses +2",
    feats: [
      {
        id: "WRBpQ051pGH8Oabk_yBgU",
        name: "Overwhelming Force - Passive",
        text: "Targets who mark HP from the Bear’s standard attack are knocked back to Very Close range."
      },
      {
        id: "Wv21ztgONGrHxVeP9kT0Q",
        name: "Bite - Action",
        text: "Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 physical damage and the target is Restrained until they break free with a successful Strength Roll."
      },
      {
        id: "tiDQWPj0h0Y4Ug4dxnSbW",
        name: "Momentum - Reaction",
        text: "When the Bear makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Cave Ogre",
    id: '805b1f60-714d-4956-8201-054f5421e53c',
    tier: "1",
    type: "Solo",
    text: "A massive humanoid who sees all sapient life as food.",
    motives_and_tactics: "Bite off heads, feast, rip limbs, stomp, throw enemies",
    difficulty: 13,
    thresholds: "8/15",
    hp: 8,
    stress: 3,
    atk: "+1",
    attack: "Club",
    range: "Very Close",
    damage: "1d10+2 phy",
    experience: "Throw +2",
    feats: [
      {
        id: "odhUJjGDyVXMDENvKBsRh",
        name: "Ramp Up - Passive",
        text: "You must spend a Fear to spotlight the Ogre. While spotlighted, they can make their standard attack against all targets within range."
      },
      {
        id: "sPFqP-w_fy3vJ7UTYksgM",
        name: "Bone Breaker - Passive",
        text: "The Ogre’s attacks deal direct damage."
      },
      {
        id: "FfDKy4L8Jnuc1sW7gXb0b",
        name: "Hail of Boulders - Action",
        text: "Mark a Stress to pick up heavy objects and throw them at all targets in front of the Ogre within Far range. Make an attack against these targets. Targets the Ogre succeeds against take 1d10+2 physical damage. If they succeed against more than one target, you gain a Fear."
      },
      {
        id: "2FqQZtEuQWFFRU5wmtz8H",
        name: "Rampaging Fury - Reaction",
        text: "When the Ogre marks 2 or more HP, they can rampage. Move the Ogre to a point within Close range and deal 2d6+3 direct physical damage to all targets in their path."
      }
    ]
  },
  {
    name: "Construct",
    id: 'bdc694b0-b9c3-439e-8c1a-a2e73a6a929b',
    tier: "1",
    type: "Solo",
    text: "A roughly humanoid being of stone and steel, assembled and animated by magic.",
    motives_and_tactics: "Destroy environment, serve creator, smash target, trample groups",
    difficulty: 13,
    thresholds: "7/15",
    hp: 9,
    stress: 4,
    atk: "+4",
    attack: "Fist Slam",
    range: "Melee",
    damage: "1d20 phy",
    feats: [
      {
        id: "OieV_Y5L-l16ezBZOGw6r",
        name: "Relentless (2) - Passive",
        text: "The Construct can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "af72HzJubkAw24WLxKy_T",
        name: "Weak Structure - Passive",
        text: "When the Construct marks HP from physical damage, they must mark an additional HP."
      },
      {
        id: "1xrELOy8-IqqcUxE_7U5K",
        name: "Trample - Action",
        text: "Mark a Stress to make an attack against all targets in the Construct’s path when they move. Targets the Construct succeeds against take 1d8 physical damage."
      },
      {
        id: "uB5M46V9HRukVicvUGygZ",
        name: "Overload - Reaction",
        text: "Before rolling damage for the Construct’s attack, you can mark a Stress to gain a +10 bonus to the damage roll. The Construct can then take the spotlight again."
      },
      {
        id: "nRQohuligCpib2IzhsKRV",
        name: "Death Quake - Reaction",
        text: "When the Construct marks their last HP, the magic powering them ruptures in an explosion of force. Make an attack with advantage against all targets within Very Close range. Targets the Construct succeeds against take 1d12+2 magic damage."
      }
    ]
  },
  {
    name: "Courtier",
    id: '179fbc82-a8b4-451e-9a23-20a597fb7caa',
    tier: "1",
    type: "Social",
    text: "An ambitious and ostentatiously dressed socialite.",
    motives_and_tactics: "Discreet, gain favor, maneuver, scheme",
    difficulty: 12,
    thresholds: "4/8",
    hp: 3,
    stress: 4,
    atk: "-4",
    attack: "Daggers",
    range: "Melee",
    damage: "1d4+2 phy",
    experience: "Socialize +3",
    feats: [
      {
        id: "ebkzGLpFRjgIL2pRnvuIj",
        name: "Mockery - Action",
        text: "Mark a Stress to say something mocking and force a target within Close range to make a Presence Reaction Roll (14) to see if they can save face. On a failure, the target must mark 2 Stress and is Vulnerable until the scene ends."
      },
      {
        id: "HC3xm_C48rzLsBGovBMM0",
        name: "Scapegoat - Action",
        text: "Spend a Fear and target a PC. The Courtier convinces a crowd or prominent individual that the target is the cause of their current conflict or misfortune."
      }
    ]
  },
  {
    name: "Deeproot Defender",
    id: '5861ed30-04f8-4709-bc0c-b5283cce1210',
    tier: "1",
    type: "Bruiser",
    text: "A burly vegetable-person with grasping vines.",
    motives_and_tactics: "Ambush, grab, protect, pummel",
    difficulty: 10,
    thresholds: "8/14",
    hp: 7,
    stress: 3,
    atk: "+2",
    attack: "Vines",
    range: "Close",
    damage: "1d8+3 phy",
    experience: "Huge +3",
    feats: [
      {
        id: "d9NfEEVhUO0AehKh0Jhsh",
        name: "Ground Slam - Action",
        text: "Slam the ground, knocking all targets within Very Close range back to Far range. Each target knocked back by this must mark a Stress."
      },
      {
        id: "iKgrOM_DqDkpJRkUPbTOH",
        name: "Grab and Drag - Action",
        text: "Make an attack against a target within Close range. On a success, spend a Fear to pull them into Melee range, deal 1d6+2 physical damage, and Restrain them until the Defender takes Severe damage."
      }
    ]
  },
  {
    name: "Dire Wolf",
    id: '8568f441-8506-4273-b535-289651a0e4a1',
    tier: "1",
    type: "Skulk",
    text: "A large wolf with menacing teeth, seldom encountered alone.",
    motives_and_tactics: "Defend territory, harry, protect pack, surround, trail",
    difficulty: 12,
    thresholds: "5/9",
    hp: 4,
    stress: 3,
    atk: "+2",
    attack: "Claws",
    range: "Melee",
    damage: "1d6+2 phy",
    experience: "Keen Senses +3",
    feats: [
      {
        id: "0jEHPFJbUich8q_K7BDRS",
        name: "Pack Tactics - Passive",
        text: "If the Wolf makes a successful standard attack and another Dire Wolf is within Melee range of the target, deal 1d6+5 physical damage instead of their standard damage and you gain a Fear."
      },
      {
        id: "IIsettF3-JwzxS6M9Qggj",
        name: "Hobbling Strike - Action",
        text: "Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 direct physical damage and make them Vulnerable until they clear at least 1 HP."
      }
    ]
  },
  {
    name: "Giant Mosquitoes",
    id: '8d780c51-39b6-4cc1-a92a-0c8c74dc0678',
    tier: "1",
    type: "Horde (5/HP)",
    text: "Dozens of fist-sized mosquitoes, flying together for protection.",
    motives_and_tactics: "Fly away, harass, steal blood",
    difficulty: 10,
    thresholds: "5/9",
    hp: 6,
    stress: 3,
    atk: "-2",
    attack: "Proboscis",
    range: "Melee",
    damage: "1d8+3 phy",
    experience: "Camouflage +2",
    feats: [
      {
        id: "B_dDPATP8yPbwWK5iSGSL",
        name: "Horde (1d4+1) - Passive",
        text: "When the Mosquitoes have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead."
      },
      {
        id: "BLUyNFQBJ2sSxG5tMNg2r",
        name: "Flying - Passive",
        text: "While flying, the Mosquitoes have a +2 bonus to their Difficulty."
      },
      {
        id: "aGsL-liBqfMm6dtV27jRG",
        name: "Bloodseeker - Reaction",
        text: "When the Mosquitoes’ attack causes a target to mark HP, you can mark a Stress to force the target to mark an additional HP."
      }
    ]
  },
  {
    name: "Giant Rat",
    id: 'e8874079-119a-4cbf-a82b-0fa9702b851f',
    tier: "1",
    type: "Minion",
    text: "A cat-sized rodent skilled at scavenging and survival.",
    motives_and_tactics: "Burrow, hunger, scavenge, wear down",
    difficulty: 10,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "-4",
    attack: "Claws",
    range: "Melee",
    damage: "1 phy",
    experience: "Keen Senses +3",
    feats: [
      {
        id: "tEhDwYj83SK2IG8Dtk0zd",
        name: "Minion (3) - Passive",
        text: "The Rat is defeated when they take any damage. For every 3 damage a PC deals to the Rat, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "qLNKBPgmhn3cnkqBLA8MY",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Giant Rats within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Giant Scorpion",
    id: '15420760-97a0-4339-9686-2b1ef9c49997',
    tier: "1",
    type: "Bruiser",
    text: "A human-sized insect with tearing claws and a stinging tail.",
    motives_and_tactics: "Ambush, feed, grapple, poison",
    difficulty: 13,
    thresholds: "7/13",
    hp: 6,
    stress: 3,
    atk: "+1",
    attack: "Pincers",
    range: "Melee",
    damage: "1d12+2 phy",
    experience: "Camouflage +2",
    feats: [
      {
        id: "x2kZCfO4GnhgsJKeB4nR2",
        name: "Double Strike - Action",
        text: "Mark a Stress to make a standard attack against two targets within Melee range."
      },
      {
        id: "PAUEvqexxzV4TZ5KH66ik",
        name: "Venomous Stinger - Action",
        text: "Make an attack against a target within Very Close range. On a success, spend a Fear to deal 1d4+4 physical damage and Poison them until their next rest or they succeed on a Knowledge Roll (16). While Poisoned, the target must roll a d6 before they make an action roll. On a result of 4 or lower, they must mark a Stress."
      },
      {
        id: "FUd1cVcjPPRJtyJ2JWcUT",
        name: "Momentum - Reaction",
        text: "When the Scorpion makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Glass Snake",
    id: 'd092f7e8-ed40-4812-82f4-12d63c5fee42',
    tier: "1",
    type: "Standard",
    text: "A clear serpent with a massive head that leaves behind a glass shard trail wherever they go.",
    motives_and_tactics: "Climb, feed, keep distance, scare",
    difficulty: 14,
    thresholds: "6/10",
    hp: 5,
    stress: 3,
    atk: "+2",
    attack: "Glass Fangs",
    range: "Very Close",
    damage: "1d8+2 phy",
    feats: [
      {
        id: "g9SvUDT2odHbpBEOkHG33",
        name: "Armor-Shredding Shards - Passive",
        text: "On a successful attack within Melee range against the Snake, the attacker must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP."
      },
      {
        id: "90b63S5J0gvbzBp8sQT5E",
        name: "Spinning Serpent - Action",
        text: "Mark a Stress to make an attack against all targets within Very Close range. Targets the Snake succeeds against take 1d6+1 physical damage."
      },
      {
        id: "AL6bzBabno8hqfrQv0ie0",
        name: "Spitter - Action",
        text: "Spend a Fear to introduce a 6 Spitter Die. When the Snake is in the spotlight, roll this die. On a result of 5 or higher, all targets in front of the Snake within Far range must succeed on an Agility Reaction Roll or take 1d4 physical damage. The Snake can take the spotlight a second time this GM turn."
      }
    ]
  },
  {
    name: "Harrier",
    id: 'a7a79bef-a4de-419a-b66c-b2d7ad393694',
    tier: "1",
    type: "Standard",
    text: "A nimble fighter armed with javelins.",
    motives_and_tactics: "Flank, harry, kite, profit",
    difficulty: 12,
    thresholds: "5/9",
    hp: 3,
    stress: 3,
    atk: "+1",
    attack: "Javelin",
    range: "Close",
    damage: "1d6+2 phy",
    experience: "Camouflage +2",
    feats: [
      {
        id: "-LXefrabzj4jzeejd78GL",
        name: "Maintain Distance - Passive",
        text: "After making a standard attack, the Harrier can move anywhere within Far range."
      },
      {
        id: "566SK-VQGrUBCXvo2BPfy",
        name: "Fall Back - Reaction",
        text: "When a creature moves into Melee range to make an attack, you can mark a Stress before the attack roll to move anywhere within Close range and make an attack against that creature. On a success, deal 1d10+2 physical damage."
      }
    ]
  },
  {
    name: "Archer Guard",
    id: 'deeb0761-cff0-4ee1-95b2-8272f9ffa127',
    tier: "1",
    type: "Ranged",
    text: "A tall guard bearing a longbow and quiver with arrows fletched in the settlement’s colors.",
    motives_and_tactics: "Arrest, close gates, make it through the day, pin down",
    difficulty: 10,
    thresholds: "4/8",
    hp: 3,
    stress: 2,
    atk: "+1",
    attack: "Longbow",
    range: "Far",
    damage: "1d8+3 phy",
    experience: "Local Knowledge +3",
    feats: [
      {
        id: "ykXWHT2oECU5_FLblr9bZ",
        name: "Hobbling Shot - Action",
        text: "Make an attack against a target within Far range. On a success, mark a Stress to deal 1d12+3 physical damage. If the target marks HP from this attack, they have disadvantage on Agility Rolls until they clear at least 1 HP."
      }
    ]
  },
  {
    name: "Bladed Guard",
    id: '0b13b559-fae3-4016-9e9d-84a8bd4dcfff',
    tier: "1",
    type: "Standard",
    text: "An armored guard bearing a sword and shield painted in the settlement’s colors.",
    motives_and_tactics: "Arrest, close gates, make it through the day, pin down",
    difficulty: 12,
    thresholds: "5/9",
    hp: 5,
    stress: 2,
    atk: "+1",
    attack: "Longsword",
    range: "Melee",
    damage: "1d6+1 phy",
    experience: "Local Knowledge +3",
    feats: [
      {
        id: "u7EBk9KXeo9ZNl5tGe4og",
        name: "Shield Wall - Passive",
        text: "A creature who tries to move within Very Close range of the Guard must succeed on an Agility Roll. If additional Bladed Guards are standing in a line alongside the first, and each is within Melee range of another guard in the line, the Difficulty increases by the total number of guards in the line."
      },
      {
        id: "-Yt2pAwAOgr48IC3WZOis",
        name: "Detain - Action",
        text: "Make an attack against a target within Very Close range. On a success, mark a Stress to Restrain the target until they break free with a successful attack, Finesse Roll, or Strength Roll."
      }
    ]
  },
  {
    name: "Head Guard",
    id: '6ba66919-342d-4f73-a548-37dbca955e6d',
    tier: "1",
    type: "Leader",
    text: "A seasoned guard with a mace, a whistle, and a bellowing voice.",
    motives_and_tactics: "Arrest, close gates, pin down, seek glory",
    difficulty: 15,
    thresholds: "7/13",
    hp: 7,
    stress: 3,
    atk: "+4",
    attack: "Mace",
    range: "Melee",
    damage: "1d10+4 phy",
    experience: "Commander +2, Local Knowledge +2",
    feats: [
      {
        id: "QFH9Sbr0Piy85DgMJzdUA",
        name: "Rally Guards - Action",
        text: "Spend 2 Fear to spotlight the Head Guard and up to 2d4 allies within Far range."
      },
      {
        id: "sdAuDlA-sVoAYXV4U4OjN",
        name: "On My Signal - Reaction",
        text: "Countdown (5). When the Head Guard is in the spotlight for the first time, activate the countdown. It ticks down when a PC makes an attack roll. When it triggers, all Archer Guards within Far range make a standard attack with advantage against the nearest target within their range. If any attacks succeed on the same target, combine their damage."
      },
      {
        id: "0VZ6HFFrZLB_uFWTTWSU3",
        name: "Momentum - Reaction",
        text: "When the Head Guard makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Jagged Knife Bandit",
    id: 'd6686341-d9b8-4624-b16a-cf391b8c33ec',
    tier: "1",
    type: "Standard",
    text: "A cunning criminal in a cloak bearing one of the gang’s iconic knives.",
    motives_and_tactics: "Escape, profit, steal, throw smoke",
    difficulty: 12,
    thresholds: "8/14",
    hp: 5,
    stress: 3,
    atk: "+1",
    attack: "Daggers",
    range: "Melee",
    damage: "1d8+1 phy",
    experience: "Thief +2",
    feats: [
      {
        id: "0OuzqgOgPpKnxPdwopUTI",
        name: "Climber - Passive",
        text: "The Bandit climbs just as easily as they run."
      },
      {
        id: "E9_iuFeG7otzxM218kEUW",
        name: "From Above - Passive",
        text: "When the Bandit succeeds on a standard attack from above a target, they deal 1d10+1 physical damage instead of their standard damage."
      }
    ]
  },
  {
    name: "Jagged Knife Hexer",
    id: '08377708-88fc-4a96-bc27-c7a45d668deb',
    tier: "1",
    type: "Support",
    text: "A staff-wielding bandit in a cloak adorned with magical paraphernalia, using curses to vex their foes.",
    motives_and_tactics: "Command, hex, profit",
    difficulty: 13,
    thresholds: "5/9",
    hp: 4,
    stress: 4,
    atk: "+2",
    attack: "Staff",
    range: "Far",
    damage: "1d6+2 mag",
    experience: "Magical Knowledge +2",
    feats: [
      {
        id: "9GXjSKAEz348hH0C6C41o",
        name: "Curse - Action",
        text: "Choose a target within Far range and temporarily Curse them. While the target is Cursed, you can mark a Stress so that target rolls with Hope to make the roll be with Fear instead."
      },
      {
        id: "kpnTye8l4bFhLWP1T6Kcy",
        name: "Chaotic Flux - Action",
        text: "Make an attack against up to three targets within Very Close range. Mark a Stress to deal 2d6+3 magic damage to targets the Hexer succeeded against."
      }
    ]
  },
  {
    name: "Jagged Knife Kneebreaker",
    id: '60b3d448-b62e-4103-b70d-c65c48ef5039',
    tier: "1",
    type: "Bruiser",
    text: "An imposing brawler carrying a large club.",
    motives_and_tactics: "Grapple, intimidate, profit, steal",
    difficulty: 12,
    thresholds: "7/14",
    hp: 7,
    stress: 4,
    atk: "-3",
    attack: "Club",
    range: "Melee",
    damage: "1d4+6 phy",
    experience: "Thief +2, Unveiled Threats +3",
    feats: [
      {
        id: "cwktjCfdWvyUO7W5-_AtW",
        name: "I’ve Got ‘Em - Passive",
        text: "Creatures Restrained by the Kneebreaker take double damage from attacks by other adversaries."
      },
      {
        id: "Ti-U7l7YoexaV0TAabQcL",
        name: "Hold Them Down - Action",
        text: "Make an attack against a target within Melee range. On a success, the target takes no damage but is Restrained and Vulnerable. The target can break free, clearing both conditions, with a successful Strength Roll or is freed automatically if the Kneebreaker takes Major or greater damage."
      }
    ]
  },
  {
    name: "Jagged Knife Lackey",
    id: 'b164051d-6797-4168-a9c4-672f2b58d742',
    tier: "1",
    type: "Minion",
    text: "A thief with simple clothes and small daggers, eager to prove themselves.",
    motives_and_tactics: "Escape, profit, throw smoke",
    difficulty: 9,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "-2",
    attack: "Daggers",
    range: "Melee",
    damage: "2 phy",
    experience: "Thief +2",
    feats: [
      {
        id: "JOTZYWGrNCwdlyJW-jmDv",
        name: "Minion (3) - Passive",
        text: "The Lackey is defeated when they take any damage. For every 3 damage a PC deals to the Lackey, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "8GcBOQ_kWz-wWUbPFPJDQ",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Jagged Knife Lackeys within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Jagged Knife Lieutenant",
    id: '99cf361d-4d0b-443a-823e-66a16f4fa81a',
    tier: "1",
    type: "Leader",
    text: "A seasoned bandit in quality leathers with a strong voice and cunning eyes.",
    motives_and_tactics: "Bully, command, profit, reinforce",
    difficulty: 13,
    thresholds: "7/14",
    hp: 6,
    stress: 3,
    atk: "+2",
    attack: "Javelin",
    range: "Close",
    damage: "1d8+3 phy",
    experience: "Local Knowledge +2",
    feats: [
      {
        id: "tOq-6XJ1kUBnv9eFFN2lL",
        name: "Tactician - Action",
        text: "When you spotlight the Lieutenant, mark a Stress to also spotlight two allies within Close range."
      },
      {
        id: "TFDWgrzU8vmUryOM-N9fw",
        name: "More Where That Came From - Action",
        text: "Summon three Jagged Knife Lackeys, who appear at Far range."
      },
      {
        id: "wNKtyn9Pz0DWV5Jb6vSee",
        name: "Coup de Grace - Action",
        text: "Spend a Fear to make an attack against a Vulnerable target within Close range. On a success, deal 2d6+12 physical damage and the target must mark a Stress."
      },
      {
        id: "Bx7us8N4Yi_4Tb6B3uTUd",
        name: "Momentum - Reaction",
        text: "When the Lieutenant makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Jagged Knife Shadow",
    id: '4c158981-9478-4025-96ae-97fa57357ee5',
    tier: "1",
    type: "Skulk",
    text: "A nimble scoundrel bearing a wicked knife and utilizing shadow magic to isolate targets.",
    motives_and_tactics: "Ambush, conceal, divide, profit",
    difficulty: 12,
    thresholds: "4/8",
    hp: 3,
    stress: 3,
    atk: "+1",
    attack: "Daggers",
    range: "Melee",
    damage: "1d4+4 phy",
    experience: "Intrusion +3",
    feats: [
      {
        id: "l4o-CGPyp8MPJmwZY51uf",
        name: "Backstab - Passive",
        text: "When the Shadow succeeds on a standard attack that has advantage, they deal 1d6+6 physical damage instead of their standard damage."
      },
      {
        id: "SFSQRsjwXzA0Okv5jNSzZ",
        name: "Cloaked - Action",
        text: "Become Hidden until after the Shadow’s next attack. Attacks made while Hidden from this feature have advantage."
      }
    ]
  },
  {
    name: "Jagged Knife Sniper",
    id: '26b37196-824f-45d0-956a-7d167b735f22',
    tier: "1",
    type: "Ranged",
    text: "A lanky bandit striking from cover with a shortbow.",
    motives_and_tactics: "Ambush, hide, profit, reposition",
    difficulty: 13,
    thresholds: "4/7",
    hp: 3,
    stress: 2,
    atk: "-1",
    attack: "Shortbow",
    range: "Far",
    damage: "1d10+2 phy",
    experience: "Stealth +2",
    feats: [
      {
        id: "myxkg2CUX9f59Cplb56sx",
        name: "Unseen Strike - Passive",
        text: "If the Sniper is Hidden when they make a successful standard attack against a target, they deal 1d10+4 physical damage instead of their standard damage."
      }
    ]
  },
  {
    name: "Merchant",
    id: '4476d82d-2b6a-4add-a236-def60dd6688f',
    tier: "1",
    type: "Social",
    text: "A finely dressed trader with a keen eye for financial gain.",
    motives_and_tactics: "Buy low and sell high, create demand, inflate prices, seek profit",
    difficulty: 12,
    thresholds: "4/8",
    hp: 3,
    stress: 3,
    atk: "-4",
    attack: "Club",
    range: "Melee",
    damage: "1d4+1 phy",
    experience: "Shrewd Negotiator +3",
    feats: [
      {
        id: "n14Jou1buq7ZvPk0o_CqF",
        name: "Preferential Treatment - Passive",
        text: "A PC who succeeds on a Presence Roll against the Merchant gains a discount on purchases. A PC who fails on a Presence Roll against the Merchant must pay more and has disadvantage on future Presence Rolls against the Merchant."
      },
      {
        id: "-7rBaNbMvjZqELUimrCzd",
        name: "The Runaround - Passive",
        text: "When a PC rolls a 14 or lower on a Presence Roll made against the Merchant, they must mark a Stress."
      }
    ]
  },
  {
    name: "Minor Chaos Elemental",
    id: '1b935a98-cf1e-4ac3-977d-fd4121711494',
    tier: "1",
    type: "Solo",
    text: "A coruscating mass of uncontrollable magic.",
    motives_and_tactics: "Confound, destabilize, transmogrify",
    difficulty: 14,
    thresholds: "7/14",
    hp: 7,
    stress: 3,
    atk: "+3",
    attack: "Warp Blast",
    range: "Close",
    damage: "1d12+6 mag",
    feats: [
      {
        id: "TqW0tL8tgCpLWFXOTvROP",
        name: "Arcane Master - Passive",
        text: "The Elemental is resistant to magic damage."
      },
      {
        id: "Avb_yT0OBiIdRPw_3rThJ",
        name: "Sickening Flux - Action",
        text: "Mark a HP to force all targets within Close range to mark a Stress and become Vulnerable until their next rest or they clear a HP."
      },
      {
        id: "W8rXX9FglZvnaB0kEJjq4",
        name: "Remake Reality - Action",
        text: "Spend a Fear to transform the area within Very Close range into a different biome. All targets within this area take 2d6+3 direct magic damage."
      },
      {
        id: "4tetso9en0SDWDVkK7c3q",
        name: "Magical Reflection - Reaction",
        text: "When the Elemental takes damage from an attack within Close range, deal an amount of damage to the attacker equal to half of the damage they dealt."
      },
      {
        id: "hi8nlYNj4HbqPtrUtJtDD",
        name: "Momentum - Reaction",
        text: "When the Elemental makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Minor Fire Elemental",
    id: '54bca498-7b47-4245-8f5d-1607ba6b0873',
    tier: "1",
    type: "Solo",
    text: "A living flame the size of a large bonfire.",
    motives_and_tactics: "Encircle enemies, grow in size, intimidate, start fires",
    difficulty: 13,
    thresholds: "7/15",
    hp: 9,
    stress: 3,
    atk: "+3",
    attack: "Elemental Blast",
    range: "Far",
    damage: "1d10+4 mag",
    feats: [
      {
        id: "etSQ9aMkvrrJvSS6rRUT0",
        name: "Relentless (2) - Passive",
        text: "The Elemental can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "SIvgAVQtfMRwl6FWU6dVN",
        name: "Scorched Earth - Action",
        text: "Mark a Stress to choose a point within Far range. The ground within Very Close range of that point immediately bursts into flames. All creatures within this area must make an Agility Reaction Roll. Targets who fail take 2d8 magic damage from the flames. Targets who succeed take half damage."
      },
      {
        id: "rpoTy9UoxHq4bd0ruFVI7",
        name: "Explosion - Action",
        text: "Spend a Fear to erupt in a fiery explosion. Make an attack against all targets within Close range. Targets the Elemental succeeds against take 1d8 magic damage and are knocked back to Far range."
      },
      {
        id: "Q_zWHfMyEfmp6AdzvYG1_",
        name: "Consume Kindling - Reaction",
        text: "Three times per scene, when the Elemental moves on objects that are highly flammable, consume them to clear a HP or a Stress."
      },
      {
        id: "PxDlqr1-q4posBfo3yI6D",
        name: "Momentum - Reaction",
        text: "When the Elemental makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Minor Demon",
    id: 'fe12874c-fd34-4fac-8411-965b1ec4ef1a',
    tier: "1",
    type: "Solo",
    text: "A crimson-hued creature from the Circles Below, consumed by rage against all mortals.",
    motives_and_tactics: "Act erratically, corral targets, relish pain, torment",
    difficulty: 14,
    thresholds: "8/15",
    hp: 8,
    stress: 4,
    atk: "+3",
    attack: "Claws",
    range: "Melee",
    damage: "1d8+6 phy",
    feats: [
      {
        id: "nTYpyA0kKt7FMTPc8AhQF",
        name: "Relentless (2) - Passive",
        text: "The Demon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "W-uxeatV_oAmY-2QRVUhh",
        name: "All Must Fall - Passive",
        text: "When a PC rolls a failure with Fear while within Close range of the Demon, they lose a Hope."
      },
      {
        id: "ZMolYa13X67q6FXHfjlkT",
        name: "Hellfire - Action",
        text: "Spend a Fear to rain down hellfire within Far range. All targets within the area must make an Agility Reaction Roll. Targets who fail take 1d20+3 magic damage. Targets who succeed take half damage."
      },
      {
        id: "4Cntn7-IWEXnbzb-HIy0N",
        name: "Reaper - Reaction",
        text: "Before rolling damage for the Demon’s attack, you can mark a Stress to gain a bonus to the damage roll equal to the Demon’s current number of marked HP."
      },
      {
        id: "bnhISRvPqUQNXlKi4cLko",
        name: "Momentum - Reaction",
        text: "When the Demon makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Minor Treant",
    id: '8a0dfc45-2fa7-43dd-aa78-e7338dde2aa6',
    tier: "1",
    type: "Minion",
    text: "An ambulatory sapling rising up to defend their forest.",
    motives_and_tactics: "Crush, overwhelm, protect",
    difficulty: 10,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "-2",
    attack: "Cleaved Branch",
    range: "Melee",
    damage: "4 phy",
    feats: [
      {
        id: "WfyQx7fU9YiI88Mrsc6bE",
        name: "Minion (5) - Passive",
        text: "The Treant is defeated when they take any damage. For every 5 damage a PC deals to the Treant, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "wHGCsFuuA1nMteXL3PQ6c",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Minor Treants within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Green Ooze",
    id: '1657b30e-f602-4f7a-895c-45216a5945c1',
    tier: "1",
    type: "Skulk",
    text: "A moving mound of translucent green slime.",
    motives_and_tactics: "Camouflage, consume and multiply, creep up, envelop",
    difficulty: 8,
    thresholds: "5/10",
    hp: 5,
    stress: 2,
    atk: "+1",
    attack: "Ooze Appendage",
    range: "Melee",
    damage: "1d6+1 mag",
    experience: "Camouflage +3",
    feats: [
      {
        id: "PxNKj73IZbeJth23dtrZX",
        name: "Slow - Passive",
        text: "When you spotlight the Ooze and they don’t have a token on their stat block, they can’t act. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act."
      },
      {
        id: "2TxnQwOOknC7tj7SaglDL",
        name: "Acidic Form - Passive",
        text: "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP."
      },
      {
        id: "e-hjO8vPmgXT4VXPveAdp",
        name: "Envelope - Action",
        text: "Make a standard attack against a target within Melee range. On a success, the Ooze envelops them and the target must mark 2 Stress. The target must mark an additional Stress when they make an action roll. If the Ooze takes Severe damage, the target is freed."
      },
      {
        id: "JkwLGo-62W16PtrIzZv7_",
        name: "Split - Reaction",
        text: "When the Ooze has 3 or more HP marked, you can spend a Fear to split them into two Tiny Green Oozes (with no marked HP or Stress). Immediately spotlight both of them."
      }
    ]
  },
  {
    name: "Tiny Green Ooze",
    id: '1e47c79f-3963-44c6-a0e6-8e288b3b9ea5',
    tier: "1",
    type: "Skulk",
    text: "A small moving mound of translucent green slime.",
    motives_and_tactics: "Camouflage, creep up",
    difficulty: 14,
    thresholds: "4/None",
    hp: 2,
    stress: 1,
    atk: "-1",
    attack: "Ooze Appendage",
    range: "Melee",
    damage: "1d4+1 mag",
    feats: [
      {
        id: "cUU6i3gJxLss8r6rraprX",
        name: "Acidic Form - Passive",
        text: "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP."
      }
    ]
  },
  {
    name: "Red Ooze",
    id: 'd45ef9a6-5fae-4a4e-aad2-81bccdc37f3d',
    tier: "1",
    type: "Skulk",
    text: "A moving mound of translucent flaming red slime.",
    motives_and_tactics: "Camouflage, consume and multiply, ignite, start fires",
    difficulty: 10,
    thresholds: "6/11",
    hp: 5,
    stress: 3,
    atk: "+1",
    attack: "Ooze Appendage",
    range: "Melee",
    damage: "1d8+3 mag",
    experience: "Camouflage +3",
    feats: [
      {
        id: "rapmvMB8XsKYQeRlPQGCg",
        name: "Creeping Fire - Passive",
        text: "The Ooze can only move within Very Close range as their normal movement. They light any flammable object they touch on fire."
      },
      {
        id: "TCAZpYvxyQr-O3_NNrMZB",
        name: "Ignite - Action",
        text: "Make an attack against a target within Very Close range. On a success, the target takes 1d8 magic damage and is ignited until they’re extinguished with a successful Finesse Roll (14). While ignited, the target takes 1d4 magic damage when they make an action roll."
      },
      {
        id: "_jOw46XUeuy8iEMagNMwH",
        name: "Split - Reaction",
        text: "When the Ooze has 3 or more HP marked, you can spend a Fear to split them into two Tiny Red Oozes (with no marked HP or Stress). Immediately spotlight both of them."
      }
    ]
  },
  {
    name: "Tiny Red Ooze",
    id: 'a7fde24c-df73-4da8-a613-caf4ae2971ba',
    tier: "1",
    type: "Skulk",
    text: "A small moving mound of translucent flaming red slime.",
    motives_and_tactics: "Blaze, camouflage",
    difficulty: 11,
    thresholds: "5/None",
    hp: 2,
    stress: 1,
    atk: "-1",
    attack: "Ooze Appendage",
    range: "Melee",
    damage: "1d4+2 mag",
    feats: [
      {
        id: "1hv7HwDv7eKKcRmWyP7NP",
        name: "Burning - Reaction",
        text: "When a creature within Melee range deals damage to the Ooze, they take 1d6 direct magic damage."
      }
    ]
  },
  {
    name: "Petty Noble",
    id: 'f46b1aec-9bf4-48ae-8242-e960ca125238',
    tier: "1",
    type: "Social",
    text: "A richly dressed and adorned aristocrat brimming with hubris.",
    motives_and_tactics: "Abuse power, gather resources, mobilize minions",
    difficulty: 14,
    thresholds: "6/10",
    hp: 3,
    stress: 5,
    atk: "-3",
    attack: "Rapier",
    range: "Melee",
    damage: "1d6+1 phy",
    experience: "Aristocrat +3",
    feats: [
      {
        id: "VPgUxClBASIgMCRfQnp7P",
        name: "My Land, My Rules - Passive",
        text: "All social actions made against the Noble on their land have disadvantage."
      },
      {
        id: "p0PFNs9xDu0fgTGt2x50i",
        name: "Guards, Seize Them! - Action",
        text: "Once per scene, mark a Stress to summon 1d4 Bladed Guards, who appear at Far range to enforce the Noble’s will."
      },
      {
        id: "zIh1TIvdV6FkABshTxbza",
        name: "Exile - Action",
        text: "Spend a Fear and target a PC. The Noble proclaims that the target and their allies are exiled from the noble’s territory. While exiled, the target and their allies have disadvantage during social situations within the Noble’s domain."
      }
    ]
  },
  {
    name: "Pirate Captain",
    id: 'b79bd170-1c94-48dc-8667-27d465c22155',
    tier: "1",
    type: "Leader",
    text: "A charismatic sea dog with an impressive hat, eager to raid and plunder.",
    motives_and_tactics: "Command, make 'em walk the plank, plunder, raid",
    difficulty: 14,
    thresholds: "7/14",
    hp: 7,
    stress: 5,
    atk: "+1",
    attack: "Cutlass",
    range: "Melee",
    damage: "1d12+2 phy",
    experience: "Commander +2, Sailor +3",
    feats: [
      {
        id: "iU0afZ8QGVQDxeqqB_o8E",
        name: "Swashbuckler - Passive",
        text: "When the Captain marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
      },
      {
        id: "wziUm76EeE_HF2nrMA0di",
        name: "Reinforcements - Action",
        text: "Once per scene, mark a Stress to summon a Pirate Raiders Horde, which appears at Far range."
      },
      {
        id: "mTqgbLNxwuLK3nfL4X_GD",
        name: "No Quarter - Action",
        text: "Spend a Fear to choose a target who has three or more Pirates within Melee range of them. The Captain leads the Pirates in hurling threats and promises of a watery grave. The target must make a Presence Reaction Roll. On a failure, the target marks 1d4+1 Stress. On a success, they must mark a Stress."
      },
      {
        id: "vnU1b7ysogmvUs9vlNQ6T",
        name: "Momentum - Reaction",
        text: "When the Captain makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Pirate Raiders",
    id: '55e9ed0d-4418-4a88-9228-88fd71ed2b38',
    tier: "1",
    type: "Horde (3/HP)",
    text: "Seafaring scoundrels moving in a ravaging pack.",
    motives_and_tactics: "Gang up, plunder, overwhelm",
    difficulty: 12,
    thresholds: "5/11",
    hp: 4,
    stress: 3,
    atk: "+1",
    attack: "Cutlass",
    range: "Melee",
    damage: "1d8+2 phy",
    experience: "Sailor +3",
    feats: [
      {
        id: "ny0TPZh6hU1gVU2npr4p1",
        name: "Horde (1d4+1) - Passive",
        text: "When the Raiders have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead."
      },
      {
        id: "DjDDUhNzP7DYhqJ5Q12c2",
        name: "Swashbuckler - Passive",
        text: "When the Raiders mark 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
      }
    ]
  },
  {
    name: "Pirate Tough",
    id: 'b310570c-4051-40d3-9131-09d5df7f64eb',
    tier: "1",
    type: "Bruiser",
    text: "A thickly muscled and tattooed pirate with melon-sized fists.",
    motives_and_tactics: "Plunder, raid, smash, terrorize",
    difficulty: 13,
    thresholds: "8/15",
    hp: 5,
    stress: 3,
    atk: "+1",
    attack: "Massive Fists",
    range: "Melee",
    damage: "2d6 phy",
    experience: "Sailor +2",
    feats: [
      {
        id: "GuW9o-Kyb2MI7FM445Vj2",
        name: "Swashbuckler - Passive",
        text: "When the Tough marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
      },
      {
        id: "ILX3iqRwSVNP5ltiHSGY1",
        name: "Clear the Decks - Action",
        text: "Make an attack against a target within Very Close range. On a success, mark a Stress to move into Melee range of the target, dealing 3d4 physical damage and knocking the target back to Close range."
      }
    ]
  },
  {
    name: "Sellsword",
    id: 'c15e12ab-0b16-4258-9acf-e61292f9e25f',
    tier: "1",
    type: "Minion",
    text: "An armed mercenary testing their luck.",
    motives_and_tactics: "Charge, lacerate, overwhelm, profit",
    difficulty: 10,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "+3",
    attack: "Longsword",
    range: "Melee",
    damage: "3 phy",
    feats: [
      {
        id: "ialovmBftXsAn6v4tblsv",
        name: "Minion (4) - Passive",
        text: "The Sellsword is defeated when they take any damage. For every 4 damage a PC deals to the Sellsword, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "2sOogtz71-zNzTmEH-02k",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Sellswords within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 3 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Skeleton Archer",
    id: 'b7c6a0b2-c2c3-4419-bcf9-1f30139c3be5',
    tier: "1",
    type: "Ranged",
    text: "A fragile skeleton with a shortbow and arrows.",
    motives_and_tactics: "Perforate distracted targets, play dead, steal skin",
    difficulty: 9,
    thresholds: "4/7",
    hp: 3,
    stress: 2,
    atk: "+2",
    attack: "Shortbow",
    range: "Far",
    damage: "1d8+1 phy",
    feats: [
      {
        id: "uv2A7SkLitp2rm7nV4hs_",
        name: "Opportunist - Passive",
        text: "When two or more adversaries are within Very Close range of a creature, all damage they each deal to that creature is doubled."
      },
      {
        id: "lX9pxJC0zW7tns7zu9-8l",
        name: "Deadly Shot - Action",
        text: "Make an attack against a Vulnerable target within Far range. On a success, mark a Stress to deal 3d4+8 physical damage."
      }
    ]
  },
  {
    name: "Skeleton Dredge",
    id: '23f0a1a5-79bf-419a-8a1d-184b2355aed2',
    tier: "1",
    type: "Minion",
    text: "A clattering pile of bones.",
    motives_and_tactics: "Fall apart, overwhelm, play dead, steal skin",
    difficulty: 8,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "-1",
    attack: "Bone Claws",
    range: "Melee",
    damage: "1 phy",
    feats: [
      {
        id: "LVsZHlJpAzQOkm6cQl5ow",
        name: "Minion (4) - Passive",
        text: "The Dredge is defeated when they take any damage. For every 4 damage a PC deals to the Dredge, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "QIl-X_Oa-fSETZ99-D5NB",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Dredges within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Skeleton Knight",
    id: 'aef44e13-4c9f-475a-b03e-32c6af53d97c',
    tier: "1",
    type: "Bruiser",
    text: "A large armored skeleton with a huge blade.",
    motives_and_tactics: "Cut down the living, steal skin, wreak havoc",
    difficulty: 13,
    thresholds: "7/13",
    hp: 5,
    stress: 2,
    atk: "+2",
    attack: "Rusty Greatsword",
    range: "Melee",
    damage: "1d10+2 phy",
    feats: [
      {
        id: "T7iIw6Df18eFgPUaos3bT",
        name: "Terrifying - Passive",
        text: "When the Knight makes a successful attack, all PCs within Close range lose a Hope and you gain a Fear."
      },
      {
        id: "fD8LKaWfY6oIjNri2TmW2",
        name: "Cut to the Bone - Action",
        text: "Mark a Stress to make an attack against all targets within Very Close range. Targets the Knight succeeds against take 1d8+2 physical damage and must mark a Stress."
      },
      {
        id: "1NNejCENfjHdGYbLOsBHD",
        name: "Dig Two Graves - Reaction",
        text: "When the Knight is defeated, they make an attack against a target within Very Close range (prioritizing the creature who killed them). On a success, the target takes 1d8+4 physical damage and loses 1d4 Hope."
      }
    ]
  },
  {
    name: "Skeleton Warrior",
    id: '1c3d378d-1ed9-429f-b87d-3a555e27fb1b',
    tier: "1",
    type: "Standard",
    text: "A dirt-covered skeleton armed with a rusted blade.",
    motives_and_tactics: "Feign death, gang up, steal skin",
    difficulty: 10,
    thresholds: "4/8",
    hp: 3,
    stress: 2,
    atk: "0",
    attack: "Sword",
    range: "Melee",
    damage: "1d6+2 phy",
    feats: [
      {
        id: "eH7Uyn0HSTS3Q7rqKjjlL",
        name: "Only Bones - Passive",
        text: "The Warrior is resistant to physical damage."
      },
      {
        id: "HkqX7ZppqfknU6LoofomQ",
        name: "Reform - Reaction",
        text: "When the Warrior is defeated, roll a d6. On a result of 6, if there are other adversaries on the battlefield, the Warrior re-forms with no marked HP."
      }
    ]
  },
  {
    name: "Spellblade",
    id: '7f83a8ab-5487-4cff-a320-4b13041bcdc7',
    tier: "1",
    type: "Leader",
    text: "A mercenary combining swordplay and magic to deadly effect.",
    motives_and_tactics: "Blast, command, endure",
    difficulty: 14,
    thresholds: "8/14",
    hp: 6,
    stress: 3,
    atk: "+3",
    attack: "Empowered Longsword",
    range: "Melee",
    damage: "1d8+4 phy/mag",
    experience: "Magical Knowledge +2",
    feats: [
      {
        id: "i2rf3Yvb3zaJQml7mG5Rl",
        name: "Arcane Steel - Passive",
        text: "Damage dealt by the Spellblade’s standard attack is considered both physical and magic."
      },
      {
        id: "8uymhCmk2WIOsRXQx68CX",
        name: "Suppressing Blast - Action",
        text: "Mark a Stress and target a group within Far range. All targets must succeed on an Agility Reaction Roll or take 1d8+2 magic damage. You gain a Fear for each target who marked HP from this attack."
      },
      {
        id: "tx0EISUaLgdanzIPHnyg0",
        name: "Move as Unit - Action",
        text: "Spend 2 Fear to spotlight up to five allies within Far range."
      },
      {
        id: "_M_IXGpuTAhx2IX_Xd31L",
        name: "Momentum - Reaction",
        text: "When the Spellblade makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Swarm of Rats",
    id: 'a81c2fae-0509-4632-a7e2-38d128581864',
    tier: "1",
    type: "Horde (10/HP)",
    text: "A skittering mass of ordinary rodents moving as one like a ravenous wave.",
    motives_and_tactics: "Consume, obscure, swarm",
    difficulty: 10,
    thresholds: "6/10",
    hp: 6,
    stress: 2,
    atk: "-3",
    attack: "Claws",
    range: "Melee",
    damage: "1d8+2 phy",
    feats: [
      {
        id: "CBaq0rIBtcnyHh6lejeaY",
        name: "Horde (1d4+1) - Passive",
        text: "When the Swarm has marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead."
      },
      {
        id: "Cq55wzGr0fcObGqyXUjcI",
        name: "In Your Face - Passive",
        text: "All targets within Melee range have disadvantage on attacks against targets other than the Swarm."
      }
    ]
  },
  {
    name: "Sylvan Soldier",
    id: '8e3b2127-7e45-4292-9d81-0ed688f31dc1',
    tier: "1",
    type: "Standard",
    text: "A faerie warrior adorned in armor made of leaves and bark.",
    motives_and_tactics: "Ambush, hide, overwhelm, protect, trail",
    difficulty: 11,
    thresholds: "6/11",
    hp: 4,
    stress: 2,
    atk: "0",
    attack: "Scythe",
    range: "Melee",
    damage: "1d8+1 phy",
    experience: "Tracker +2",
    feats: [
      {
        id: "VDCzhqW4tw9Rz9eOXfVHB",
        name: "Pack Tactics - Passive",
        text: "If the Soldier makes a standard attack and another Sylvan Soldier is within Melee range of the target, deal 1d8+5 physical damage instead of their standard damage."
      },
      {
        id: "heLF3rXmbf4xF9JYRAhKr",
        name: "Forest Control - Action",
        text: "Spend a Fear to pull down a tree within Close range. A creature hit by the tree must succeed on an Agility Reaction Roll (15) or take 1d10 physical damage."
      },
      {
        id: "ZCMz5tLpMIE3xYLQC3erj",
        name: "Blend In - Reaction",
        text: "When the Soldier makes a successful attack, you can mark a Stress to become Hidden until the Soldier’s next attack or a PC succeeds on an Instinct Roll (14) to find them."
      }
    ]
  },
  {
    name: "Tangle Bramble Swarm",
    id: '9447f721-ad63-4fd5-bd4e-19cf450d7add',
    tier: "1",
    type: "Horde (3/HP)",
    text: "A cluster of animated, blood-drinking tumbleweeds, each the size of a large gourd.",
    motives_and_tactics: "Digest, entangle, immobilize",
    difficulty: 12,
    thresholds: "6/11",
    hp: 6,
    stress: 3,
    atk: "0",
    attack: "Thorns",
    range: "Melee",
    damage: "1d6+3 phy",
    experience: "Camouflage +2",
    feats: [
      {
        id: "zy03z8KzznsUf1TQVLeWK",
        name: "Horde (1d4+2) - Passive",
        text: "When the Swarm has marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead."
      },
      {
        id: "w63C3oGy_68c7_OvzHXLP",
        name: "Crush - Action",
        text: "Mark a Stress to deal 2d6+8 direct physical damage to a target with 3 or more bramble tokens."
      },
      {
        id: "88nGpAjtEnM0zLMu7B7N-",
        name: "Encumber - Reaction",
        text: "When the Swarm succeeds on an attack, give the target a bramble token. If a target has any bramble tokens, they are Restrained. If a target has 3 or more bramble tokens, they are also Vulnerable. All bramble tokens can be removed by succeeding on a Finesse Roll (12 + the number of bramble tokens) or dealing Major or greater damage to the Swarm. If bramble tokens are removed from a target using a Finesse Roll, a number of Tangle Bramble Minions spawn within Melee range equal to the number of tokens removed."
      }
    ]
  },
  {
    name: "Tangle Bramble",
    id: '6c524f14-6660-4db0-b4c3-00842339801c',
    tier: "1",
    type: "Minion",
    text: "An animate, blood-drinking tumbleweed.",
    motives_and_tactics: "Consume, drain, entangle",
    difficulty: 11,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "-1",
    attack: "Thorns",
    range: "Melee",
    damage: "2 phy",
    feats: [
      {
        id: "Hw6zkxm-YgCce5YGcJ97V",
        name: "Minion (4) - Passive",
        text: "The Bramble is defeated when they take any damage. For every 4 damage a PC deals to the Tangle Bramble, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "5wgdwRYFVAJ08yY5lVjhg",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Tangle Brambles within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
      },
      {
        id: "FDDArRp8T-02KmPK7KdUW",
        name: "Drain and Multiply - Reaction",
        text: "When an attack from the Bramble causes a target to mark HP and there are three or more Tangle Bramble Minions within Close range, you can combine the Minions into a Tangle Bramble Swarm Horde. The Horde’s HP is equal to the number of Minions combined."
      }
    ]
  },
  {
    name: "Brawny Zombie",
    id: '3bb973b0-7af5-4cb7-8dc6-13725b253a19',
    tier: "1",
    type: "Bruiser",
    text: "A large corpse, decay-bloated and angry.",
    motives_and_tactics: "Crush, destroy, hurl debris, slam",
    difficulty: 10,
    thresholds: "8/15",
    hp: 7,
    stress: 4,
    atk: "+2",
    attack: "Slam",
    range: "Very Close",
    damage: "1d12+3 phy",
    experience: "Collateral Damage +2, Throw +4",
    feats: [
      {
        id: "pLVhd1dU8NMJ6wpn-M6vA",
        name: "Slow - Passive",
        text: "When you spotlight the Zombie and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Zombie and they have a token on their stat block, clear the token and they can act."
      },
      {
        id: "5t3Sf7pLwyDGlFuvWADzo",
        name: "Rend Asunder - Action",
        text: "Make a standard attack with advantage against a target the Zombie has Restrained. On a success, the attack deals direct damage."
      },
      {
        id: "2bfPhxLYn2cISMPuV1qTa",
        name: "Rip and Tear - Reaction",
        text: "When the Zombies makes a successful standard attack, you can mark a Stress to temporarily Restrain the target and force them to mark 2 Stress."
      }
    ]
  },
  {
    name: "Young Dryad",
    id: '9ec76b5f-0325-40f1-9b46-0b0447e84f69',
    tier: "1",
    type: "Leader",
    text: "An imperious tree-person leading their forest’s defenses.",
    motives_and_tactics: "Command, nurture, prune the unwelcome",
    difficulty: 11,
    thresholds: "6/11",
    hp: 6,
    stress: 2,
    atk: "0",
    attack: "Scythe",
    range: "Melee",
    damage: "1d8+5 phy",
    experience: "Leadership +3",
    feats: [
      {
        id: "UItWpM0oVLZfDtOzMdLMV",
        name: "Voice of the Forest - Action",
        text: "Mark a Stress to spotlight 1d4 allies within range of a target they can attack without moving. On a success, their attacks deal half damage."
      },
      {
        id: "nhm8FbuehygnM0XOw6Ear",
        name: "Thorny Cage - Action",
        text: "Spend a Fear to form a cage around a target within Very Close range and Restrain them until they’re freed with a successful Strength Roll. When a creature makes an action roll against the cage, they must mark a Stress."
      },
      {
        id: "yLKhZGbMncm9lNJvbMKxL",
        name: "Momentum - Reaction",
        text: "When the Dryad makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Patchwork Zombie Hulk",
    id: '1dbe7c82-aa40-4815-af07-0f07c2f222b8',
    tier: "1",
    type: "Solo",
    text: "A towering gestalt of corpses moving as one, with torso-sized limbs and fists as large as a grown halfling.",
    motives_and_tactics: "Absorb corpses, flail, hunger, terrify",
    difficulty: 13,
    thresholds: "8/15",
    hp: 10,
    stress: 3,
    atk: "+4",
    attack: "Too Many Arms",
    range: "Very Close",
    damage: "1d20 phy",
    experience: "Intimidation +2, Tear Things Apart +2",
    feats: [
      {
        id: "M7unmUGBT23OFbTzYSwII",
        name: "Destructive - Passive",
        text: "When the Zombie takes Major or greater damage, they mark an additional HP."
      },
      {
        id: "Y7Z4s-TC5kZdXueRYKVr_",
        name: "Flailing Limbs - Passive",
        text: "When the Zombie makes a standard attack, they can attack all targets within Very Close range."
      },
      {
        id: "67rOEZz0CYk4v69wEofXG",
        name: "Another for the Pile - Action",
        text: "When the Zombie is within Very Close range of a corpse, they can incorporate it into themselves, clearing a HP and a Stress."
      },
      {
        id: "LQLst_PFus1zJUojPDgsc",
        name: "Tormented Screams - Action",
        text: "Mark a Stress to cause all PCs within Far range to make a Presence Reaction Roll (13). Targets who fail lose a Hope and you gain a Fear for each. Targets who succeed must mark a Stress."
      }
    ]
  },
  {
    name: "Rotted Zombie",
    id: '941230f5-8453-41aa-b8f5-302cf92cb664',
    tier: "1",
    type: "Minion",
    text: "A decaying corpse ambling toward their prey.",
    motives_and_tactics: "Eat flesh, hunger, maul, surround",
    difficulty: 8,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "-3",
    attack: "Bite",
    range: "Melee",
    damage: "2 phy",
    feats: [
      {
        id: "Hs0V0mzDQ4VYre6gtJklZ",
        name: "Minion (3) - Passive",
        text: "The Zombie is defeated when they take any damage. For every 3 damage a PC deals to the Zombie, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "TGWYsndRezj7hQqFC0YjU",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Rotted Zombies within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Shambling Zombie",
    id: '1de0a59c-f46d-4bbb-a1f8-429323f42c6a',
    tier: "1",
    type: "Standard",
    text: "An animated corpse that moves shakily, driven only by hunger.",
    motives_and_tactics: "Devour, hungry, mob enemy, shred flesh",
    difficulty: 10,
    thresholds: "4/6",
    hp: 4,
    stress: 1,
    atk: "0",
    attack: "Bite",
    range: "Melee",
    damage: "1d6+1 phy",
    feats: [
      {
        id: "ijUlBzd5REFhseb_gSZeW",
        name: "Too Many to Handle - Passive",
        text: "When the Zombie is within Melee range of a creature and at least one other Zombie is within Close range, all attacks against that creature have advantage."
      },
      {
        id: "oEzssrkaBsUqNkZFKo-Ze",
        name: "Horrifying - Passive",
        text: "Targets who mark HP from the Zombie’s attacks must also mark a Stress."
      }
    ]
  },
  {
    name: "Zombie Pack",
    id: '0bf4e6fe-8c09-4e9d-a6a8-e443ff14cab9',
    tier: "1",
    type: "Horde (2/HP)",
    text: "A group of shambling corpses instinctively moving together.",
    motives_and_tactics: "Consume flesh, hunger, maul",
    difficulty: 8,
    thresholds: "6/12",
    hp: 6,
    stress: 3,
    atk: "-1",
    attack: "Bite",
    range: "Melee",
    damage: "1d10+2 phy",
    feats: [
      {
        id: "EPwxwwDmeUNwajH1jMfjF",
        name: "Horde (1d4+2) - Passive",
        text: "When the Zombies have marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead."
      },
      {
        id: "pYjPrUzHKGIIDEQIGsl7G",
        name: "Overwhelm - Reaction",
        text: "When the Zombies mark HP from an attack within Melee range, you can mark a Stress to make a standard attack against the attacker."
      }
    ]
  },
  {
    name: "Archer Squadron",
    id: 'bc332560-5787-41aa-849b-27c8e0151d53',
    tier: "2",
    type: "Horde (2/HP)",
    text: "A group of trained archers bearing massive bows.",
    motives_and_tactics: "Stick together, survive, volley fire",
    difficulty: 13,
    thresholds: "8/16",
    hp: 4,
    stress: 3,
    atk: "0",
    attack: "Longbow",
    range: "Far",
    damage: "2d6+3 phy",
    feats: [
      {
        id: "x-7HK82DtECqSTrfg03zC",
        name: "Horde (1d6+3) - Passive",
        text: "When the Squadron has marked half or more of their HP, their standard attack deals 1d6+3 physical damage instead."
      },
      {
        id: "qgbx8Snsug6Hk2rfu4rhy",
        name: "Focused Volley - Action",
        text: "Spend a Fear to target a point within Far range. Make an attack with advantage against all targets within Close range of that point. Targets the Squadron succeeds against take 1d10+4 physical damage."
      },
      {
        id: "EDribYWkeNL9R-Z0N_pgB",
        name: "Suppressing Fire - Action",
        text: "Mark a Stress to target a point within Far range. Until the next roll with Fear, a creature who moves within Close range of that point must make an Agility Reaction Roll. On a failure, they take 2d6+3 physical damage. On a success, they take half damage."
      }
    ]
  },
  {
    name: "Assassin Poisoner",
    id: '39482a72-c7a8-4d15-89ab-58f65a93febc',
    tier: "2",
    type: "Skulk",
    text: "A cunning scoundrel skilled in both poisons and ambushing.",
    motives_and_tactics: "Anticipate, get paid, kill, taint food and water",
    difficulty: 14,
    thresholds: "8/16",
    hp: 4,
    stress: 4,
    atk: "+3",
    attack: "Poisoned Throwing Dagger",
    range: "Close",
    damage: "2d8+1 phy",
    experience: "Intrusion +2",
    feats: [
      {
        id: "u08IUtDBftquU4zi0BKBa",
        name: "Grindeloth Venom - Passive",
        text: "Targets who mark HP from the Assassin’s attacks are Vulnerable until they clear a HP."
      },
      {
        id: "sv1G9bPfoenxq7ogKnc1m",
        name: "Out of Nowhere - Passive",
        text: "The Assassin has advantage on attacks if they are Hidden."
      },
      {
        id: "wJ9l0tk85FUtusTVdtKkE",
        name: "Fumigation - Action",
        text: "Drop a smoke bomb that fills the air within Close range with smoke, Dizzilying all targets in this area. Dizzied targets have disadvantage on their next action roll, then clear the condition."
      }
    ]
  },
  {
    name: "Apprentice Assassin",
    id: 'd12de86e-15d6-4fc6-8117-5a58dfcfeb65',
    tier: "2",
    type: "Minion",
    text: "A young trainee eager to prove themselves.",
    motives_and_tactics: "Act reckless, kill, prove their worth, show off",
    difficulty: 13,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "-1",
    attack: "Thrown Dagger",
    range: "Very Close",
    damage: "4 phy",
    experience: "Intrusion +2",
    feats: [
      {
        id: "75WJcblf6bkwst6Bq3cxr",
        name: "Minion (6) - Passive",
        text: "The Assassin is defeated when they take any damage. For every 6 damage a PC deals to the Assassin, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "Z9bPr2l_Xso1n1csWYm1n",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Apprentice Assassins within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Master Assassin",
    id: 'd67a2125-f903-4138-b215-5eb46fd8147f',
    tier: "2",
    type: "Leader",
    text: "A seasoned killer with a threatening voice and a deadly blade.",
    motives_and_tactics: "Ambush, get out alive, kill, prepare for all scenarios",
    difficulty: 15,
    thresholds: "12/25",
    hp: 7,
    stress: 5,
    atk: "+5",
    attack: "Serrated Dagger",
    range: "Close",
    damage: "2d10+2 phy",
    experience: "Command +3, Intrusion +3",
    feats: [
      {
        id: "R3eiyrLR-NGcBMCdOLtA7",
        name: "Won’t See It Coming - Passive",
        text: "The Assassin deals direct damage while they’re Hidden."
      },
      {
        id: "ke6PnGma7Y_dLtoshhCh3",
        name: "Strike as One - Action",
        text: "Mark a Stress to spotlight a number of other Assassins equal to the Assassin’s unmarked Stress."
      },
      {
        id: "9DxgiEN8CFdGDIlVy67LM",
        name: "The Subtle Blade - Reaction",
        text: "When the Assassin successfully makes a standard attack against a Vulnerable target, you can spend a Fear to deal Severe damage instead of their standard damage."
      },
      {
        id: "qqScqUNZDIV4MI-tWesRN",
        name: "Momentum - Reaction",
        text: "When the Assassin makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Battle Box",
    id: '6eb8b16f-4adb-47c4-9153-cec489c572e2',
    tier: "2",
    type: "Solo",
    text: "A cube-shaped construct with a different rune on each of their six sides.",
    motives_and_tactics: "Change tactics, trample foes, wait in disguise",
    difficulty: 15,
    thresholds: "10/20",
    hp: 8,
    stress: 6,
    atk: "+2",
    attack: "Slam",
    range: "Melee",
    damage: "2d6+3 phy",
    experience: "Camouflage +2",
    feats: [
      {
        id: "dDHjMAdqxmn3X1B5Z3WAS",
        name: "Relentless (2) - Passive",
        text: "The Box can be spotlighted up to two times per turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "idK4SHf87eH2xDde5x3HZ",
        name: "Randomized Tactics - Action",
        text: "Mark a Stress and roll a d6. The Box uses the corresponding move: 1. Mana Beam: The Box fires a searing beam. Make an attack against a target within Far range. On a success, deal 2d10+2 magic damage. 2. Fire Jets: The Box shoots into the air, spinning and releasing jets of flame. Make an attack against all targets within Close range. Targets the Box succeeds against take 2d8 physical damage. 3. Trample: The Box rockets around erratically. Make an attack against all PCs within Close range. Targets the Box succeeds against take 1d6+5 physical damage and are Vulnerable until their next roll with Hope. 4. Shocking Gas: The Box sprays out a silver gas sparking with lightning. All targets within Close range must succeed on a Finesse Reaction Roll or mark 3 Stress. 5. Stunning Clap: The Box leaps and their sides clap, creating a concussive boom. All targets within Very Close range must succeed on a Strength Reaction Roll or become Vulnerable until the cube is defeated. 6. Psonic Whine: The Box releases a cluster of mechanical bees whose buzz rattles mortal minds. All targets within Close range must succeed on a Presence Reaction Roll or take 2d4+9 direct magic damage."
      },
      {
        id: "BMoo28yHJ5RgsocTUqXPo",
        name: "Overcharge - Reaction",
        text: "Before rolling damage for the Box’s attack, you can mark a Stress to add a d6 to the damage roll. Additionally, you gain a Fear."
      },
      {
        id: "zHM3nhfmINIY3zbyjg-Xr",
        name: "Death Quake - Reaction",
        text: "When the Box marks their last HP, the magic powering them ruptures in an explosion of force. All targets within Close range must succeed on an Instinct Reaction Roll or take 2d8+1 magic damage."
      }
    ]
  },
  {
    name: "Chaos Skull",
    id: '02a80374-05c5-4765-909b-62a921df1c64',
    tier: "2",
    type: "Ranged",
    text: "A floating humanoid skull animated by scintillating magic.",
    motives_and_tactics: "Cackle, consume magic, serve creator",
    difficulty: 15,
    thresholds: "8/16",
    hp: 5,
    stress: 4,
    atk: "+2",
    attack: "Energy Blast",
    range: "Close",
    damage: "2d8+3 mag",
    feats: [
      {
        id: "6nrZYwza2tV_O96w23hjl",
        name: "Levitation - Passive",
        text: "The Skull levitates several feet off the ground and can’t be Restrained."
      },
      {
        id: "z5l7HjNLCIdp_BPi8wha-",
        name: "Wards - Passive",
        text: "The Skull is resistant to magic damage."
      },
      {
        id: "pMSDsXkT0Y-Kg3pyrQBIW",
        name: "Magic Burst - Action",
        text: "Mark a Stress to make an attack against all targets within Close range. Targets the Skull succeeds against take 2d6+4 magic damage."
      },
      {
        id: "wiHcEVNU1d6uNOu92F8Tx",
        name: "Siphon Magic - Action",
        text: "Spend a Fear to make an attack against a PC with a Spellcast trait within Very Close range. On a success, the target marks 1d4 Stress and the Skull clears that many Stress. Additionally, on a success, the Skull can immediately be spotlighted again."
      }
    ]
  },
  {
    name: "Conscript",
    id: 'c7ec041b-c836-4890-9b67-f4e7df23c8b4',
    tier: "2",
    type: "Minion",
    text: "A poorly trained civilian pressed into war.",
    motives_and_tactics: "Follow orders, gang up, survive",
    difficulty: 12,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "0",
    attack: "Spears",
    range: "Very Close",
    damage: "6 phy",
    feats: [
      {
        id: "pCFdK2boNSD48ZN2b9B2H",
        name: "Minion (6) - Passive",
        text: "The Conscript is defeated when they take any damage. For every 6 damage a PC deals to the Conscript, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "j1ND-5GRm8tEBJR2hUpdH",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Conscripts within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 6 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Courtesan",
    id: '09a546a0-3861-4a70-a056-e41ff274ae91',
    tier: "2",
    type: "Social",
    text: "An accomplished manipulator and master of the social arts.",
    motives_and_tactics: "Entice, maneuver, secure patrons",
    difficulty: 13,
    thresholds: "7/13",
    hp: 3,
    stress: 4,
    atk: "-3",
    attack: "Dagger",
    range: "Melee",
    damage: "1d4+3 phy",
    experience: "Manipulation +3, Socialite +3",
    feats: [
      {
        id: "fjc79MjUZwtpUFBPV6Zbe",
        name: "Searing Glance - Reaction",
        text: "When a PC within Close range makes a Presence Roll, you can mark a Stress to cast a gaze toward the aftermath. On the target’s failure, they must mark 2 Stress and are Vulnerable until the scene ends or they succeed on a social action against the Courtesan. On the target’s success, they must mark a Stress."
      }
    ]
  },
  {
    name: "Cult Adept",
    id: 'ecdb7d9f-5c14-45b7-86cc-314dd9926634',
    tier: "2",
    type: "Support",
    text: "An experienced mage wielding shadow and fear.",
    motives_and_tactics: "Curry favor, hinder foes, uncover knowledge",
    difficulty: 14,
    thresholds: "9/18",
    hp: 4,
    stress: 6,
    atk: "+2",
    attack: "Rune-Covered Rod",
    range: "Far",
    damage: "2d4+3 mag",
    experience: "Fallen Lore +2, Rituals +2",
    feats: [
      {
        id: "zK4iIZcYCHPWZopDXxZj0",
        name: "Enervating Blast - Action",
        text: "Spend a Fear to make a standard attack against a target within range. On a success, the target must mark a Stress."
      },
      {
        id: "5XrseAHXRbI3jBmAcK0fq",
        name: "Shroud of the Fallen - Action",
        text: "Mark a Stress to wrap an ally within Close range in a shroud of Protection until the Adept marks their last HP. While Protected, the target has resistance to all damage."
      },
      {
        id: "H0EkVf6jjIXsEnEFLDTY6",
        name: "Shadow Shackles - Action",
        text: "Spend a Fear and choose a point within Far range. All targets within Close range of that point are Restrained in smoky chains until they break free with a successful Strength or Instinct Roll. A target Restrained by this feature must spend a Hope to make an action roll."
      },
      {
        id: "zsbWzSQ2l5sPs0A4RttO4",
        name: "Fear Is Fuel - Reaction",
        text: "Twice per scene, when a PC rolls a failure with Fear, clear a Stress."
      }
    ]
  },
  {
    name: "Cult Fang",
    id: '04a136aa-d083-4f99-91f0-fcd0d01ef2b4',
    tier: "2",
    type: "Skulk",
    text: "A professional killer-turned-cultist.",
    motives_and_tactics: "Capture sacrifices, isolate prey, rise in the ranks",
    difficulty: 15,
    thresholds: "9/17",
    hp: 4,
    stress: 4,
    atk: "+2",
    attack: "Long Knife",
    range: "Melee",
    damage: "2d8+4 phy",
    feats: [
      {
        id: "T_wwaWXbyD0WkW_aetMVB",
        name: "Shadow’s Embrace - Passive",
        text: "The Fang can climb and walk on vertical surfaces. Mark a Stress to move from one shadow to another within Far range."
      },
      {
        id: "Ac8znUouLRJMulGFf6INl",
        name: "Pick Off the Straggler - Action",
        text: "Mark a Stress to cause a target within Melee range to make an Instinct Reaction Roll. On a failure, the target must mark 2 Stress and is teleported with the Fang to a shadow within Far range, making them temporarily Vulnerable. On a success, the target must mark a Stress."
      }
    ]
  },
  {
    name: "Cult Initiate",
    id: 'db39edc2-2e98-45bf-8725-95e50f3dfe48',
    tier: "2",
    type: "Minion",
    text: "A low-ranking cultist in simple robes, eager to gain power.",
    motives_and_tactics: "Follow orders, gain power, seek forbidden knowledge",
    difficulty: 13,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "0",
    attack: "Ritual Dagger",
    range: "Melee",
    damage: "5 phy",
    feats: [
      {
        id: "W2jvHeC9PdrAp1f74ro8E",
        name: "Minion (6) - Passive",
        text: "The Initiate is defeated when they take any damage. For every 6 damage a PC deals to the Initiate, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "X2KpYzcbGsK-rAJp87KZR",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Cult Initiates within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Demonic Hound Pack",
    id: '6c194e4a-5b61-452c-800f-428aa091b9e4',
    tier: "2",
    type: "Horde (1/HP)",
    text: "Unnatural hounds lit from within by hellfire.",
    motives_and_tactics: "Cause fear, consume flesh, please masters",
    difficulty: 15,
    thresholds: "11/23",
    hp: 6,
    stress: 3,
    atk: "0",
    attack: "Claws and Fangs",
    range: "Melee",
    damage: "2d8+2 phy",
    experience: "Scent Tracking +3",
    feats: [
      {
        id: "LWhc7BHF0OEnZjdgpNGLP",
        name: "Horde (2d4+1) - Passive",
        text: "When the Pack has marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead."
      },
      {
        id: "xVbyBUsI79ZjPZDiWTmWE",
        name: "Dreadhowl - Action",
        text: "Mark a Stress to make all targets within Very Close range lose a Hope. If a target is not able to lose a Hope, they must instead mark 2 Stress."
      },
      {
        id: "vAtDyNdeiPB4LX35JBwEX",
        name: "Momentum - Reaction",
        text: "When the Pack makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Electric Eels",
    id: 'e5aaa33e-c9f4-472b-9537-7fdf4ff1d839',
    tier: "2",
    type: "Horde (2/HP)",
    text: "A swarm of eels that encircle and electrocute.",
    motives_and_tactics: "Avoid larger predators, shock prey, tear apart",
    difficulty: 14,
    thresholds: "10/20",
    hp: 5,
    stress: 3,
    atk: "0",
    attack: "Shocking Bite",
    range: "Melee",
    damage: "2d6+4 phy",
    feats: [
      {
        id: "Wl39vlbflcS_Ag0VZ0IZn",
        name: "Horde (2d4+1) - Passive",
        text: "When the Eels have marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead."
      },
      {
        id: "kSX1EuXzagARfZ4tmMV5W",
        name: "Paralyzing Shock - Action",
        text: "Mark a Stress to make a standard attack against all targets within Very Close range. You gain a Fear for each target that marks HP."
      }
    ]
  },
  {
    name: "Elite Soldier",
    id: '0d7b03ed-ae94-4155-bc32-83b572d19a4f',
    tier: "2",
    type: "Standard",
    text: "An armored squire or experienced commoner looking to advance.",
    motives_and_tactics: "Gain glory, keep order, make alliances",
    difficulty: 15,
    thresholds: "9/18",
    hp: 4,
    stress: 3,
    atk: "+1",
    attack: "Spear",
    range: "Very Close",
    damage: "2d8+4 phy",
    feats: [
      {
        id: "jOKWZlo5VK7xkZ5d7Yt4I",
        name: "Reinforce - Action",
        text: "Mark a Stress to move into Melee range of an ally and make a standard attack against a target within Very Close range. On a success, deal 2d10+2 physical damage and the ally can clear a Stress."
      },
      {
        id: "BFeYL4bxf3haci3bgNrqB",
        name: "Vassal’s Loyalty - Reaction",
        text: "When the Soldier is within Very Close range of a knight or other noble who would take damage, you can mark a Stress to move into Melee range of them and take the damage instead."
      }
    ]
  },
  {
    name: "Failed Experiment",
    id: '4a81c814-ced3-4064-8890-fc5f63c6fe5f',
    tier: "2",
    type: "Standard",
    text: "A magical necromantic experiment gone wrong, leaving them warped and ungainly.",
    motives_and_tactics: "Devour, hunt, track",
    difficulty: 13,
    thresholds: "12/23",
    hp: 3,
    stress: 3,
    atk: "+1",
    attack: "Bite and Claw",
    range: "Melee",
    damage: "2d6+5 phy",
    experience: "Copycat +3",
    feats: [
      {
        id: "tzrTa_1mSBlqnq-T3A3ZZ",
        name: "Warped Fortitude - Passive",
        text: "The Experiment is resistant to physical damage."
      },
      {
        id: "9Opoj_DeALCGiMKPR0LNC",
        name: "Overwhelm - Passive",
        text: "When a target the Experiment attacks has other adversaries within Very Close range, the Experiment deals double damage."
      },
      {
        id: "pTWkFyqz-DEWhltrbb5gv",
        name: "Lurching Lunge - Action",
        text: "Mark a Stress to spotlight the Experiment as an additional GM move instead of spending Fear."
      }
    ]
  },
  {
    name: "Giant Beastmaster",
    id: '94d100c8-51af-4034-b78a-ea965103704f',
    tier: "2",
    type: "Leader",
    text: "A leather-clad warrior bearing a whip and massive bow.",
    motives_and_tactics: "Command, make a living, maneuver, pin down, protect companion animals",
    difficulty: 16,
    thresholds: "12/24",
    hp: 6,
    stress: 5,
    atk: "+2",
    attack: "Longbow",
    range: "Far",
    damage: "2d8+4 phy",
    experience: "Animal Handling +3",
    feats: [
      {
        id: "TDKno90Uqx0trtG8PVZ27",
        name: "Two as One - Passive",
        text: "When the Beastmaster is spotlighted, you can also spotlight a Tier 1 animal adversary currently under their control."
      },
      {
        id: "luhciujw-GSdjso8fYZMK",
        name: "Pinning Strike - Action",
        text: "Make a standard attack against a target. On a success, you can mark a Stress to pin them to a nearby surface. The pinned target is Restrained until they break free with a successful Finesse or Strength Roll."
      },
      {
        id: "oA2y5u3edwn7avFowL1h5",
        name: "Deadly Companion - Action",
        text: "Twice per scene, summon a Bear, Dire Wolf, or similar Tier 1 animal adversary under the Beastmaster’s control. The adversary appears at Close range and is immediately spotlighted."
      }
    ]
  },
  {
    name: "Giant Brawler",
    id: '347bbaa6-00d4-43bc-b7f4-ea09757caa00',
    tier: "2",
    type: "Bruiser",
    text: "An especially muscular giant wielding a warhammer larger than a human.",
    motives_and_tactics: "Make a living, overwhelm, slam, topple",
    difficulty: 15,
    thresholds: "12/28",
    hp: 7,
    stress: 4,
    atk: "+2",
    attack: "Warhammer",
    range: "Very Close",
    damage: "2d12+3 phy",
    experience: "Intrusion +2",
    feats: [
      {
        id: "DFOWRA5MmFhfd70uSOcGJ",
        name: "Battering Ram - Action",
        text: "Mark a Stress to have the Brawler charge at an inanimate object within Close range they could feasibly smash (such as a wall, cart, or market stand) and destroy it. All targets within Very Close range of the object must succeed on an Agility Reaction Roll or take 2d4+3 physical damage from the shrapnel."
      },
      {
        id: "gfbwO2_TRxH9QctBZ8NKR",
        name: "Bloody Reprisal - Reaction",
        text: "When the Brawler marks 2 or more HP from an attack within Very Close range, you can make a standard attack against the attacker. On a success, the Brawler deals 2d6+15 physical damage instead of their standard damage."
      },
      {
        id: "LF6_ls7YcRWeU9ALikauh",
        name: "Momentum - Reaction",
        text: "When the Brawler makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Giant Eagle",
    id: '83207634-4d7a-493b-b222-96066019188e',
    tier: "2",
    type: "Skulk",
    text: "A giant bird of prey with blood-stained talons.",
    motives_and_tactics: "Hunt prey, stay mobile, strike decisively",
    difficulty: 14,
    thresholds: "8/19",
    hp: 4,
    stress: 4,
    atk: "+1",
    attack: "Claws and Beak",
    range: "Very Close",
    damage: "2d6+3 phy",
    feats: [
      {
        id: "vQx8gijBCl58jHN1Srqs2",
        name: "Flight - Passive",
        text: "While flying, the Eagle gains a +3 bonus to their Difficulty."
      },
      {
        id: "GuoIpclxLF5QLeGUz_HRO",
        name: "Deadly Dive - Action",
        text: "Mark a Stress to attack a target within Far range. On a success, deal 2d10+2 physical damage and knock the target over, making them Vulnerable until they next act."
      },
      {
        id: "KWyCWhXU2zaiUX13sAK9I",
        name: "Take Off - Action",
        text: "Make an attack against a target within Very Close range. On a success, deal 2d4+3 physical damage and the target must succeed on an Agility Reaction Roll or become temporarily Restrained within the Eagle’s massive talons. If the target is Restrained, the Eagle immediately lifts them to the air to Very Far range above the battlefield while holding them."
      },
      {
        id: "JNqv4v9yWLItFzVGgxMla",
        name: "Deadly Drop - Action",
        text: "While flying, the Eagle can drop a Restrained target they are holding. When dropped, the target is no longer Restrained but starts falling. If their fall isn’t prevented during the PCs’ next action, the target takes 2d20 physical damage when they land."
      }
    ]
  },
  {
    name: "Giant Recruit",
    id: '36538c6c-d620-40fc-bffe-76eca19dc1e9',
    tier: "2",
    type: "Minion",
    text: "A giant fighter undergoing borrowed armor.",
    motives_and_tactics: "Batter, make a living, overwhelm, terrify",
    difficulty: 13,
    thresholds: "None",
    hp: 1,
    stress: 2,
    atk: "+1",
    attack: "Warhammer",
    range: "Very Close",
    damage: "5 phy",
    feats: [
      {
        id: "O4JLGuwPQSAvNHNLYEOWR",
        name: "Minion (7) - Passive",
        text: "The Recruit is defeated when they take any damage. For every 7 damage a PC deals to the Recruit, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "sFBZ53btjO_4BlLov-MZP",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Giant Recruits within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Gorgon",
    id: '0ff44d36-a544-4d0f-b054-d22363d3f8e4',
    tier: "2",
    type: "Solo",
    text: "A snake-headed, scaled humanoid with a gilded bow, enraged that their peace has been disturbed.",
    motives_and_tactics: "Corner, hit-and-run, petrify, seek vengeance",
    difficulty: 15,
    thresholds: "13/25",
    hp: 9,
    stress: 3,
    atk: "+4",
    attack: "Sinew Shortbow",
    range: "Far",
    damage: "2d20+3 mag",
    experience: "Instinct +3",
    feats: [
      {
        id: "0VBcX5FwNET-DDEQLBnpZ",
        name: "Relentless (2) - Passive",
        text: "The Gorgon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "zDqfu4osN6FfgqiNR16Ls",
        name: "Suneater Arrows - Passive",
        text: "When the Gorgon makes a successful standard attack, the target Glows until the end of the scene and can’t become Hidden. Attack rolls made against a Glowing target have advantage."
      },
      {
        id: "gar_z8WP3snRwnom0laRT",
        name: "Crown of Serpents - Action",
        text: "Make an attack roll against a target within Melee range using the Gorgon’s protective snakes. On a success, mark Stress to deal 2d10+4 physical damage and the target must mark a Stress."
      },
      {
        id: "_53ZhaVN9flDCUq4HQkru",
        name: "Petrifying Gaze - Reaction",
        text: "When the Gorgon takes damage from an attack within Close range, you can spend a Fear to force the attacker to make an Instinct Reaction Roll. On a failure, they begin to turn to stone, marking a HP and starting a Petrification Countdown (4). This countdown ticks down when the Gorgon is attacked. When it triggers, the target must make a death move. If the Gorgon is defeated, all petrification countdowns end."
      },
      {
        id: "s6jjRjlyzzFLRjakskB6Z",
        name: "Death Glare - Reaction",
        text: "When the Gorgon makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Juvenile Flickerfly",
    id: '432846d0-930e-4105-8f15-243b882d5ca8',
    tier: "2",
    type: "Solo",
    text: "A horse-sized insect with iridescent scales and crystalline wings moving faster than the eye can see.",
    motives_and_tactics: "Collect shiny things, hunt, swoop",
    difficulty: 14,
    thresholds: "13/26",
    hp: 10,
    stress: 5,
    atk: "+3",
    attack: "Wing Slash",
    range: "Very Close",
    damage: "2d10+4 phy",
    feats: [
      {
        id: "yetHvu1SvwUZY8ad9nqDB",
        name: "Relentless (3) - Passive",
        text: "The Flickerfly can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "hwWeLL9fH0yd1F2A1G8ol",
        name: "Peerless Accuracy - Passive",
        text: "Before the Flickerfly makes an attack, roll a d6. On a result of 4 or higher, the target’s Evasion is halved against this attack."
      },
      {
        id: "aB0wXAjy5ChXZSDgHn1tg",
        name: "Mind Dance - Action",
        text: "Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target’s fears."
      },
      {
        id: "qA9-8BWsbK6R0xarKcT1c",
        name: "Hallucinatory Breath - Reaction: Countdown (Loop 1d6)",
        text: "When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must succeed on an Instinct Reaction Roll or be tormented by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail must mark a Stress and lose a Hope."
      }
    ]
  },
  {
    name: "Knight of the Realm",
    id: '9c417f4a-e453-42b0-b8bd-4ba1cefb693f',
    tier: "2",
    type: "Leader",
    text: "A decorated soldier with heavy armor and a powerful steed.",
    motives_and_tactics: "Run down, seek glory, show dominance",
    difficulty: 15,
    thresholds: "13/26",
    hp: 6,
    stress: 4,
    atk: "+4",
    attack: "Longsword",
    range: "Melee",
    damage: "2d10+4 phy",
    experience: "Ancient Knowledge +3, High Society +2, Tactics +2",
    feats: [
      {
        id: "gRBhWg9wVS5PVotZeaW5S",
        name: "Chevalier - Passive",
        text: "While the Knight is on a mount, they gain a +2 bonus to their Difficulty. When they take Severe damage, they’re knocked from their mount and lose this benefit until they’re next spotlighted."
      },
      {
        id: "ryeukYCNvj6r3rLQ6ttNO",
        name: "Heavily Armored - Passive",
        text: "When the Knight takes physical damage, reduce it by 3."
      },
      {
        id: "Kub8PGPj3GebqHfDZ6TFb",
        name: "Cavalry Charge - Action",
        text: "If the Knight is mounted, move up to Far range and make a standard attack against a target. On a success, deal 2d8+4 physical damage and the target must mark a Stress."
      },
      {
        id: "_rQVdyLJGsPE2Ws295wQj",
        name: "For the Realm! - Action",
        text: "Mark a Stress to spotlight 1d4+1 allies. Attacks they make while spotlighted in this way deal half damage."
      }
    ]
  },
  {
    name: "Masked Thief",
    id: '024804a3-d096-4d3c-bc6c-bd6a3d2d743d',
    tier: "2",
    type: "Skulk",
    text: "A cunning thief with acrobatic skill and a flair for the dramatic.",
    motives_and_tactics: "Evade, hide, pilfer, profit",
    difficulty: 14,
    thresholds: "8/17",
    hp: 4,
    stress: 5,
    atk: "+3",
    attack: "Backsword",
    range: "Melee",
    damage: "2d8+3 phy",
    experience: "Acrobatics +3",
    feats: [
      {
        id: "id-g6dagl4JqLp4UgtvTZ",
        name: "Quick Hands - Action",
        text: "Make an attack against a target within Melee range. On a success, deal 1d8+2 physical damage and the Thief steals one item or consumable from the target’s inventory."
      },
      {
        id: "leLL6Ocd67fB29VAhjQ9E",
        name: "Escape Plan - Action",
        text: "Mark a Stress to reveal a snare trap set anywhere on the battlefield by the Thief. All targets within Very Close range of the trap must succeed on an Agility Reaction Roll (13) or be pulled off their feet and suspended upside down. The target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Finesse or Strength Roll (13)."
      }
    ]
  },
  {
    name: "Merchant Baron",
    id: '44594a99-487c-49db-a9c7-937235cec221',
    tier: "2",
    type: "Social",
    text: "An accomplished merchant with a large operation under their command.",
    motives_and_tactics: "Abusive power, gather resources, mobilize minions",
    difficulty: 15,
    thresholds: "9/19",
    hp: 5,
    stress: 3,
    atk: "+2",
    attack: "Rapier",
    range: "Melee",
    damage: "1d6+2 phy",
    experience: "Nobility +2, Trade +2",
    feats: [
      {
        id: "Cg6jiu60ydt6CXNVJIsiD",
        name: "Everyone Has a Price - Action",
        text: "Spend a Fear to offer a target a dangerous bargain for something they want or need. If used on a PC, they must make a Presence Reaction Roll (17). On a failure, they must mark 2 Stress or take the deal."
      },
      {
        id: "tR5lU2KFVrA8fXU1PdYZo",
        name: "The Best Muscle Money Can Buy - Action",
        text: "Once per scene, mark a Stress to summon 1d4+1 Tier 1 adversaries, who appear at Far range, to enforce the Baron’s will."
      }
    ]
  },
  {
    name: "Minotaur Wrecker",
    id: '7f31d430-1a8c-4dad-b896-ce1562a099f9',
    tier: "2",
    type: "Bruiser",
    text: "A massive bull-headed hybrid with a quick temper.",
    motives_and_tactics: "Consume, gore, navigate, overpower, pursue",
    difficulty: 16,
    thresholds: "14/27",
    hp: 7,
    stress: 5,
    atk: "+2",
    attack: "Battleaxe",
    range: "Very Close",
    damage: "2d8+5 phy",
    experience: "Navigation +2",
    feats: [
      {
        id: "-dBHfwdFjTeqLPsLrGWIe",
        name: "Ramp Up - Passive",
        text: "You must spend a Fear to spotlight the Minotaur. While spotlighted, they can make their standard attack against all targets within range."
      },
      {
        id: "YjRD0TwgeZLVZsfJ71vEa",
        name: "Charging Bull - Action",
        text: "Mark a Stress to charge through a group within Close range and make an attack against all targets in the Minotaur’s path. Targets the Minotaur succeeds against take 2d6+8 physical damage and are knocked back to Very Far range. If a target is knocked into a solid object or another creature, they take an extra 1d6 damage (combine their damage)."
      },
      {
        id: "P6sfwHnme2iuWkh56uS47",
        name: "Gore - Action",
        text: "Make an attack against a target within Very Close range, moving the Minotaur into Melee range of them. On a success, deal 2d8 direct physical damage."
      }
    ]
  },
  {
    name: "Mortal Hunter",
    id: '958c032f-51f0-401b-a6ea-ab20e96a13e7',
    tier: "2",
    type: "Leader",
    text: "An undead figure wearing a heavy leather coat, with searching eyes and a cruelly cut demeanor.",
    motives_and_tactics: "Devour, hunt, track",
    difficulty: 16,
    thresholds: "15/27",
    hp: 6,
    stress: 4,
    atk: "+5",
    attack: "Tear at Flesh",
    range: "Very Close",
    damage: "2d12+1 phy",
    experience: "Bloodhound +3",
    feats: [
      {
        id: "XZ1ZHg7GNw9EU5TnkEJFC",
        name: "Terrifying - Passive",
        text: "When the Hunter makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        id: "iPRU-aWRnqB5P7ODOOYAL",
        name: "Deathlock - Action",
        text: "Spend a Fear to curse a target within Very Close range with a necrotic Deathlock until the end of the scene. Attacks made by the Hunter against a Deathlocked target deal direct damage. The Hunter can only maintain one Deathlock at a time."
      },
      {
        id: "JdBPEGATbi3gjHxtAi3_p",
        name: "Inevitable Death - Action",
        text: "Mark a Stress to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage."
      },
      {
        id: "NFq2xCEOuwlrCm6viwFv_",
        name: "Rampage - Reaction",
        text: "Countdown (Loop 1d6). When the Hunter is in the spotlight for the first time, activate the countdown. When it triggers, move the Hunter in a straight line to a point within Far range and make an attack against all targets in their path. Targets the Hunter succeeds against take 2d8+2 physical damage."
      }
    ]
  },
  {
    name: "Royal Advisor",
    id: 'c4e2114e-eac5-4d1b-9db3-d33e0b0f44c6',
    tier: "2",
    type: "Social",
    text: "A high-ranking courtier with the ear of the local nobility.",
    motives_and_tactics: "Curry favor, manufacture evidence, scheme",
    difficulty: 14,
    thresholds: "8/15",
    hp: 3,
    stress: 3,
    atk: "-3",
    attack: "Wand",
    range: "Far",
    damage: "1d4+3 phy",
    experience: "Administration +3, Courtier +3",
    feats: [
      {
        id: "vacvFaRDebqCC60QSH7vh",
        name: "Devastating Retort - Passive",
        text: "A PC who rolls less than 17 on an action roll targeting the Advisor must mark a Stress."
      },
      {
        id: "__lJ_T8sDIWrIEruRRogj",
        name: "Bend Ears - Action",
        text: "Mark a Stress to influence an NPC within Melee range with whispered words. That target’s opinion on one matter shifts toward the Advisor’s preference unless it is in direct opposition to the target’s motives."
      },
      {
        id: "EODhXVePwlGoxGjVmCHxG",
        name: "Scapegoat - Action",
        text: "Spend a Fear to convince a crowd or notable individual that one person or group is responsible for some problem facing the target. The target becomes hostile to the scapegoat until convinced of their innocence with a successful Presence Roll (17)."
      }
    ]
  },
  {
    name: "Secret-Keeper",
    id: 'ec286371-1aa3-42b1-909c-bfc24e626ced',
    tier: "2",
    type: "Leader",
    text: "A clandestine leader with a direct channel to the Fallen Gods.",
    motives_and_tactics: "Amass great power, plot, take command",
    difficulty: 16,
    thresholds: "13/26",
    hp: 7,
    stress: 4,
    atk: "+3",
    attack: "Sigil-Laden Staff",
    range: "Far",
    damage: "2d12 mag",
    experience: "Coercion +2, Fallen Lore +2",
    feats: [
      {
        id: "sShP1CyWShNpzYvZHV57P",
        name: "Seize Your Moment - Action",
        text: "Spend 2 Fear to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage."
      },
      {
        id: "rVJ5fR8BUsE4i2c839TGR",
        name: "Our Master’s Will - Reaction",
        text: "When you spotlight an ally within Far range, mark a Stress to gain a Fear."
      },
      {
        id: "HjbDdwRA_lZ87pyHzVbDA",
        name: "Summoning Ritual - Reaction",
        text: "Countdown (6). When the Secret-Keeper is in the spotlight for the first time, activate the countdown. When they mark HP, tick up this countdown by the number of HP marked. When it triggers, summon a Minor Demon who appears at Close range."
      },
      {
        id: "x2C-_5HKK_1EIHo5bFQvo",
        name: "Fallen Hounds - Reaction",
        text: "Once per scene, when the Secret-Keeper marks 2 or more HP, you can mark a Stress to summon a Demonic Hound Pack, which appears at Close range and is immediately spotlighted."
      }
    ]
  },
  {
    name: "Shark",
    id: 'ff09e2b8-9d2a-4fd9-bf15-b828408472e7',
    tier: "2",
    type: "Bruiser",
    text: "A large aquatic predator, always on the move.",
    motives_and_tactics: "Find the blood, isolate prey, target the weak",
    difficulty: 14,
    thresholds: "14/28",
    hp: 7,
    stress: 3,
    atk: "+2",
    attack: "Toothy Maw",
    range: "Very Close",
    damage: "2d12+1 phy",
    experience: "Sense of Smell +3",
    feats: [
      {
        id: "ARRndYbBBQbVNzghVN3vG",
        name: "Terrifying - Passive",
        text: "When the Shark makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        id: "8Kmjev0kwZkz0vr7EMwNe",
        name: "Rending Bite - Passive",
        text: "When the Shark makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP."
      },
      {
        id: "pWTWyBZfbRBA8QAOtz00Z",
        name: "Blood in the Water - Reaction",
        text: "When a creature within Close range of the Shark marks HP from another creature’s attack, you can mark a Stress to immediately spotlight the Shark, moving them into Melee range of the target and making a standard attack."
      }
    ]
  },
  {
    name: "Siren",
    id: 'ff849d42-db30-4e19-a53b-25b08ae7e946',
    tier: "2",
    type: "Skulk",
    text: "A half fish person with shimmering scales and an irresistible voice.",
    motives_and_tactics: "Consume, lure prey, subdue with song",
    difficulty: 14,
    thresholds: "9/18",
    hp: 5,
    stress: 3,
    atk: "+2",
    attack: "Distended Jaw Bite",
    range: "Melee",
    damage: "2d6+3 phy",
    experience: "Song Repertoire +3",
    feats: [
      {
        id: "gzT2qlinzWspjoxS72yOo",
        name: "Captive Audience - Passive",
        text: "If the Siren makes a standard attack against a target Entranced by their song, the attack deals 2d10+1 damage instead of their standard damage."
      },
      {
        id: "tucRL-IaZTl9NTdf5mlIR",
        name: "Enchanting Song - Action",
        text: "Spend a Fear to sing a song that affects all targets within Close range. Targets must succeed on an Instinct Reaction Roll or become Entranced until they mark 2 Stress. Other Sirens within Close range of the target can mark a Stress to each add a +1 bonus to the Difficulty of the reaction roll. While Entranced, a target can’t act and is Vulnerable."
      }
    ]
  },
  {
    name: "Spectral Archer",
    id: '2b167008-0d49-4294-8916-63ac10354b50',
    tier: "2",
    type: "Ranged",
    text: "A ghostly fighter with an ethereal bow, unable to move on while their charge is vulnerable.",
    motives_and_tactics: "Move through solid objects, stay out of the fray, rehash old battles",
    difficulty: 13,
    thresholds: "6/14",
    hp: 3,
    stress: 3,
    atk: "+3",
    attack: "Longbow",
    range: "Far",
    damage: "2d10+2 phy",
    experience: "Ancient Knowledge +2",
    feats: [
      {
        id: "9wUl23xwZVRSwuuzAwnL2",
        name: "Ghost - Passive",
        text: "The Archer has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        id: "elWZPCqLR_oRLJh1W4DCM",
        name: "Pick Your Target - Action",
        text: "Spend a Fear to make an attack against a target within Very Close range of at least two other PCs. On a success, the target takes 2d8+12 physical damage."
      }
    ]
  },
  {
    name: "Spectral Captain",
    id: '0910451e-147c-4b05-80da-4a48f01c32c1',
    tier: "2",
    type: "Leader",
    text: "A ghostly commander leading their troops beyond death.",
    motives_and_tactics: "Move through solid objects, rally troops, rehash old battles",
    difficulty: 16,
    thresholds: "13/26",
    hp: 6,
    stress: 4,
    atk: "+3",
    attack: "Longbow",
    range: "Far",
    damage: "2d10+3 phy",
    experience: "Ancient Knowledge +3",
    feats: [
      {
        id: "rS2fk2LwIbNTzjmxi60Iz",
        name: "Ghost - Passive",
        text: "The Captain has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        id: "a6zfgjTfMAM0Oz6LSmPyc",
        name: "Unending Battle - Action",
        text: "Spend 2 Fear to return up to 1d4+1 defeated Spectral allies to the battle at the points where they first appeared (with no marked HP or Stress)."
      },
      {
        id: "FYCWmN_sVifVYQBIRXh1x",
        name: "Hold Fast - Reaction",
        text: "When the Captain’s Spectral allies are forced to make a reaction roll, you can mark a Stress to give those allies a +2 bonus to the roll."
      },
      {
        id: "Ojq5BI0ca4LjuevnR96QO",
        name: "Momentum - Reaction",
        text: "When the Captain makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Spectral Guardian",
    id: 'fb5eafdd-440f-445c-9bcd-913edbc06d89',
    tier: "2",
    type: "Standard",
    text: "A ghostly fighter with spears and swords, anchored by duty.",
    motives_and_tactics: "Move through solid objects, protect treasure, rehash old battles",
    difficulty: 15,
    thresholds: "7/15",
    hp: 4,
    stress: 3,
    atk: "+1",
    attack: "Spear",
    range: "Very Close",
    damage: "2d8+1 phy",
    experience: "Ancient Knowledge +2",
    feats: [
      {
        id: "3BFVUG3A10OUeGSnytOya",
        name: "Ghost - Passive",
        text: "The Guardian has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        id: "BFM4vhAUTI4ApVcX9tjwc",
        name: "Grave Blade - Action",
        text: "Spend a Fear to make an attack against a target within Very Close range. On a success, deal 2d10+6 physical damage and the target must mark a Stress."
      }
    ]
  },
  {
    name: "Spy",
    id: 'b5271e75-5cb8-4685-ba89-00a4d48ed601',
    tier: "2",
    type: "Social",
    text: "A skilled espionage agent with a knack for being in the right place to overhear secrets.",
    motives_and_tactics: "Cut and run, disguise appearance, eavesdrop",
    difficulty: 15,
    thresholds: "8/17",
    hp: 4,
    stress: 3,
    atk: "-2",
    attack: "Dagger",
    range: "Melee",
    damage: "2d6+3 phy",
    experience: "Espionage +3",
    feats: [
      {
        id: "1IjenmZ3c2A29DEQngVyZ",
        name: "Gathering Secrets - Action",
        text: "Spend a Fear to describe how the Spy knows a secret about a PC in the scene."
      },
      {
        id: "dYy1YWTAOjSinpUbaBBO7",
        name: "Fly on the Wall - Reaction",
        text: "When a PC or group is discussing something sensitive, you can mark a Stress to reveal that the Spy is present in the scene, observing them. If the Spy escapes the scene to report their findings, you gain 1d4 Fear."
      }
    ]
  },
  {
    name: "Stonewraith",
    id: '194afc91-39e7-4e76-97f1-8b4a3754363a',
    tier: "2",
    type: "Skulk",
    text: "A prowling hunter, like a slinking mountain lion, with a slate-gray stone body.",
    motives_and_tactics: "Defend territory, isolate prey, stalk",
    difficulty: 13,
    thresholds: "11/22",
    hp: 6,
    stress: 3,
    atk: "+3",
    attack: "Bite and Claws",
    range: "Melee",
    damage: "2d8+6 phy",
    experience: "Stonesense +3",
    feats: [
      {
        id: "2VdIS_3FsBDTJDqSyn-uC",
        name: "Stonestrider - Passive",
        text: "The Stonewraith can move through stone and earth as easily as air. While within stone or earth, they are Hidden and immune to all damage."
      },
      {
        id: "6GYvPTCXQp01OVkK9qqfw",
        name: "Rocky Ambush - Action",
        text: "While Hidden, mark a Stress to leap into Melee range with a target within Very Close range. The target must succeed on an Agility or Instinct Reaction Roll (15) or take 2d8 physical damage and become temporarily Restrained."
      },
      {
        id: "gKhuIw9vJOBAlM4j-VSAx",
        name: "Avalanche Roar - Action",
        text: "Spend a Fear to roar while within a cave and cause a cave-in. All targets within Close range must succeed on an Agility Reaction Roll (14) or take 2d10 physical damage. The rubble can be cleared with a Progress Countdown (8)."
      },
      {
        id: "W14mWg4jSKJ-KJx1VllD7",
        name: "Momentum - Reaction",
        text: "When the Stonewraith makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "War Wizard",
    id: 'c7fa6a3c-6441-4274-aee7-e54c5077ec92',
    tier: "2",
    type: "Ranged",
    text: "A battle-hardened mage trained in destructive magic.",
    motives_and_tactics: "Develop new spells, seek power, conquer",
    difficulty: 16,
    thresholds: "11/23",
    hp: 5,
    stress: 6,
    atk: "+4",
    attack: "Staff",
    range: "Far",
    damage: "2d10+4 mag",
    experience: "Magical Knowledge +2, Strategize +2",
    feats: [
      {
        id: "yRO8FbzoRLCV1_qIRnU5y",
        name: "Battle Teleport - Passive",
        text: "Before or after making a standard attack, you can mark a Stress to teleport to a location within Far range."
      },
      {
        id: "h7IlGk1po5U16Y_IK9sj9",
        name: "Refresh Warding Sphere - Action",
        text: "Mark a Stress to refresh the Wizard’s “Warding Sphere” reaction."
      },
      {
        id: "gsuS1Mia2PkMA3czijYct",
        name: "Eruption - Action",
        text: "Spend a Fear and choose a point within Far range. A Very Close area around that point erupts into impassable terrain. All targets within that area must make an Agility Reaction Roll (14). Targets who fail take 2d10 physical damage and are thrown out of the area. Targets who succeed take half damage and aren’t moved."
      },
      {
        id: "GDJ5QIWfi4DCJxi0yJzfK",
        name: "Arcane Artillery - Action",
        text: "Spend a Fear to unleash a precise hail of magical blasts. All targets in the scene must make an Agility Reaction Roll. Targets who fail take 2d12 magic damage. Targets who succeed take half damage."
      },
      {
        id: "S01Oc62qRGY6xMmwcZzXr",
        name: "Warding Sphere - Reaction",
        text: "When the Wizard takes damage from an attack within Close range, deal 2d6 magic damage to the attacker. This reaction can’t be used again until the Wizard refreshes it with their “Refresh Warding Sphere” action."
      }
    ]
  },
  {
    name: "Adult Flickerfly",
    id: 'c258b235-3cee-47e0-b2e5-4dc79afae977',
    tier: "3",
    type: "Solo",
    text: "A winged insect the size of a large house with iridescent scales and wings that move too fast to track.",
    motives_and_tactics: "Collect shiny things, hunt, nest, swoop",
    difficulty: 17,
    thresholds: "20/35",
    hp: 12,
    stress: 6,
    atk: "+3",
    attack: "Wing Slash",
    range: "Very Close",
    damage: "3d20 phy",
    feats: [
      {
        id: "JiWG2Y6OmGUalBxQnT0kE",
        name: "Relentless (4) - Passive",
        text: "The Flickerfly can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "l6SqfQWWQp3RgicCSpbba",
        name: "Never Misses - Passive",
        text: "When the Flickerfly makes an attack, the target’s Evasion is halved against the attack."
      },
      {
        id: "eOY2px1CBJY95jf02CyJI",
        name: "Deadly Flight - Passive",
        text: "While flying, the Flickerfly can move up to Far range instead of Close range before taking an action."
      },
      {
        id: "bNudtXZ1sj9WQceiVbS-2",
        name: "Whirlwind - Action",
        text: "Spend a Fear to whirl, making an attack against all targets within Very Close range. Targets the Flickerfly succeeds against take 3d8 direct physical damage."
      },
      {
        id: "_VId4xCgMer7KXmcIZY4k",
        name: "Mind Dance - Action",
        text: "Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target’s fears."
      },
      {
        id: "wLkGbL3OjYR58JSS_HpAY",
        name: "Hallucinatory Breath - Action: Countdown (Loop 1d6)",
        text: "When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must make an Instinct Reaction Roll or become overwhelmed by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail lose 2 Hope and take 3d8+3 direct magic damage."
      },
      {
        id: "15gykQbiZ1BhEkLVgV6i9",
        name: "Uncanny Reflexes - Reaction",
        text: "When the Flickerfly takes damage from an attack within Close range, you can mark a Stress to take half damage."
      }
    ]
  },
  {
    name: "Demon of Avarice",
    id: '085241da-3a63-475a-a742-6f274a7e4905',
    tier: "3",
    type: "Support",
    text: "A regal cloaked monstrosity with circular horns adorned with treasure.",
    motives_and_tactics: "Consume, fuel greed, sow dissent",
    difficulty: 17,
    thresholds: "15/29",
    hp: 6,
    stress: 5,
    atk: "+2",
    attack: "Hungry Maw",
    range: "Melee",
    damage: "3d6+5 mag",
    experience: "Manipulation +3",
    feats: [
      {
        id: "65m0xZ-GnOLeQxmS4lYWN",
        name: "Money Talks - Passive",
        text: "Attacks against the Demon are made with disadvantage unless the attacker spends a handful of gold. This Demon starts with a number of handfuls equal to the number of PCs. When a target marks HP from the Demon’s standard attack, they can spend a handful of gold instead of marking HP (1 handful per HP). Add a handful of gold to the Demon for each handful of gold spent by PCs on this feature."
      },
      {
        id: "JALaOs6iPZBWM7Kw7l598",
        name: "Numbers Must Go Up - Passive",
        text: "Add a bonus to the Demon’s attack rolls equal to the number of handfuls of gold they have."
      },
      {
        id: "oi-qclSBY6-aQBPstUmb8",
        name: "Money is Time - Action",
        text: "Spend 3 handfuls of gold (or a Fear) to spotlight 1d4+1 allies."
      }
    ]
  },
  {
    name: "Demon of Despair",
    id: '8bab216b-b7db-46dd-9e18-33e9e2b345fb',
    tier: "3",
    type: "Skulk",
    text: "A cloaked one-creature with long limbs, seeping shadows.",
    motives_and_tactics: "Make fear contagious, stick to the shadows, undermine resolve",
    difficulty: 17,
    thresholds: "18/35",
    hp: 6,
    stress: 5,
    atk: "+3",
    attack: "Miasma Bolt",
    range: "Far",
    damage: "3d6+4 mag",
    experience: "Manipulation +3",
    feats: [
      {
        id: "pyvRNxTNUHq_Wb0bI97n0",
        name: "Depths of Despair - Passive",
        text: "The Demon deals double damage to PCs with 0 Hope."
      },
      {
        id: "_gUOZfFhKjicoixwVvwl8",
        name: "Your Struggle Is Pointless - Action",
        text: "Spend a Fear to weigh down the spirits of all PCs within Far range. All targets affected replace their Hope Die with a d8 until they roll a success with Hope or their next rest."
      },
      {
        id: "G1XqiJ4BKpUaHY6kIPfX4",
        name: "Your Friends Will Fail You - Reaction",
        text: "When a PC fails with Fear, you can mark a Stress to cause all other PCs within Close range to lose a Hope."
      },
      {
        id: "a4INYaLc4a2Jjpu1wQcdH",
        name: "Momentum - Reaction",
        text: "When the Demon makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Demon of Hubris",
    id: 'e2d24302-0f25-41f0-ad8a-2f94e97f379b',
    tier: "3",
    type: "Leader",
    text: "A perfectly beautiful and infinitely cruel demon with a gleaming spear and elegant robes.",
    motives_and_tactics: "Condescend, declare premature victory, prove superiority",
    difficulty: 19,
    thresholds: "20/36",
    hp: 7,
    stress: 5,
    atk: "+4",
    attack: "Perfect Spear",
    range: "Very Close",
    damage: "3d10 phy",
    experience: "Manipulation +2",
    feats: [
      {
        id: "k647vMBNLbVklkFChBsls",
        name: "Terrifying - Passive",
        text: "When the Demon makes a successful attack, all PCs within Far range must lose a Hope and you gain a Fear."
      },
      {
        id: "l3yLjgsykJ0j-BW8Kdtlw",
        name: "Double or Nothing - Passive",
        text: "When a PC within Far range fails a roll, they can choose to reroll their Fear Die and take the new result. If they still fail, they mark 2 Stress and the Demon clears a Stress."
      },
      {
        id: "zOIEnzNbKCkA6p1z9jOMy",
        name: "Unparalleled Skill - Action",
        text: "Mark a Stress to deal the Demon’s standard attack damage to a target within Close range."
      },
      {
        id: "NfY67InUZ3RjWWtUBpijO",
        name: "The Root of Villainy - Action",
        text: "Spend a Fear to spotlight two other Demons within Far range."
      },
      {
        id: "MOEJcN5zFu4PdHa4LdwDq",
        name: "You Pale in Comparison - Reaction",
        text: "When a PC fails a roll within Close range of the Demon, they must mark a Stress."
      }
    ]
  },
  {
    name: "Demon of Jealousy",
    id: '5dc08a77-3465-4b7a-9043-911f28d845bb',
    tier: "3",
    type: "Ranged",
    text: "A fickle creature of spindly limbs and insatiable desires.",
    motives_and_tactics: "Join in on others’ success, take what belongs to others, hold grudges",
    difficulty: 17,
    thresholds: "17/30",
    hp: 6,
    stress: 6,
    atk: "+4",
    attack: "Psychic Assault",
    range: "Far",
    damage: "3d8+3 mag",
    experience: "Manipulation +3",
    feats: [
      {
        id: "sWtc6YYHlfxQkY5BGogUE",
        name: "Unprotected Mind - Passive",
        text: "The Demon’s standard attack deals direct damage."
      },
      {
        id: "33RyJFDdPBv8RVlO0umge",
        name: "My Turn - Reaction",
        text: "When the Demon marks HP from an attack, spend a number of Fear equal to the HP marked by the Demon to cause the attacker to mark the same number of HP."
      },
      {
        id: "iGuk2uuqqnL49IdtyhlpU",
        name: "Rivalry - Reaction",
        text: "When a creature within Close range takes damage from a different adversary, you can mark a Stress to add a d4 to the damage roll."
      },
      {
        id: "Mudi4SWdxvmspbTuTvq23",
        name: "What’s Yours Is Mine - Reaction",
        text: "When a PC takes severe damage within Very Close range of the Demon, you can spend a Fear to cause the target to make a Finesse Reaction Roll. On a failure, the Demon seizes one item or consumable of their choice from the target’s inventory."
      }
    ]
  },
  {
    name: "Demon of Wrath",
    id: '6a5441ad-e3ff-4b93-aea1-744151f02aea',
    tier: "3",
    type: "Bruiser",
    text: "A hulking demon with boulder-sized fists, driven by endless rage.",
    motives_and_tactics: "Fuel anger, impress rivals, wreak havoc",
    difficulty: 17,
    thresholds: "22/40",
    hp: 7,
    stress: 5,
    atk: "+3",
    attack: "Fists",
    range: "Very Close",
    damage: "3d8+1 mag",
    experience: "Intimidation +2",
    feats: [
      {
        id: "gxD-8alYeaDG9S2GrRN5W",
        name: "Anger Unrelenting - Passive",
        text: "The Demon’s attacks deal direct damage."
      },
      {
        id: "BJgWkaEEpW9XIog53P7ud",
        name: "Battle Lust - Action",
        text: "Spend a Fear to boil the blood of all PCs within Far range. They use a d20 as their Fear Die until the end of the scene."
      },
      {
        id: "zbelznJwvO210Mq_4hxy2",
        name: "Retaliation - Reaction",
        text: "When the Demon takes damage from an attack within Close range, you can mark a Stress to make a standard attack against the attacker."
      },
      {
        id: "xMm_KFLrDgR1Bbyg2ebCT",
        name: "Blood and Souls - Reaction: Countdown (Loop 6)",
        text: "Activate the first time an attack is made within sight of the Demon. It ticks down when a PC takes a violent action. When it triggers, summon 1d4 Minor Demons, who appear at Close range."
      }
    ]
  },
  {
    name: "Dire Bat",
    id: 'c5fbd7fa-3117-415f-8688-2ae982026fb1',
    tier: "3",
    type: "Skulk",
    text: "A winged pet endlessly loyal to their vampire owner.",
    motives_and_tactics: "Dive-bomb, hide, protect leader",
    difficulty: 14,
    thresholds: "16/30",
    hp: 5,
    stress: 3,
    atk: "+2",
    attack: "Claws and Teeth",
    range: "Melee",
    damage: "2d6+7 phy",
    experience: "Bloodthirsty +3",
    feats: [
      {
        id: "7Np9syZn176e-rteW4JfO",
        name: "Flying - Passive",
        text: "While flying, the Bat gains a +3 bonus to their Difficulty."
      },
      {
        id: "UBXvcDbm1-o3bNXayLa6b",
        name: "Screech - Action",
        text: "Mark a Stress to send a high-pitch screech out toward all targets in front of the Bat within Far range. Those targets must mark 1d4 Stress."
      },
      {
        id: "PK5j3iq5dwOXIhmBMCRFS",
        name: "Guardian - Reaction",
        text: "When an allied Vampire marks HP, you can mark a Stress to fly into Melee range of the attacker and make an attack with advantage against them. On a success, deal 2d6+2 physical damage."
      }
    ]
  },
  {
    name: "Dryad",
    id: '59cada8b-33c5-43e2-8379-f7c19c7a5acb',
    tier: "3",
    type: "Leader",
    text: "A nature spirit in the form of a humanoid tree.",
    motives_and_tactics: "Camouflage, drive out, preserve the forest",
    difficulty: 16,
    thresholds: "24/38",
    hp: 8,
    stress: 5,
    atk: "+4",
    attack: "Deadfall Shortbow",
    range: "Far",
    damage: "3d10+1 phy",
    experience: "Forest Knowledge +4",
    feats: [
      {
        id: "u04SaoZTOpISMh9oQE9lq",
        name: "Bramble Patch - Action",
        text: "Mark a Stress to target a point within Far range. Create a patch of thorns that covers an area within Close range of that point. All targets within that area take 2d6+2 physical damage when they act. A target must succeed on a Finesse Roll or take more than 20 damage to the Dryad with an attack to leave the area."
      },
      {
        id: "2bBK6ro-XavcyqNb8_IJE",
        name: "Group Saplings - Action",
        text: "Spend a Fear to grow three Treant Sapling Minions, who appear at Close range and immediately take the spotlight."
      },
      {
        id: "wfxRWXx6DwwRrsHU3a62r",
        name: "We Are All One - Reaction",
        text: "When an ally dies within Close range, you can spend a Fear to clear 2 HP and 2 Stress as the fallen ally’s life force is returned to the forest."
      }
    ]
  },
  {
    name: "Elemental Spark",
    id: 'e91246ca-80ce-4b42-ad7e-95bde6eccb5c',
    tier: "3",
    type: "Minion",
    text: "A blazing mote of elemental fire.",
    motives_and_tactics: "Blast, consume, gain mass",
    difficulty: 15,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "+0",
    attack: "Burst of Fire",
    range: "Close",
    damage: "5 mag",
    feats: [
      {
        id: "XQ0RPwHdnvwDDUw6TRBvb",
        name: "Minion (9) - Passive",
        text: "The Elemental is defeated when they take any damage. For every 9 damage a PC deals to the Elemental, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "HnL71yow6qFaspDvKACPx",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Elemental Sparks within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Greater Earth Elemental",
    id: '7df4133d-5340-4d32-b746-3b8401cdf1da',
    tier: "3",
    type: "Bruiser",
    text: "A living landslide of boulders and dust, as large as a house.",
    motives_and_tactics: "Avalanche, knock over, pummel",
    difficulty: 17,
    thresholds: "22/40",
    hp: 10,
    stress: 4,
    atk: "+7",
    attack: "Boulder Fist",
    range: "Very Close",
    damage: "3d10+1 phy",
    feats: [
      {
        id: "56R3552qt0-fxw5GUzUU5",
        name: "Slow - Passive",
        text: "When you spotlight the Elemental and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Elemental and they have a token on their stat block, clear the token and they can act."
      },
      {
        id: "okrU_o0je887-rvFJSOLX",
        name: "Crushing Blows - Passive",
        text: "When the Elemental makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP."
      },
      {
        id: "HDqfWXIbnKY4mvmLWQl6d",
        name: "Immovable Object - Passive",
        text: "An attack that would move the Elemental moves them two fewer ranges (for example, Far becomes Very Close). When the Elemental takes physical damage, reduce it by 7."
      },
      {
        id: "HHNDK_QPv62DJfGLSKoIF",
        name: "Rockslide - Action",
        text: "Mark a Stress to create a rockslide that buries all the land in front of Elemental within Close range with rockfall. All targets in this area must make an Agility Reaction Roll (19). Targets who fail take 2d12+5 physical damage and become Vulnerable until their next roll with Hope. Targets who succeed take half damage."
      },
      {
        id: "Z_9hPDRvznzOEiAZhaPAS",
        name: "Momentum - Reaction",
        text: "When the Elemental makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Greater Water Elemental",
    id: '43f5bcfd-c770-449f-8ee3-ed608c3e35eb',
    tier: "3",
    type: "Support",
    text: "A huge living wave that crashes down upon enemies.",
    motives_and_tactics: "Deluge, disperse, drown",
    difficulty: 17,
    thresholds: "17/34",
    hp: 5,
    stress: 5,
    atk: "+3",
    attack: "Crashing Wave",
    range: "Very Close",
    damage: "3d4+1 mag",
    feats: [
      {
        id: "IDo18syOIitQzrFdo4tQa",
        name: "Water Jet - Action",
        text: "Mark a Stress to attack a target within Very Close range. On a success, deal 2d4+7 physical damage and the target’s next action has disadvantage. On a failure, the target must mark a Stress."
      },
      {
        id: "g7QnlPcz_6_VTpCFf4V5L",
        name: "Drowning Embrace - Action",
        text: "Spend a Fear to make an attack against all targets within Very Close range. Targets the Elemental succeeds against become Restrained and Vulnerable as they begin drowning. A target can break free, ending both conditions, with a successful Strength or Instinct Roll."
      },
      {
        id: "KWXQVXdtfBKM8q5IO5NwN",
        name: "High Tide - Reaction",
        text: "When the Elemental makes a successful standard attack, you can mark a Stress to knock the target back to Close range."
      }
    ]
  },
  {
    name: "Huge Green Ooze",
    id: '7a20d8fa-524d-4012-ac1a-69284e43fd59',
    tier: "3",
    type: "Skulk",
    text: "A translucent green mound of acid taller than most humans.",
    motives_and_tactics: "Camouflage, creep up, envelop, multiply",
    difficulty: 15,
    thresholds: "15/30",
    hp: 7,
    stress: 4,
    atk: "+3",
    attack: "Ooze Appendage",
    range: "Melee",
    damage: "3d8+1 mag",
    experience: "Blend In +3",
    feats: [
      {
        id: "CMQVgL56m8n5A80MybK9P",
        name: "Slow - Passive",
        text: "When you spotlight the Ooze and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act."
      },
      {
        id: "JUmsG3wopjMdY9EPh2mfS",
        name: "Acidic Form - Passive",
        text: "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP."
      },
      {
        id: "aMkIw9RwgB2SyyU9wl6BY",
        name: "Envelop - Action",
        text: "Make an attack against a target within Melee range. On a success, the Ooze Envelops them and the target must mark 2 Stress. While Enveloped, the target must mark an additional Stress every time they make an action roll. When the Ooze takes Severe damage, all Enveloped targets are freed and the condition is cleared."
      },
      {
        id: "9XR6vEa06TYCAdEwrAd2Q",
        name: "Split - Reaction",
        text: "When the Ooze has 4 or more HP marked, you can spend a Fear to split them into two Green Oozes (with no marked HP or Stress). Immediately spotlight both of them."
      }
    ]
  },
  {
    name: "Hydra",
    id: 'd42f74d9-fbce-44a1-899c-f524eae25af0',
    tier: "3",
    type: "Solo",
    text: "A quadrupedal scaled beast with multiple long-necked heads, each filled with menacing fangs.",
    motives_and_tactics: "Devour, regenerate, terrify",
    difficulty: 18,
    thresholds: "19/35",
    hp: 10,
    stress: 5,
    atk: "+3",
    attack: "Bite",
    range: "Close",
    damage: "2d12+2 phy",
    feats: [
      {
        id: "sG3d-LL5--gvBTAFEovAD",
        name: "Many-Headed Menace - Passive",
        text: "The Hydra begins with three heads and can have up to five. When the Hydra takes Major or greater damage, they lose a head."
      },
      {
        id: "DPQtvF4RTAuL_7sTPCXWB",
        name: "Relentless (X) - Passive",
        text: "The Hydra can be spotlighted X times per GM turn, where X is the Hydra’s number of heads. Spend Fear as usual to spotlight them."
      },
      {
        id: "rJmZPvIfZyYMD0AxWQxwn",
        name: "Regeneration - Action",
        text: "If the Hydra has any marked HP, spend a Fear to clear a HP and grow two heads."
      },
      {
        id: "42Fof_5FL2kl_t22i0uOg",
        name: "Terrifying Chorus - Action",
        text: "All PCs within Far range lose 2 Hope."
      },
      {
        id: "Rb31esPOPn-NrpLVEOZkv",
        name: "Magical Weakness - Reaction",
        text: "When the Hydra takes magic damage, they become Dazed until the next roll with Fear. While Dazed, they can’t use their Regeneration action but are immune to magic damage."
      }
    ]
  },
  {
    name: "Monarch",
    id: '0a246e68-d7e1-4eb9-89a6-a5def3858cdb',
    tier: "3",
    type: "Social",
    text: "The sovereign ruler of a nation, unearthed in the privilege of tradition and wielding unmatched power in their domain.",
    motives_and_tactics: "Control vassals, destroy rivals, forge a legacy",
    difficulty: 16,
    thresholds: "16/32",
    hp: 6,
    stress: 5,
    atk: "+0",
    attack: "Warhammer",
    range: "Melee",
    damage: "3d6+3 phy",
    experience: "History +3, Nobility +3",
    feats: [
      {
        id: "D-bMwnzATeul_f5lR4Gqu",
        name: "Execute Them! - Action",
        text: "Spend a Fear per PC in the party to have the group condemned for crimes real or imagined. A PC who succeeds on a Presence Roll can demand trial by combat or another special form of trial."
      },
      {
        id: "KijdahkO2zzYsKZzS8hct",
        name: "Crossguard - Action",
        text: "Once per scene, mark a Stress to summon Tier X Minions, who appear at Close range to enforce the Monarch’s will."
      },
      {
        id: "tzUHC2oVAw-GbOViWR4f9",
        name: "Census Bell - Reaction: Long-Term Countdown (8)",
        text: "Spend a Fear to activate after the Monarch’s desire for war is first revealed. When it triggers, the Monarch has a reason to rally the nation to war and the support to act on that reason. You gain 1d4 Fear."
      }
    ]
  },
  {
    name: "Oak Treant",
    id: '226c9297-506f-4c91-a631-422874a451d2',
    tier: "3",
    type: "Bruiser",
    text: "A sturdy animated old-growth tree.",
    motives_and_tactics: "Hide in plain sight, preserve the forest, root down, swing branches",
    difficulty: 17,
    thresholds: "22/40",
    hp: 7,
    stress: 4,
    atk: "+2",
    attack: "Branch",
    range: "Very Close",
    damage: "3d8+2 phy",
    experience: "Forest Knowledge +3",
    feats: [
      {
        id: "dtd4aLUsz6oL7PlVxT7Fn",
        name: "Just a Tree - Passive",
        text: "Before they make their first attack in a fight or after they become Hidden, the Treant is indistinguishable from other trees until they next act or a PC succeeds on an Instinct Roll to identify them."
      },
      {
        id: "mZleNPJOndezs8-Y48hYS",
        name: "Seed Barrage - Action",
        text: "Mark a Stress and make an attack against up to three targets within Close range, pummeling them with giant acorns. Targets the Treant succeeds against take 2d10+5 physical damage."
      },
      {
        id: "GrXFcs7fMJ9x0ibzjbs1I",
        name: "Take Root - Action",
        text: "Mark a Stress to Root the Treant in place. The Treant is Restrained while Rooted, and can end this effect instead of moving while they are spotlighted. While Rooted, the Treant has resistance to physical damage."
      }
    ]
  },
  {
    name: "Treant Sapling",
    id: '1920fdb6-cb84-4afa-9348-0bc553006b4d',
    tier: "3",
    type: "Minion",
    text: "A small, sentient tree sapling.",
    motives_and_tactics: "Blend in, preserve the forest, pummel, surround",
    difficulty: 14,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "+0",
    attack: "Branches",
    range: "Melee",
    damage: "8 phy",
    feats: [
      {
        id: "hX6OisZBiVIhlrKMdtfew",
        name: "Minion (6) - Passive",
        text: "The Sapling is defeated when they take any damage. For every 6 damage a PC deals to the Sapling, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "3TCL-0VnbE5W3rSCbOpe_",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Treant Saplings within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 8 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Head Vampire",
    id: '2c3bcc02-1582-48c8-be3b-64f7bb8ef8b4',
    tier: "3",
    type: "Leader",
    text: "A captivating undead dressed in aristocratic finery.",
    motives_and_tactics: "Create thralls, charm, command, fly, intimidate",
    difficulty: 17,
    thresholds: "22/42",
    hp: 6,
    stress: 6,
    atk: "+5",
    attack: "Rapier",
    range: "Melee",
    damage: "2d20+4 phy",
    experience: "Aristocrat +3",
    feats: [
      {
        id: "Z67daZKVNg9by-dry7Uh4",
        name: "Terrifying - Passive",
        text: "When the Vampire makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        id: "STtnwP_M78Jjdosmocyu-",
        name: "Look Into My Eyes - Passive",
        text: "A creature who moves into Melee range of the Vampire must make an Instinct Reaction Roll. On a failure, you gain 1d4 Fear."
      },
      {
        id: "vuLsuAl62HcnH6xeRCMJL",
        name: "Feed on Followers - Action",
        text: "When the Vampire is within Melee range of an ally, they can cause the ally to mark a HP. The Vampire then clears a HP."
      },
      {
        id: "GrWwY00geltzVFeGgMaKr",
        name: "The Hunt Is On - Action",
        text: "Spend 2 Fear to summon 1d4 Vampires, who appear at Far range and immediately take the spotlight."
      },
      {
        id: "jxROvXolnIGjpnyL_olbE",
        name: "Lifesuck - Reaction",
        text: "When the Vampire is spotlighted, roll a d8. On a result of 6 or higher, all targets within Very Close range must mark a HP."
      }
    ]
  },
  {
    name: "Vampire",
    id: 'd74c2918-a83b-47fd-a597-3d0ffd9d8cba',
    tier: "3",
    type: "Standard",
    text: "An intelligent undead with blood-stained lips and a predator’s smile.",
    motives_and_tactics: "Bite, charm, deceive, feed, intimidate",
    difficulty: 16,
    thresholds: "18/35",
    hp: 5,
    stress: 4,
    atk: "+3",
    attack: "Rapier",
    range: "Melee",
    damage: "3d8 phy",
    experience: "Nocturnal Hunter +3",
    feats: [
      {
        id: "k7t1_ltbTK-p1P1UVO9FB",
        name: "Draining Bite - Action",
        text: "Make an attack against a target within Melee range. On a success, deal 4d physical damage. A target who marks HP from this attack loses a Hope and must mark a Stress. The Vampire then clears a HP."
      },
      {
        id: "4YwnsYhOVqYlebMo2iGbe",
        name: "Mistform - Reaction",
        text: "When the Vampire takes physical damage, you can spend a Fear to take half damage."
      }
    ]
  },
  {
    name: "Vault Guardian Sentinel",
    id: 'd08193d4-f770-46dd-80fc-ea31347d1f22',
    tier: "3",
    type: "Bruiser",
    text: "A dust-covered golden construct with boxy limbs and a huge mace for a hand.",
    motives_and_tactics: "Destroy at any cost, expunge, protect",
    difficulty: 17,
    thresholds: "21/40",
    hp: 6,
    stress: 3,
    atk: "+3",
    attack: "Charged Mace",
    range: "Very Close",
    damage: "2d12+1 phy",
    feats: [
      {
        id: "PTuqeIQjEvxzhExccYcGF",
        name: "Kinetic Slam - Passive",
        text: "Targets who take damage from the Sentinel’s standard attack are knocked back to Very Close range."
      },
      {
        id: "PkdPHjCQpCSiTnyjNRgY3",
        name: "Box In - Action",
        text: "Mark a Stress to choose a target within Very Close range to focus on. That target has disadvantage on attack rolls when they’re within Very Close range of the Sentinel. The Sentinel can only focus on one target at a time."
      },
      {
        id: "n5zFbrh6lFOfN09zTRB1D",
        name: "Mana Bolt - Action",
        text: "Spend a Fear to lob explosive magic at a point within Far range. All targets within Very Close range of that point must make an Agility Reaction Roll. Targets who fail take 8d20 magic damage and are knocked back to Close range. Targets who succeed take half damage and aren’t knocked back."
      },
      {
        id: "2hzjACV_-SnfT7FygY2Rn",
        name: "Momentum - Reaction",
        text: "When the Sentinel makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Vault Guardian Turret",
    id: 'e5283e5c-fcb2-4b55-9ddb-a140341f593f',
    tier: "3",
    type: "Ranged",
    text: "A massive hulking turret with reinforced armor and twelve piston-driven mechanical legs.",
    motives_and_tactics: "Concentrate fire, lock down, mark, protect",
    difficulty: 16,
    thresholds: "20/32",
    hp: 5,
    stress: 4,
    atk: "+3",
    attack: "Magitech Cannon",
    range: "Far",
    damage: "3d10+3 mag",
    feats: [
      {
        id: "1lEf1UgKaL03ISaiM7Xdd",
        name: "Slow Firing - Passive",
        text: "When you spotlight the Turret and they don’t have a token on their stat block, they can’t make a standard attack. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Turret and they have a token on their stat block, clear the token and they can attack."
      },
      {
        id: "SREFB7aYTQ7ssVDn8wy79",
        name: "Mark Target - Action",
        text: "Spend a Fear to Mark a target within Far range until the Turret is destroyed or the Marked target becomes Hidden. While the target is Marked, their Evasion is halved."
      },
      {
        id: "qOr71EiQj5VTOSfPwNSj4",
        name: "Concentrate Fire - Reaction",
        text: "When another adversary deals damage to a target within Far range of the Turret, you can mark a Stress to add the Turret’s standard attack damage to the damage roll."
      },
      {
        id: "_EVnLoOnPXHEj3TSkPeAO",
        name: "Detonation - Reaction",
        text: "When the Turret is destroyed, they explode. All targets within Close range must make an Agility Reaction Roll. Targets who fail take 3d20 physical damage. Targets who succeed take half damage."
      }
    ]
  },
  {
    name: "Vault Guardian Gaoler",
    id: '761540d9-44ba-4384-95d7-5e8b14eb9824',
    tier: "3",
    type: "Support",
    text: "A boxy, dust-covered construct with thick metallic swinging doors on their torso.",
    motives_and_tactics: "Carry away, entrap, protect, pummel",
    difficulty: 16,
    thresholds: "19/33",
    hp: 5,
    stress: 3,
    atk: "+2",
    attack: "Body Bash",
    range: "Very Close",
    damage: "3d6+2 phy",
    feats: [
      {
        id: "3zp1O4UbIEQZU5vWep8Lu",
        name: "Blocking Shield - Passive",
        text: "Creatures within Melee range of the Gaoler have disadvantage on attack rolls against them. Creatures trapped inside the Gaoler are immune to this feature."
      },
      {
        id: "pSS0YfbAItNPdOhM63-Vh",
        name: "Lock Up - Action",
        text: "Mark a Stress to make an attack against a target within Very Close range. On a success, the target is Restrained within the Gaoler until freed with a successful Strength Roll (18). While Restrained, the target can only attack the Gaoler."
      }
    ]
  },
  {
    name: "Young Ice Dragon",
    id: 'd59483e4-1402-4646-9c20-541119bfa5ba',
    tier: "3",
    type: "Solo",
    text: "A glacier-blue dragon with four powerful limbs and frost-tinged wings.",
    motives_and_tactics: "Avalanche, defend lair, fly, freeze, defend what is mine, maul",
    difficulty: 18,
    thresholds: "21/41",
    hp: 10,
    stress: 6,
    atk: "+7",
    attack: "Bite and Claws",
    range: "Close",
    damage: "4d10 phy",
    experience: "Protect What Is Mine +3",
    feats: [
      {
        id: "PH--9kwGuBFKqJmZWPSah",
        name: "Relentless (3) - Passive",
        text: "The Dragon can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "w-sQyKFDPinnrGKJ77hPy",
        name: "Rend and Crush - Passive",
        text: "If a target damaged by the Dragon doesn’t mark an Armor Slot to reduce the damage, they must mark a Stress."
      },
      {
        id: "T6_tF3FI7h6o8ciQYG1uD",
        name: "No Hope - Passive",
        text: "When a PC rolls with Fear while within Far range of the Dragon, they lose a Hope."
      },
      {
        id: "Obkc-WxNtNQ4c9Ee70GD5",
        name: "Blizzard Breath - Action",
        text: "Spend 2 Fear to release an icy whirlwind in an area within Close range. All targets in this area must make an Agility Reaction Roll. Targets who fail take 4d6+5 magic damage and are Restrained by ice until they break free with a successful Strength Roll. Targets who succeed must mark 2 Stress or take half damage."
      },
      {
        id: "cFTjBCOpIhV6WfPAp7sbX",
        name: "Avalanche - Action",
        text: "Spend a Fear to have the Dragon unleash a huge downfall of snow and ice, covering all other creatures within Far range. All targets within this area must succeed on an Instinct Reaction Roll or be buried in snow and rocks, becoming Vulnerable until they dig themselves out from the debris. For each PC that fails the reaction roll, you gain a Fear."
      },
      {
        id: "3-nYTotG9xW6mEwyr-hXY",
        name: "Frozen Scales - Reaction",
        text: "When a creature makes a successful attack against the Dragon from within Very Close range, they must mark a Stress and become Chilled until their next rest or they clear a Stress. While they are Chilled, they have disadvantage on attack rolls."
      },
      {
        id: "970MxotmunCJdDWGhmo0F",
        name: "Momentum - Reaction",
        text: "When the Dragon makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Arch-Necromancer",
    id: '1dc35dcc-0b25-4f5b-aad0-73a1edeec97e',
    tier: "4",
    type: "Leader",
    text: "A decaying mage adorned in dark, tattered robes.",
    motives_and_tactics: "Corrupt, decay, flee to fight another day, resurrect",
    difficulty: 21,
    thresholds: "33/66",
    hp: 9,
    stress: 8,
    atk: "+6",
    attack: "Necrotic Blast",
    range: "Far",
    damage: "4d12+8 mag",
    experience: "Forbidden Knowledge +3, Wisdom of Centuries +3",
    feats: [
      {
        id: "RgVlEWjd3S88RxH4MTNup",
        name: "Dance of Death - Action",
        text: "Mark a Stress to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage, or full damage if you spend a Fear."
      },
      {
        id: "mShEVbWYLUvai2HWel8vF",
        name: "Beam of Decay - Action",
        text: "Mark 2 Stress to cause all targets within Far range to make a Strength Reaction Roll. Targets who fail take 2d20+12 magic damage and you gain a Fear. Targets who succeed take half damage. A target who marks 2 or more HP must also mark 2 Stress and becomes Vulnerable until they roll with Hope."
      },
      {
        id: "uArNVnxd1qEdvgLgv0ygK",
        name: "Open the Gates of Death - Action",
        text: "Spend a Fear to summon a Zombie Legion, which appears at Close range and immediately takes the spotlight."
      },
      {
        id: "-WXi7nVgegPHK8gH3yLRZ",
        name: "Not Today, My Dears - Reaction",
        text: "When the Necromancer has marked 7 or more of their HP, you can spend a Fear to have them teleport away to a safe location to recover. A PC who succeeds on an Instinct Roll can trace the teleportation magic to their destination."
      },
      {
        id: "4vv7HmMjah9rFeWLX3Ipo",
        name: "Your Demise is Near - Reaction",
        text: "Countdown (2d6). When the Necromancer has marked 6 or more of their HP, activate the countdown. When it triggers, deal 2d10+6 direct magic damage to a target within Close range. The Necromancer then clears a number of Stress or HP equal to the number of HP marked by the target from this attack."
      }
    ]
  },
  {
    name: "Fallen Shock Troop",
    id: '0f8597f6-10aa-42fd-8fee-922c1ab645b4',
    tier: "4",
    type: "Minion",
    text: "A cursed soul bound to the Fallen’s will.",
    motives_and_tactics: "Crush, dominate, earn relief, punish",
    difficulty: 18,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "+2",
    attack: "Cursed Axe",
    range: "Very Close",
    damage: "12 phy",
    feats: [
      {
        id: "rd3oZ-9GNd8yMBG81J2HK",
        name: "Minion (12) - Passive",
        text: "The Shock Troop is defeated when they take any damage. For every 12 damage a PC deals to the Shock Troop, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "9jnuBIrYsJnMnwaAoFywP",
        name: "Aura of Doom - Passive",
        text: "When a PC marks HP from an attack by the Shock Troop, they lose a Hope."
      },
      {
        id: "VFJxPACXWoXRvWromOqI4",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Fallen Shock Troops within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 12 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Fallen Sorcerer",
    id: 'b73a17d8-de1a-42ef-9d75-c13f981527e5',
    tier: "4",
    type: "Support",
    text: "Warped mage bound by the bargains they made in life.",
    motives_and_tactics: "Acquire, dishearten, dominate, torment",
    difficulty: 19,
    thresholds: "26/42",
    hp: 6,
    stress: 5,
    atk: "+4",
    attack: "Corrupted Staff",
    range: "Far",
    damage: "4d6+10 mag",
    experience: "Ancient Knowledge +2",
    feats: [
      {
        id: "1Tw5iy3KEruv0zsMzPHLK",
        name: "Conflagration - Action",
        text: "Spend a Fear to unleash an all-consuming firestorm and make an attack against all targets within Close range. Targets the Sorcerer succeeds against take 2d10+6 direct magic damage."
      },
      {
        id: "MpTwjRa9LwkOKFLZt1UD1",
        name: "Nightmare Tableau - Action",
        text: "Mark a Stress to trap a target within Far range in a powerful illusion of their worst fears. While trapped, the target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Instinct Roll."
      },
      {
        id: "sLO33F00vcFMDv0mrjSjt",
        name: "Slippery - Reaction",
        text: "When the Sorcerer takes damage from an attack, they can teleport up to Far range."
      },
      {
        id: "1OXjfDPOszqnIUWpWawPo",
        name: "Shackles of Guilt - Reaction",
        text: "Countdown (Loop 2d6). When the Sorcerer is in the spotlight for the first time, activate the countdown. When it triggers, all targets within Far range become Vulnerable and must mark a Stress as they relive their greatest regrets. A target can break free from their regret with a successful Presence or Strength Roll. When a PC fails to break free, they lose a Hope."
      }
    ]
  },
  {
    name: "Fallen Warlord: Realm-Breaker",
    id: 'b99a1e9d-6e13-470b-91ba-d47fc9b7ef1c',
    tier: "4",
    type: "Solo",
    text: "A fallen God, wreathed in rage and resentment, bearing millennia of experience in breaking heroes’ spirits.",
    motives_and_tactics: "Corrupt, dominate, punish, break the weak",
    difficulty: 20,
    thresholds: "36/66",
    hp: 8,
    stress: 5,
    atk: "+7",
    attack: "Barbed Whip",
    range: "Close",
    damage: "4d8+7 phy",
    experience: "Conquest +3, History +2, Intimidation +3",
    feats: [
      {
        id: "SoGrDtnN-eI5L9OhHguyz",
        name: "Relentless (2) - Passive",
        text: "The Realm-Breaker can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "UsCZXyDqubFXrSoqJsQ1b",
        name: "Firespite Plate Armor - Passive",
        text: "When the Realm-Breaker takes damage, reduce it by 2d10."
      },
      {
        id: "C8014o3zQhA7lIg3llJ8x",
        name: "Tormenting Lash - Action",
        text: "Mark a Stress to make a standard attack against all targets within Very Close range. When a target uses armor to reduce damage from this attack, they must mark 2 Armor Slots."
      },
      {
        id: "9PUnObYZLesoKOXH5wcuW",
        name: "All-Consuming Rage - Reaction",
        text: "Countdown (Decreasing 8). When the Realm-Breaker is in the spotlight for the first time, activate the countdown. When it triggers, create a torrent of incarnate rage that rends flesh from bone. All targets within Far range must make a Presence Reaction Roll. Targets who fail take 2d6+10 direct magic damage. Targets who succeed take half damage. For each HP marked from this damage, summon a Fallen Shock Troop within Very Close range of the target who marked that HP. If the countdown ever decreases its maximum value to 0, the Realm-Breaker marks their remaining HP and all targets within Far range must mark all remaining HP and make a death move."
      },
      {
        id: "-3NQk0gyEXnX_YC64po9G",
        name: "Doombringer - Reaction",
        text: "When a target marks HP from an attack by the Realm-Breaker, all PCs within Far range of the target must lose a Hope."
      },
      {
        id: "TKoAbkNbm8qKdf6adD-VD",
        name: "I Have Never Known Defeat (Phase Change) - Reaction",
        text: "When the Realm-Breaker marks their last HP, replace them with the Undefeated Champion and immediately spotlight them."
      }
    ]
  },
  {
    name: "Fallen Warlord: Undefeated Champion",
    id: '9b7486d2-6eec-43e4-a8c4-17e6c512fa77',
    tier: "4",
    type: "Solo",
    text: "That which only the most feared have a chance to fear.",
    motives_and_tactics: "Dispatch merciless death, punish the defiant, secure victory at any cost",
    difficulty: 18,
    thresholds: "35/58",
    hp: 11,
    stress: 5,
    atk: "+8",
    attack: "Heart-Shattering Sword",
    range: "Very Close",
    damage: "4d12+13 phy",
    experience: "Conquest +3, History +2, Intimidation +3",
    feats: [
      {
        id: "I3ZalAlz_5Tf58-ZQCAxg",
        name: "Relentless (3) - Passive",
        text: "The Undefeated Champion can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "iP0qlOSLPkf3HW5tYQ6Gz",
        name: "Faltering Armor - Passive",
        text: "When the Undefeated Champion takes damage, reduce it by 1d10."
      },
      {
        id: "5o_azAWv78sHTHhXSBDCA",
        name: "Shattering Strike - Action",
        text: "Mark a Stress to make a standard attack against all targets within Very Close range. PCs the Champion succeeds against lose a number of Hope equal to the HP they marked from this attack."
      },
      {
        id: "bMKvqcCtpKOSW2gWIJJFu",
        name: "Endless Legions - Action",
        text: "Spend a Fear to summon a number of Fallen Shock Troops equal to twice the number of PCs. The Shock Troops appear at Far range."
      },
      {
        id: "mR_F4jUbpVcDuS1FlpnC0",
        name: "Circle of Defilement - Reaction",
        text: "Countdown (1d8). When the Undefeated Champion is in the spotlight for the first time, activate the countdown. When it triggers, activate a magical circle covering an area within Far range of the Champion. A target within that area is Vulnerable until they leave the circle. The circle can be removed by dealing Severe damage to the Undefeated Champion."
      },
      {
        id: "eUPtQ7iQf0zbjP7R83NvX",
        name: "Doombringer - Reaction",
        text: "When the Undefeated Champion makes a successful attack against a PC, you gain a Fear."
      },
      {
        id: "M5HQVe6DNUixWjEYpZXbc",
        name: "Doombringer - Reaction",
        text: "When a target marks HP from an attack by the Undefeated Champion, all PCs within Far range of the target lose a Hope."
      }
    ]
  },
  {
    name: "Hallowed Archer",
    id: '53a62c65-f050-4aec-a12d-a078330b402a',
    tier: "4",
    type: "Ranged",
    text: "Spirit soldiers with sanctified bows.",
    motives_and_tactics: "Focus fire, obey, retribution, volley",
    difficulty: 19,
    thresholds: "25/45",
    hp: 3,
    stress: 2,
    atk: "+4",
    attack: "Sanctified Longbow",
    range: "Far",
    damage: "4d8+8 phy",
    feats: [
      {
        id: "MUbAE-wpVDv7oStOmPcZ6",
        name: "Punish the Guilty - Passive",
        text: "The Archer deals double damage to targets marked Guilty by a High Seraph."
      },
      {
        id: "-YMjJTbLgpLEggh3dIKpz",
        name: "Divine Volley - Action",
        text: "Mark a Stress to make a standard attack against up to three targets."
      }
    ]
  },
  {
    name: "Hallowed Soldier",
    id: '6d7bb4aa-9a8f-4c0f-bd2e-8786d582d8d3',
    tier: "4",
    type: "Minion",
    text: "Souls of the faithful, lifted up with divine weaponry.",
    motives_and_tactics: "Obey, outmaneuver, punish, swarm",
    difficulty: 18,
    thresholds: "None",
    hp: 1,
    stress: 2,
    atk: "+2",
    attack: "Sword and Shield",
    range: "Melee",
    damage: "10 phy",
    feats: [
      {
        id: "XcFG4_XmIHs-ArgWDMZNp",
        name: "Minion (13) - Passive",
        text: "The Soldier is defeated when they take any damage. For every 13 damage a PC deals to the Soldier, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "nt20j-XdY_GKGR_FcKXGT",
        name: "Divine Flight - Passive",
        text: "While the Soldier is flying, spend a Fear to move up to Far range instead of Close range before taking an action."
      },
      {
        id: "N1dT_MD8FrdmjmENH77r0",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Hallowed Soldiers within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 10 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "High Seraph",
    id: '50aad591-4fa1-4e0c-93a4-ef70138dce5f',
    tier: "4",
    type: "Leader",
    text: "A divine champion, head of a hallowed host of warriors who enforce their god’s will.",
    motives_and_tactics: "Enforce dogma, fly, pronounce judgment, smite",
    difficulty: 20,
    thresholds: "37/70",
    hp: 7,
    stress: 5,
    atk: "+8",
    attack: "Holy Sword",
    range: "Very Close",
    damage: "4d10+10 phy",
    experience: "Divine Knowledge +3",
    feats: [
      {
        id: "-laifwQgwK-lVq4LvNamq",
        name: "Relentless (2) - Passive",
        text: "The Seraph can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "Vf_efLAaA4WDBvGrakyKX",
        name: "Divine Flight - Passive",
        text: "While the Seraph is flying, spend a Fear to move up to Far range instead of Close range before taking an action."
      },
      {
        id: "UrkI1LrxbTEuGXHMei141",
        name: "Judgment - Action",
        text: "Spend a Fear to make a target Guilty in the eyes of the Seraph’s god until the Seraph is defeated. While Guilty, the target doesn’t gain Hope on a result with Hope. When the Seraph succeeds on a standard attack against a Guilty target, they deal Severe damage instead of their standard damage. The Seraph can only mark one target at a time."
      },
      {
        id: "D5a3ME-00HryH_BFg1UKY",
        name: "God Rays - Action",
        text: "Mark a Stress to reflect a sliver of divinity as a searing beam of light that hits up to twenty targets within Very Far range. Targets must make a Presence Reaction Roll, with disadvantage if they are marked Guilty. Targets who fail take 4d6+12 magic damage. Targets who succeed take half damage."
      },
      {
        id: "lO2bPdomQmE0Sv6ExiKSX",
        name: "We Are One - Action",
        text: "Once per scene, spend a Fear to spotlight all other adversaries within Far range. Attacks they make while spotlighted in this way deal half damage."
      }
    ]
  },
  {
    name: "Kraken",
    id: '1861ab1b-90e8-4e28-9945-73b53b3f2b71',
    tier: "4",
    type: "Solo",
    text: "A legendary beast of the sea, bigger than the largest galleon, with sucker-laden tentacles and a terrifying maw.",
    motives_and_tactics: "Consume, crush, drown, grapple",
    difficulty: 20,
    thresholds: "35/70",
    hp: 11,
    stress: 8,
    atk: "+7",
    attack: "Tentacles",
    range: "Close",
    damage: "4d12+10 phy",
    experience: "Swimming +3",
    feats: [
      {
        id: "nMVi1lOW8XZ-388KFD1hc",
        name: "Relentless (3) - Passive",
        text: "The Kraken can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "xJjCFfR34qlh2pPq8loQ_",
        name: "Many Tentacles - Passive",
        text: "While the Kraken has 7 or fewer marked HP, they can make their standard attack against two targets within range."
      },
      {
        id: "4gqAHan6XP8U6ZIu_2xCj",
        name: "Grapple and Drown - Action",
        text: "Make an attack roll against a target within Close range. On a success, mark a Stress to grab them with a tentacle and drag them beneath the water. The target is Restrained and Vulnerable until they break free with a successful Strength Roll or the Kraken takes Major or greater damage. While Restrained and Vulnerable in this way, a target must mark a Stress when they make an action roll."
      },
      {
        id: "_wZXWujvncgx34zSAZvAI",
        name: "Boiling Blast - Action",
        text: "Spend a Fear to spew a line of boiling water at any number of targets in a line up to Far range. All targets must succeed on an Agility Reaction Roll or take 4d6+9 physical damage. If a target marks an Armor Slot to reduce the damage, they must also mark a Stress."
      },
      {
        id: "F_vb6H91rWunT0eEH8GnP",
        name: "Momentum - Reaction",
        text: "When the Kraken makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    name: "Oracle of Doom",
    id: '0233286c-9921-44e9-8d6c-4dd2f041287b',
    tier: "4",
    type: "Solo",
    text: "A towering immortal and incarnation of fate, cursed to only see bad outcomes.",
    motives_and_tactics: "Change environment, condemn, dishearten, toss aside",
    difficulty: 20,
    thresholds: "38/68",
    hp: 11,
    stress: 10,
    atk: "+8",
    attack: "Psychic Attack",
    range: "Far",
    damage: "4d8+9 mag",
    experience: "Boundless Knowledge +4",
    feats: [
      {
        id: "Gr9fL3J-nvB-fIhlaXUG4",
        name: "Terrifying - Passive",
        text: "When the Oracle makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        id: "4vbxiS4YEiMt8ezoarCdP",
        name: "Walls Closing In - Passive",
        text: "When a creature rolls a failure while within Very Far range of the Oracle, they must mark a Stress."
      },
      {
        id: "HIzp-FVEoO_W4BKgPwKyW",
        name: "Pronounce Fate - Action",
        text: "Spend a Fear to present a target within Far range with a vision of their personal nightmare. The target must make a Knowledge Reaction Roll. On a failure, they lose all Hope and take 2d10+4 direct magic damage. On a success, they take half damage and lose a Hope."
      },
      {
        id: "oG_C3iV7y6dBCdG9YyZkG",
        name: "Summon Tormentors - Action",
        text: "Once per day, spend 2 Fear to summon 2d4 Tier 2 or below Minions relevant to one of the PC’s personal nightmares. They appear at Close range relative to that PC."
      },
      {
        id: "SsT3yiY9oXlFF318OC-9g",
        name: "Ominous Knowledge - Reaction",
        text: "When the Oracle sees a mortal creature, they instantly know one of their personal nightmares."
      },
      {
        id: "gHNbFSBmVnAw1Z9paP_Z2",
        name: "Vengeful Fate - Reaction",
        text: "When the Oracle marks HP from an attack within Very Close range, you can mark a Stress to knock the attacker back to Far range and deal 2d10+4 physical damage."
      }
    ]
  },
  {
    name: "Outer Realms Abomination",
    id: '8a5047f4-6fd3-497f-8336-499d28705646',
    tier: "4",
    type: "Bruiser",
    text: "A chaotic mockery of life, constantly in flux.",
    motives_and_tactics: "Confuse, demolish, devour, undermine",
    difficulty: 19,
    thresholds: "35/71",
    hp: 7,
    stress: 5,
    atk: "+2d4",
    attack: "Massive Pseudopod",
    range: "Very Close",
    damage: "4d6+13 mag",
    feats: [
      {
        id: "jB5XqY3-h53UkfVkBpZ5c",
        name: "Chaotic Form - Passive",
        text: "When the Abomination attacks, roll 2d4 and use the result as their attack modifier."
      },
      {
        id: "L6B4EcySIjKEo8XbPTjed",
        name: "Disorienting Presence - Passive",
        text: "When a target takes damage from the Abomination, they must make an Instinct Reaction Roll. On a failure, they gain disadvantage on their next action roll and you gain a Fear."
      },
      {
        id: "UuCoqBGfy5YFS4L1KaL3B",
        name: "Reality Quake - Action",
        text: "Spend a Fear to rattle the edges of reality within Far range of the Abomination. All targets within that area must succeed on a Knowledge Reaction Roll or become Unstuck from reality until the end of the scene. When an Unstuck target spends Hope or marks Armor Slots, HP, or Stress, they must double the amount spent or marked."
      },
      {
        id: "GsgC_uXvQJaDMAzGlzB1J",
        name: "Fungal Form - Reaction",
        text: "When the Abomination takes damage, reduce it by 1d20. If the Abomination marks 1 or fewer Hit Points from a successful attack against them, you gain a Fear."
      }
    ]
  },
  {
    name: "Outer Realms Corrupter",
    id: '4e4c7d2c-50db-4a40-98ef-4e107b4851e9',
    tier: "4",
    type: "Support",
    text: "A shifting, formless mass seemingly made of chromatic light.",
    motives_and_tactics: "Confuse, distract, overwhelm",
    difficulty: 19,
    thresholds: "27/47",
    hp: 4,
    stress: 3,
    atk: "+7",
    attack: "Corroding Pseudopod",
    range: "Very Close",
    damage: "4d8+5 mag",
    feats: [
      {
        id: "83kdm_vXgTkJ2mSAGyI9H",
        name: "Will-Shattering Touch - Passive",
        text: "When a PC takes damage from the Corrupter, they lose a Hope."
      },
      {
        id: "Y52PVeUh7g08Ab8QBqi1j",
        name: "Disgorge Reality Flotsam - Action",
        text: "Mark a Stress to spew partially digested portions of consumed realities at all targets within Close range. Targets must succeed on a Knowledge Reaction Roll or mark 2 Stress."
      }
    ]
  },
  {
    name: "Outer Realms Thrall",
    id: '5e9d60c7-a5b7-427d-bafd-4de74b3da3d7',
    tier: "4",
    type: "Minion",
    text: "A vaguely humanoid form stripped of memory and identity.",
    motives_and_tactics: "Destroy, disgust, disorient, intimidate",
    difficulty: 17,
    thresholds: "None",
    hp: 1,
    stress: 1,
    atk: "+3",
    attack: "Claws and Teeth",
    range: "Very Close",
    damage: "11 phy",
    feats: [
      {
        id: "kWYz8y-d7J_joAvmPQv40",
        name: "Minion (13) - Passive",
        text: "The Thrall is defeated when they take any damage. For every 13 damage a PC deals to the Thrall, defeat an additional Minion within range the attack would succeed against."
      },
      {
        id: "oF6t9Iu-uNPFZfZjk_jS0",
        name: "Group Attack - Action",
        text: "Spend a Fear to choose a target and spotlight all Outer Realm Thralls within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 11 physical damage each. Combine this damage."
      }
    ]
  },
  {
    name: "Volcanic Dragon: Ashen Tyrant",
    id: 'd8e6e728-90bc-494e-8936-e8ee4d48c14b',
    tier: "4",
    type: "Solo",
    text: "A legendary, lava-hardened dragon. No enemy has ever had the insolence to wound the dragon so.",
    motives_and_tactics: "Choke, fly, intimidate, kill or be killed",
    difficulty: 18,
    thresholds: "29/55",
    hp: 8,
    stress: 5,
    atk: "+10",
    attack: "Claws and Teeth",
    range: "Close",
    damage: "4d12+15 phy",
    experience: "Hunt from Above +5",
    feats: [
      {
        id: "6MFSNoUdMLedb9vBOtuZo",
        name: "Relentless (4) - Passive",
        text: "The Ashen Tyrant can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "0tV0qdXTlFY9hmwcOtluA",
        name: "Cornered - Passive",
        text: "Mark a Stress instead of spending a Fear to spotlight the Ashen Tyrant."
      },
      {
        id: "cj-XoxvVw6ypzzgLyDy3Q",
        name: "Ashes to Ashes - Passive",
        text: "When a PC rolls a failure while within Close range of the Ashen Tyrant, they lose a Hope and you gain a Fear. If the PC can’t lose a Hope, they must mark a HP."
      },
      {
        id: "E1O0VU6OoDto6X9lDDOJH",
        name: "Desperate Rampage - Action",
        text: "Mark 3 Stress to make an attack against all targets within Close range. Targets the Ashen Tyrant succeeds against take 2d20+2 physical damage, are knocked back to Close range of where they were, and must mark a Stress."
      },
      {
        id: "7L0K9t3b3dq_LSgjelggS",
        name: "Ashen Cloud - Action",
        text: "Spend a Fear to smash the ground beneath an adversary within Far range. While within the ash cloud, a target has disadvantage on action rolls. The ash cloud clears the next time an adversary is spotlighted."
      },
      {
        id: "VtP1gdm_SFgaxbk4P-7Dx",
        name: "Apocalyptic Thrashing - Action",
        text: "Countdown (1d12). Spend a Fear to activate it. It ticks down when a PC rolls with Fear. When it reaches 0, the Ashen Tyrant thrashes about, causing environmental damage (such as an earthquake, avalanche, or collapsing walls). All targets within Far range must make a Strength Reaction Roll. Targets who fail take 2d10+10 physical damage and are Restrained by the rubble until they break free with a successful Strength Roll. Targets who succeed take half damage. If the Ashen Tyrant is defeated while this countdown is active, trigger the countdown immediately as the destruction caused by their death throes."
      }
    ]
  },
  {
    name: "Volcanic Dragon: Molten Scourge",
    id: '65624716-f9bc-4370-b251-a7026868ce97',
    tier: "4",
    type: "Solo",
    text: "Engaged by their wounds, the dragon bursts into molten lava.",
    motives_and_tactics: "Douse with lava, incinerate, repel invaders, respawn",
    difficulty: 20,
    thresholds: "30/58",
    hp: 7,
    stress: 5,
    atk: "+9",
    attack: "Lava-Coated Claws",
    range: "Close",
    damage: "4d12+4 phy",
    experience: "Hunt from Above +5",
    feats: [
      {
        id: "GMCSUozje_6jK_e9Yi7EZ",
        name: "Relentless (3) - Passive",
        text: "Can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        id: "kwwQkUab4IOSj5rMlLYKE",
        name: "Cracked Scales - Passive",
        text: "When the Molten Scourge takes damage, roll a number of d6s equal to HP marked. For each result of 4 or higher, you gain a Fear."
      },
      {
        id: "R19Oj_r_xCZCS_a0nox0a",
        name: "Shattering Might - Action",
        text: "Mark a Stress to make an attack against a target within Very Close range. On a success, target takes 4d8+14 physical damage, loses a Hope, and is knocked back to Close range. The Scourge clears a Stress."
      },
      {
        id: "aqyzNMxrDSVOMax33g4-G",
        name: "Eruption - Action",
        text: "Spend a Fear to erupt lava from beneath the Scourge’s scales, filling area within Very Close range with lava. All targets must make Agility Reaction Roll or take 4d6+6 physical damage and be knocked back to Close range. The area remains lava (6 HP damage on entry or action)."
      },
      {
        id: "pODOFRD7mNEpjwzjYGqXH",
        name: "Volcanic Breath - Reaction",
        text: "When the Scourge takes Major damage, roll d10. On 8+, erupt lava in Very Close range: Agility Reaction Roll or take 2d10+4 physical damage, mark 1d4 Stress, and are Vulnerable until clearing a Stress; success = half damage + mark a Stress.;Lava Splash - Reaction;When the Scourge takes Severe damage from attack within Very Close, molten blood deals 2d10+4 direct physical damage to attacker.;Ashen Vengeance (Phase Change) - Reaction;When the Scourge marks last HP, replace with Ashen Tyrant and immediately spotlight."
      }
    ]
  },
  {
    name: "Volcanic Dragon: Obsidian Predator",
    id: 'b6dcd401-67a2-4b7b-9f45-da17ee4e8b8f',
    tier: "4",
    type: "Solo",
    text: "A massive winged creature with obsidian scales and impossibly sharp claws.",
    motives_and_tactics: "Defend lair, dive-bomb, fly, hunt, intimidate",
    difficulty: 19,
    thresholds: "33/65",
    hp: 6,
    stress: 5,
    atk: "+8",
    attack: "Obsidian Claws",
    range: "Close",
    damage: "4d10+4 phy",
    experience: "Hunt from Above +5",
    feats: [
      {
        id: "NH6VnxiYShQFAlAcNlYEr",
        name: "Relentless (2) - Passive",
        text: "Can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight."
      },
      {
        id: "mu8zSWRmhmY3vYBtOum-b",
        name: "Flying - Passive",
        text: "While flying, gains +3 Difficulty."
      },
      {
        id: "XLGghQkkWqM0qzKprv8Uk",
        name: "Obsidian Scales - Passive",
        text: "Resistant to physical damage."
      },
      {
        id: "D8U4C5X2-vHAjQd3J3Q1l",
        name: "Obsidian Tail - Action",
        text: "Mark a Stress to make attack against all targets within Close range. Success: 4d6+4 physical damage, knocked to Far range and Vulnerable until next roll with Hope."
      },
      {
        id: "uhuvrJ7ZL-3Tspein1-7y",
        name: "Dive-Bomb - Action",
        text: "If flying, mark a Stress to choose point within Far range, move there, attack all targets within Very Close range; on success, 2d10+6 physical, mark a Stress, lose a Hope."
      },
      {
        id: "MC-_OydGxOF4anaiwxltP",
        name: "Erupting Rage (Phase Change) - Reaction",
        text: "When marks last HP, replace with Molten Scourge and immediately spotlight."
      }
    ]
  },
  {
    name: "Perfected Zombie",
    id: '0210cc03-0303-4041-8874-1091762e2d92',
    tier: "4",
    type: "Bruiser",
    text: "A towering, muscular zombie with magically infused strength and skill.",
    motives_and_tactics: "Consume, hound, maim, terrify",
    difficulty: 20,
    thresholds: "40/70",
    hp: 9,
    stress: 4,
    atk: "+4",
    attack: "Greataxe",
    range: "Very Close",
    damage: "4d12+15 phy",
    feats: [
      {
        id: "sFZQ9xq6s4344VudSQTN8",
        name: "Terrifying - Passive",
        text: "On successful attack, all PCs in Far range lose Hope and you gain Fear."
      },
      {
        id: "bV9r2hYR9OBsl1av3c0Ku",
        name: "Fearsome Presence - Passive",
        text: "PCs can’t spend Hope to use features against the Zombie."
      },
      {
        id: "nH927s3dtID39OFzjacVQ",
        name: "Perfect Strike - Action",
        text: "Mark a Stress to attack all targets within Very Close range; on success, targets are Vulnerable until next rest."
      },
      {
        id: "xB8HrR94ZjUW50gWaUL_K",
        name: "Skilled Opportunist - Reaction",
        text: "When another adversary deals damage to target within Very Close range of Zombie, spend a Fear to add Zombie's standard attack damage to the damage roll."
      }
    ]
  },
  {
    name: "Zombie Legion",
    id: 'b9d03f0b-cef6-4fde-96eb-7d86b505026d',
    tier: "4",
    type: "Horde (3/HP)",
    text: "A large pack of undead, still powerful despite their rotting flesh.",
    motives_and_tactics: "Consume brain, shred flesh, surround",
    difficulty: 17,
    thresholds: "25/45",
    hp: 8,
    stress: 5,
    atk: "+2",
    attack: "Tentacles",
    range: "Close",
    damage: "4d6+10 phy",
    feats: [
      {
        id: "0loDn2EyzWnfVIbiygD1P",
        name: "Horde (2d6+5) - Passive",
        text: "When Legion has half or more HP marked, standard attack deals 2d6+5 physical damage instead."
      },
      {
        id: "r6Ew1q6EdkJNfkuRWqYmE",
        name: "Unyielding - Passive",
        text: "Legion has resistance to physical damage."
      },
      {
        id: "Zs_QlRmretIvQO1NsshE6",
        name: "Relentless (2) - Passive",
        text: "Legion can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight."
      },
      {
        id: "xJuajrHc8sWjqDN4zf6C6",
        name: "Overwhelm - Reaction",
        text: "When Legion takes Minor damage from attack within Melee, mark a Stress to make standard attack with advantage against the attacker."
      }
    ]
  }
]

export const BESTIARY_BY_NAME: Map<string, Adversary> = new Map(
    BESTIARY.map((monster) => {
        return [monster.name, monster];
    })
);