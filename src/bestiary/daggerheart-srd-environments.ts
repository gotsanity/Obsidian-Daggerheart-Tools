import type { Environment } from "src/types/environment";

export const ENVIRONMENTS: Environment[] = [
  {
    id: "K1i4BEpM6iu6iPUAMCObU",
    name: "Abandoned Grove",
    tier: 1,
    environmentType: "Exploration",
    text: "A former druidic grove lying fallow and fully reclaimed by nature.",
    impulses: "Draw in the curious, echo the past",
    difficulty: 11,
    potential_adversaries: "Beasts (Bear, Dire Wolf, Glass Snake), Grove Guardians (Minor Treant, Sylvan Soldier, Young Dryad)",
    feats: [
      {
        id: "_elbmZqMsk3jm0KSd7wbQ",
        name: "Overgrown Battlefield - Passive",
        text: "There has been a battle here. A PC can make an Instinct Roll to identify evidence of that fight. On a success with Hope, learn all three pieces of information below. On a success with Fear, learn two. On a failure, a PC can mark 3 Stress to learn one and gain advantage on the next action roll to investigate this environment. A PC with an appropriate background or Experience can learn an additional detail and ask a follow-up question about the scene and get a truthful (if not always complete) answer.\n\n  - Traces of a battle (broken weapons and branches, gouges in the ground) litter the ground.\n  - A moss-covered tree trunk is actually the corpse of a treant.\n  - Still-standing trees are twisted in strange ways, as if by powerful magic."
      },
      {
        id: "gXNb--NwKt3ir9rmw5qVQ",
        name: "Barbed Vines - Action",
        text: "Pick a point within the grove. All targets within Very Close range of that point must succeed on an Agility Reaction Roll or take 1d8+3 physical damage and become Restrained by barbed vines. Restrained lasts until they're freed with a successful Finesse or Strength roll or by dealing at least 6 damage to the vines."
      },
      {
        id: "4ehymsQgExgeoV85aPxwU",
        name: "You Are Not Welcome Here - Action",
        text: "A Young Dryad, two Sylvan Soldiers, and a number of Minor Treants equal to the number of PCs appear to confront the party for their intrusion."
      },
      {
        id: "cPs2WxHA9Odhl5gkiwIrT",
        name: "Defiler - Action",
        text: "Spend a Fear to summon a Minor Chaos Adversary drawn to the echoes of violence and discord. They appear within Far range of a chosen PC and immediately take the spotlight."
      }
    ]
  },
  {
    id: "ypPm6Hc3ho6QOmKigTb0v",
    name: "Ambushed",
    tier: 1,
    environmentType: "Event",
    text: "An ambush is set to catch an unsuspecting party off-guard.",
    impulses: "Overwhelm, scatter, surround",
    difficulty: "Special (see 'RelativeStrength')",
    potential_adversaries: "Any",
    feats: [
      {
        id: "XZOs91XjB_OUVUhsUmykO",
        name: "Relative Strength - Passive",
        text: "The Difficulty of this environment equals that of the adversary with the highest Difficulty."
      },
      {
        id: "5GXoMSasyeNLcmFDkCfHr",
        name: "Surprise! - Action",
        text: "The ambushers reveal themselves to the party, you gain 2 Fear, and the spotlight immediately shifts to one of the ambushing adversaries."
      }
    ]
  },
  {
    id: "unYRa7UBh_TSH-QYukYRT",
    name: "Ambushers",
    tier: 1,
    environmentType: "Event",
    text: "An ambush is set by the PCs to catch unsuspecting adversaries off-guard.",
    impulses: "Escape, group up, protect the most vulnerable",
    difficulty: "Special (see 'RelativeStrength')",
    potential_adversaries: "Any",
    feats: [
      {
        id: "zwrpDr1-sX5nePTWbj8WR",
        name: "Relative Strength - Passive",
        text: "The Difficulty of this environment equals that of the adversary with the highest Difficulty."
      },
      {
        id: "siOdOL4awwGZERZq7ASzk",
        name: "Where Did They Come From? - Reaction",
        text: "When a PC starts the ambush on unsuspecting adversaries, you lose 2 Fear and the first attack roll a PC makes has advantage."
      }
    ]
  },
  {
    id: "uaxx3ZOoVU_1MSxWvXXv5",
    name: "Bustling Marketplace",
    tier: 1,
    environmentType: "Social",
    text: "The economic heart of the settlement, with local artisans, traveling merchants, and patrons across social classes.",
    impulses: "Buy low, sell high, tempt and tantalize with wares from near and far",
    difficulty: 10,
    potential_adversaries: "Guards (Bladed Guard, Head Guard), Masked Thief, Merchant",
    feats: [
      {
        id: "P2pl27wyOO6wxtq1OWyJU",
        name: "Tip the Scales - Passive",
        text: "PCs can gain advantage on a Presence Roll by offering a handful of gold as part of the interaction.\n\n  *Will any coin be accepted, or only local currency? How overt are the PCs in offering this bribe?*"
      },
      {
        id: "4CABO9TZCJRLNiHSxEGJL",
        name: "Unexpected Find - Action",
        text: "Reveal to the PCs that one of the merchants has something they want or need, such as food from their home, a rare book, magical components, a dubious treasure map, or a magical key.\n\n  *What cost beyond gold will the merchant ask for in exchange for this rarity?*"
      },
      {
        id: "m1tRIMlJXNs1gTo-YwjEj",
        name: "Sticky Fingers - Action",
        text: "A thief tries to steal something from a PC. The PC must succeed on an Instinct Roll to notice the thief or lose an item of the GM's choice as the thief escapes to a Close distance. To retrieve the stolen item, the PCs must complete a Progress Countdown (6) to chase down the thief before the thief completes a Consequence Countdown (4) and escapes to their hideout.\n\n  *What drove this person to pickpocketing? Where is the thief's hideout and how has it avoided notice?*"
      },
      {
        id: "FOylR05ualTHKFQZGSpA7",
        name: "Crowd Control - Reaction",
        text: "When one of the PCs splits from the group, the crowds shift and cut them off from the party.\n\n  *Where does the crowd's movement carry them? How do they feel about being alone but surrounded?*"
      }
    ]
  },
  {
    id: "S9Od0BFMHL__agdK57SR-",
    name: "Cliffside Ascent",
    tier: 1,
    environmentType: "Traversal",
    text: "A steep, rocky cliffside tall enough to make traversal dangerous.",
    impulses: "Cast the unwary down to a rocky doom, draw people in with promise of what lies at the top",
    difficulty: 12,
    potential_adversaries: "Construct, Deeproot Defender, Giant Scorpion, Glass Snake",
    feats: [
      {
        id: "tcabZRs4BoFuQonu-Ey7w",
        name: "The Climb - Passive",
        text: "Climbing up the cliffside uses a Progress Countdown (12). It ticks down according to the following criteria when the PCs make an action roll to climb:\n\n  - Critical Success: Tick down 3\n  - Success with Hope: Tick down 2\n  - Success with Fear: Tick down 1\n  - Failure with Hope: No advancement\n  - Failure with Fear: Tick up 1\n\n  When the countdown triggers, the party has made it to the top of the cliff.\n\n  *What strange formations are the stones arranged in? What ominous warnings did previous adventurers leave?*"
      },
      {
        id: "Rrj-XUe5eIWD0sP0I7CXN",
        name: "Pitons Left Behind - Passive",
        text: "Previous climbers left behind large metal rods that climbers can use to aid their ascent. If a PC using the pitons fails an action roll to climb, they can mark a Stress instead of ticking the countdown up.\n\n  *What do the shape and material of these pitons tell you about the previous climbers? How far apart are they from one another?*"
      },
      {
        id: "rwYImHBr2MXDdvHRw-xcB",
        name: "Fall - Action",
        text: "Spend a Fear to have a PC's handhold fail, plummeting them toward the ground. If they aren't saved on the next action, they must make a roll; tick up the countdown by 1, and they take 1d12 physical damage if the countdown is between 8 and 12, 2d12 between 4 and 7, and 3d12 at 3 or lower.\n\n  *How can you tell how many others have fallen here before? What lives in these walls that might try to scare adventurers into falling for an easy meal?*"
      }
    ]
  },
  {
    id: "HiNIC_tDcljHSgAjvk4wZ",
    name: "Local Tavern",
    tier: 1,
    environmentType: "Social",
    text: "A lively tavern that serves as the social hub for its town.",
    impulses: "Provide opportunities for adventurers, nurture community",
    difficulty: 10,
    potential_adversaries: "Guards (Bladed Guard, Head Guard), Mercenaries (Harrier, Sellsword, Spellblade, Weaponmaster), Merchant",
    feats: [
      {
        id: "gksVq_nOnJ_L7VhGUu4_A",
        name: "What's the Talk of the Town? - Passive",
        text: "A PC can ask the bartender, staff, or patrons about local events, rumors, and potential work with a Presence Roll. On a success, they can pick two of the below details to learn—or three if they critically succeed. On a failure, they can pick one and mark a Stress as the local carries on about something irrelevant.\n\n  - A fascinating rumor with a connection to a PC's background\n  - A promising job for the party involving a nearby threat or situation\n  - Local folklore that relates to something they've seen\n  - Town gossip that hints at a community problem\n\n  *Who has what kind of information? What gossip do the locals start spreading about the PCs?*"
      },
      {
        id: "fjG3789K-BdqPvQe6B5y3",
        name: "Sing for Your Supper - Passive",
        text: "A PC can perform one time for the guests by making a Presence Roll. On a success, they earn 1d4 handfuls of gold (2d4 if they critically succeed). On a failure, they mark a Stress.\n\n  *What piece do you perform? What does that piece mean to you? When's the last time you performed it for a crowd?*"
      },
      {
        id: "rayPJsk7tO7TdHbWEB07n",
        name: "Mysterious Stranger - Action",
        text: "Reveal a stranger concealing their identity, lurking in a shaded booth.\n\n  *What do they want? What's their impression of the PCs? What mannerisms or accessories do they have?*"
      },
      {
        id: "p-qs9Hsc5lm6GOFRjkvff",
        name: "Someone Comes to Town - Action",
        text: "Introduce a significant NPC who wants to hire the party for something or who relates to a PC's background.\n\n  *Did they know the PCs were here? What do they want in this town?*"
      },
      {
        id: "GeYidGrcnp-78yVGxFZBd",
        name: "Bar Fight - Action",
        text: "Spend a Fear to have a bar fight erupt in the tavern. When a PC tries to move through the tavern while the fight persists, they must succeed on an Agility or Presence Roll or take 1d6+2 physical damage from a wild swing or thrown object. A PC can try to activate this feature by succeeding on an action roll that would provoke tavern patrons.\n\n  *Who started the fight? What will it take to stop it?*"
      }
    ]
  },
  {
    id: "hpM6TzaRxUJfJGeWfMhmP",
    name: "Outpost Town",
    tier: 1,
    environmentType: "Social",
    text: "A small town on the outskirts of a nation or region, close to a dungeon, tombs, or other adventuring destinations.",
    impulses: "Drive the desperate to certain doom, profit off of ragged hope",
    difficulty: 12,
    potential_adversaries: "Jagged Knife Bandits (Hexer, Kneebreaker, Lackey, Lieutenant, Shadow, Sniper), Masked Thief, Merchant",
    feats: [
      {
        id: "pG9V4BlVTRxfk_2uVhpQZ",
        name: "Rumors Abound - Passive",
        text: "Gossip is the fastest-traveling currency in the realm. A PC can inquire about major events by making a Presence Roll. What they learn depends on the outcome of their roll, based on the following criteria:\n\n  - Critical Success: Learn about two major events. The PC can ask one follow-up question about one of the rumors and get a truthful (if not always complete) answer.\n  - Success with Hope: Learn about two events, at least one of which is relevant to the character's background.\n  - Success with Fear: Learn an alarming rumor related to the character's background.\n  - Any Failure: The locals respond poorly to their inquiries. The PC must mark a Stress to learn one relevant rumor.\n\n  *What news do the PCs hear that they could pass along to curious travelers? What do the locals think about these events?*"
      },
      {
        id: "pKzKPtlJML84ihtVkQNmS",
        name: "Society of the Broken Compass - Passive",
        text: "An adventuring society maintains a chapterhouse here, where heroes meet to exchange news and rumors, drink to their imagined successes, and scheme to undermine their rivals.\n\n  *What boasts do the adventurers here make, and which do you think are true?*"
      },
      {
        id: "sbCxOakCmv9-DDbe7mizk",
        name: "Rival Party - Passive",
        text: "Another adventuring party is here, seeking the same treasure or leads as the PCs.\n\n  *Which PC has a connection to one of the rival party members? Do they approach the PC first or do they wait for the PC to move?*"
      },
      {
        id: "4BI1x_1oDezf__Ip5c7H8",
        name: "It'd Be a Shame If Something Happened to Your Store - Action",
        text: "The PCs witness as agents of a local crime boss shake down a general goods store.\n\n  *What trouble does it cause if the PCs intervene?*"
      },
      {
        id: "AJIMmWhs1mQnus8INKXut",
        name: "Wrong Place, Wrong Time - Reaction",
        text: "At night, or when the party is alone in a back alley, you can spend a Fear to introduce a group of thieves who try to rob them. The thieves appear at Close range of a chosen PC and include a Jagged Knife Kneebreaker, as many Lackeys as there are PCs, and a Lieutenant. For a larger party, add 2 Hexer or Sniper.\n\n  *What details show the party that these people are desperate former adventurers?*"
      }
    ]
  },
  {
    id: "BwYqDb3yfiBoAplif_2cC",
    name: "Raging River",
    tier: 1,
    environmentType: "Traversal",
    text: "A swift-moving river without a bridge crossing, deep enough to sweep away most people.",
    impulses: "Bar crossing, carry away the unready, divide the land",
    difficulty: 10,
    potential_adversaries: "Beasts (Bear, Glass Snake), Jagged Knife Bandits (Hexer, Kneebreaker, Lackey, Lieutenant, Shadow, Sniper)",
    feats: [
      {
        id: "b4a8p3nurNOi54zA98467",
        name: "Dangerous Crossing - Passive",
        text: "Crossing the river requires the party to complete a Progress Countdown (4). A PC who rolls a failure with Fear is immediately targeted by the 'Undertow' action without requiring a Fear to be spent on the feature.\n\n  *Have any of the PCs forded rivers like this before? Are any of them afraid of drowning?*"
      },
      {
        id: "XehMfuK24uJj4IWRLwTw3",
        name: "Undertow - Action",
        text: "Spend a Fear to catch a PC in the undertow. They must make an Agility Reaction Roll. On a failure, they take 1d6+1 physical damage and are moved a Close distance down the river, becoming Vulnerable until they get out of the river. On a success, they must mark a Stress.\n\n  *What trinkets and baubles lie along the bottom of the riverbed? Do predators swim these rivers?*"
      },
      {
        id: "uy9SM6hY0x04nLAhJjHTL",
        name: "Patient Hunter - Action",
        text: "Spend a Fear to summon a Glass Snake within Close range of a chosen PC. The Snake appears in or near the river and immediately takes the spotlight to use their 'Spinning Serpent' action.\n\n  *What treasures does the beast have in their burrow? What travelers have already fallen victim to this predator?*"
      }
    ]
  },
  {
    id: "9VoVbwR8jkKE5xJS_WeXx",
    name: "Cult Ritual",
    tier: 2,
    environmentType: "Event",
    text: "A fallen cult assembles around a sigil of the defeated gods and a bonfire that burns a sickly shade of green.",
    impulses: "Profane the land, unite the Mortal Realm with the Circles Below",
    difficulty: 14,
    potential_adversaries: "Cult of the Fallen (Cult Adept, Cult Fang, Cult Initiate, Secret-Keeper)",
    feats: [
      {
        id: "jsDmR0y26Ukoh9NWCR18T",
        name: "Desecrated Ground - Passive",
        text: "Cultists dedicated this place to the Fallen Gods, and their foul influence seeps into it. Reduce the PCs' Hope Die to a d10 while in this environment. The desecration can be removed with a Progress Countdown (6).\n\n  *How do the PCs first notice that something is wrong about this place? What fears resurface while hope is kept at bay?*"
      },
      {
        id: "8OoXwo3auoeohYynb1y6p",
        name: "Blasphemous Might - Action",
        text: "A portion of the ritual's power is diverted into a cult member to fight off interlopers. Choose one adversary to become Imbued with terrible magic until the scene ends or they're defeated. An Imbued adversary immediately takes the spotlight and gains one of the following benefits, or all three if you spend a Fear:\n\n  - They gain advantage on all attacks.\n  - They deal an extra 1d10 damage on a successful attack.\n  - They gain the following feature:\n    Relentless (2) - Passive: This adversary can be spotlighted multiple times per GM turn. Spend Fear as usual to spotlight them.\n\n  *How does the enemy change in appearance? What fears do their blows bring to the surface?*"
      },
      {
        id: "u_uqtzai2ztGpo-aQh9Eq",
        name: "The Summoning - Reaction",
        text: "Countdown (6). When the PCs enter the scene or the cult begins the ritual to summon a demon, activate the countdown. Designate one adversary to lead the ritual. The countdown ticks down when a PC rolls with Fear. When it triggers, summon a Minor Demon within Very Close range of the ritual's leader. If the leader is defeated, the countdown ends with no effect as the ritual fails.\n\n  *What will the cult do with this leashed demon if they succeed? What will they try to summon next?*"
      },
      {
        id: "wp4UuXSsnx3tmriYGGTkl",
        name: "Complete the Ritual - Reaction",
        text: "If the ritual's leader is targeted by an attack or spell, an ally within Very Close range of them can mark a Stress to be targeted by that attack or spell instead.\n\n  *What does it feel like to see such devotion turned to the pursuit of fear and domination?*"
      }
    ]
  },
  {
    id: "zdhAEUgga112eFX9YoZOY",
    name: "Hallowed Temple",
    tier: 2,
    environmentType: "Social",
    text: "A bustling yet well-kept temple that provides healing and hosts regular services, overseen by a priest or seraph.",
    impulses: "Connect the Mortal Realm with the Hallows Above, display the power of the divine, provide aid and succor to the faithful",
    difficulty: 13,
    potential_adversaries: "Guards (Archer Guard, Bladed Guard, Head Guard)",
    feats: [
      {
        id: "WfGAWV_xtBzuJZusD64_H",
        name: "A Place of Healing - Passive",
        text: "A PC who takes a rest in the Hallowed Temple automatically clears all HP.\n\n  *What does the incense smell like? What kinds of songs do the acolytes sing?*"
      },
      {
        id: "_DmU57pdKHqycthV7vbJW",
        name: "Divine Guidance - Passive",
        text: "A PC who prays to a deity while in the Hallowed Temple can make an Instinct Roll to receive answers. If the god they beseech isn't welcome in this temple, roll this made with disadvantage.\n\n  - Critical Success: The PC gains clear information. Additionally, they gain 1d4 Hope, which can be distributed between the party if they share the vision and guidance they received.\n  - Success with Hope: The PC receives clear information.\n  - Success with Fear: The PC receives brief flashes of insight and an emotional impression conveying an answer.\n  - Any Failure: The PC receives only vague flashes. They can mark a Stress to receive one clear image without context.\n\n  *What does it feel like as you are touched by this vision? What feeling lingers after the images have passed?*"
      },
      {
        id: "nzc2jdU3_IlWNEgTwWdr2",
        name: "Restless Hope - Reaction",
        text: "Once per scene, each PC can mark a Stress to turn a result with Fear into a result with Hope.\n\n  *What emotions or memories do you connect with when fear presses in?*"
      },
      {
        id: "J6JvQkAcdqVRZ6osXkXEi",
        name: "Divine Censure - Reaction",
        text: "When the PCs have trespassed, blasphemed, or offended the clergy, you can spend a Fear to summon a High Seraph and 1d4 Bladed Guards within Close range of the senior priest to reinforce their will.\n\n  *What symbols or icons do they bear that signal they are anointed agents of the divinity? Who leads the group and what led them to this calling?*"
      }
    ]
  },
  {
    id: "3AuLRvZrgLy-M8_DrN_O3",
    name: "Haunted City",
    tier: 2,
    environmentType: "Exploration",
    text: "An abandoned city populated by the restless spirits of eras past.",
    impulses: "Misdirect and disorient, replay apocalypses both public and personal",
    difficulty: 14,
    potential_adversaries: "Ghosts (Spectral Archer, Spectral Captain, Spectral Guardian), (ghostly versions of other adversaries (see 'Ghostly Form'))",
    feats: [
      {
        id: "J9tWoc34WmUeMkPXNnXbq",
        name: "Buried Knowledge - Passive",
        text: "The city has countless mysteries to unfold. A PC who seeks knowledge about the fallen city can make an Instinct or Knowledge Roll to learn about this place and discover (potentially haunted) loot.\n\n  - Critical Success: Gain valuable information and a related useful item.\n  - Success with Hope: Gain valuable information.\n  - Success with Fear: Uncover vague or incomplete information.\n  - Any Failure: Mark a Stress to find a lead after an exhaustive search.\n\n  *What secret secrets does the city contain? Why have so many ghosts lingered here? What doomed adventurers have met a bad fate here already?*"
      },
      {
        id: "VBpi4xTQdMHSOhmEOwsdy",
        name: "Ghostly Form - Passive",
        text: "Adversaries who appear here are of a ghostly form. They have resistance to physical damage and can mark a Stress to move up to Close range through solid objects.\n\n  *What injuries to their physical form speak to their cause of death? What unfulfilled purpose holds them in the Mortal Plane?*"
      },
      {
        id: "B2PDINW6JFqmdASUMxb9N",
        name: "Dead Ends - Action",
        text: "The ghosts of an earlier era manifest scenes from the past, such as a street festival, a city council, or a heist. These hauntings change the layout of the city around the PCs, blocking the way behind them, forcing a detour, or presenting them with a challenge, such as mistaking them for rival thieves during the heist.\n\n  *What do the ghosts want from you? What do you need from them?*"
      },
      {
        id: "RKwgPL74mFituUdxLGMOq",
        name: "Apocalypse Then - Action",
        text: "Spend a Fear to manifest the echo of a past disaster that ravaged the city. Activate a Progress Countdown (5) as the disaster replays around the PCs. To complete the countdown and escape the catastrophe, the PCs must overcome threats such as rampaging fires, stampeding civilians, collapsing buildings, or crumbling streets, while recalling history and finding clues to escape the inevitable.\n\n  *Is this the disaster that led the city to be abandoned? What is known about this disaster, and how could that help the PCs escape?*"
      }
    ]
  },
  {
    id: "D69m8Kw2iRByIFlFs0Tqv",
    name: "Mountain Pass",
    tier: 2,
    environmentType: "Traversal",
    text: "Stony peaks that pierce the clouds, with a twisting path winding its way up and over through many switchbacks.",
    impulses: "Exact a chilling toll in supplies and stamina, reveal magical slumber, slow down travel",
    difficulty: 15,
    potential_adversaries: "Beasts (Bear, Giant Eagle, Glass Snake), Chaos Skull, Minotaur Wrecker, Mortal Hunter",
    feats: [
      {
        id: "geSaxMSRk-yoMvFcVDMbw",
        name: "Engraved Sigils - Passive",
        text: "Large markings and engravings have been made in the mountainside. A PC with a relevant background or Experience identifies them as weather magic increasing the power of the icy winds. A PC who succeeds on a Knowledge Roll can recall information about the sigils, potential information about their creators, and the knowledge of how to dispel them. If a PC critically succeeds, they recognize that the sigils are of a style created by highborne enchanters and they gain advantage on a roll to dispel the sigils.\n\n  *Who laid this enchantment? Are they nearby? Why did they want the weather to be more daunting?*"
      },
      {
        id: "Wd-Oe8XZuIBssPlpKe9kt",
        name: "Avalanche - Action",
        text: "Spend a Fear to carve the mountain with an icy torrent, causing an avalanche. All PCs in its path must succeed on an Agility or Strength Reaction Roll or be bowled over and carried down the mountain. A PC using rope, pitons, or other climbing gear gains advantage on this roll. Targets who fail are knocked down the mountain to Far range, take 2d20 physical damage, and must mark a Stress. Targets who succeed must mark a Stress.\n\n  *How do the PCs try to weather the avalanche? What approach do they take to avoid being buried or hurtling down the mountainside?*"
      },
      {
        id: "WWXvKx14UHujtB06v4L9d",
        name: "Raptor Nest - Reaction",
        text: "When the PCs enter the raptors' hunting grounds, two Giant Eagles appear at Very Far range of a chosen PC, identifying the PCs as likely prey.\n\n  *How long has it been since the eagles last found prey? Do they have eggs in their nest, or unfledged young?*"
      },
      {
        id: "NdTfF55swCqHYysLBkffQ",
        name: "Icy Winds - Reaction",
        text: "Countdown (Loop 4). When the PCs enter the mountain pass, activate the countdown. When it triggers, all characters traveling through the pass must succeed on a Strength Reaction Roll or mark a Stress. A PC wearing clothes appropriate for extreme cold gains advantage on these rolls.\n\n  *What parts of the PCs' bodies go numb first? How do they try to keep warm as they press forward?*"
      }
    ]
  },
  {
    id: "p2FavFiMfjO1rGVQnLsPj",
    name: "Burning Heart of the Woods",
    tier: 3,
    environmentType: "Exploration",
    text: "Thick indigo ash fills the air around a towering moss-covered tree that burns eternally with flames a sickly shade of blue.",
    impulses: "Beat out an uncanny rhythm for all to follow, corrupt the woods",
    difficulty: 16,
    potential_adversaries: "Beasts (Bear, Glass Snake), Elementals (Elemental Spark), Verdant Defenders (Dryad, Oak Treant, Stag Knight)",
    feats: [
      {
        id: "UO3p7h5_0r36hpqEqByrR",
        name: "Chaos Magic Locus - Passive",
        text: "When a PC makes a Spellcast Roll, they must roll two Fear Dice and take the higher result.\n\n  *What does it feel like to work magic in this chaos-touched place? What do you fear will happen if you lose control of the spell?*"
      },
      {
        id: "CLg1Y8TsbOdjaBcfBfCRg",
        name: "The Indigo Flame - Passive",
        text: "PCs who approach the central tree can make a Knowledge Roll to try to identify the magic that consumed this environment.\n\n  - On a success: They learn three of the below details. On a success with Fear, they learn two.\n  - On a failure: They can mark a Stress to learn one and gain advantage on the next action roll to investigate this environment.\n  - Details: This is a result of Fallen magic. The corruption is spread through the ashen moss. It can be cleansed only by a ritual of nature magic with a Progress Countdown (8).\n\n  *What fell cult corrupted these woods? What have they already done with the cursed wood and sap from this tree?*"
      },
      {
        id: "I-BOa92gy-LFLc7E99PSA",
        name: "Grasping Vines - Action",
        text: "Animate vines bristling with thorns whip out from the underbrush to ensnare the PCs. A target must succeed on an Agility Reaction Roll or become Restrained and Vulnerable until they break free, clearing both conditions, with a successful Finesse or Strength Roll or by dealing 10 damage to the vines. When the target makes a roll to escape, they take 1d8+4 physical damage and lose a Hope.\n\n  *What painful memories do the vines bring to the surface as they pierce flesh?*"
      },
      {
        id: "GXcnrXkKnrNifXnbnqc2C",
        name: "Charcoal Constructs - Action",
        text: "Warped animals wreathed in indigo flame trample through a point of your choice. All targets within Close range of that point must make an Agility Reaction Roll. Targets who fail take 3d12+3 physical damage. Targets who succeed take half damage instead.\n\n  *Are these real animals consumed by the flame or merely constructs of the corrupting magic?*"
      },
      {
        id: "hoL4DcbIB_qxLpQILBtLG",
        name: "Choking Ash - Reaction",
        text: "Countdown (Loop 6). When the PCs enter the Burning Heart of the Woods, activate the countdown. When it triggers, all characters must make a Strength or Instinct Reaction Roll. Targets who fail take 4d6+5 direct physical damage. Targets who succeed take half damage. Protective masks or clothes give advantage on the reaction roll.\n\n  *What hallucinations does the ash induce? What incongruous taste does it possess?*"
      }
    ]
  },
  {
    id: "jEAKg7GCyh_uig8vjefxQ",
    name: "Castle Siege",
    tier: 3,
    environmentType: "Event",
    text: "An active siege with an attacking force fighting to gain entry to a fortified castle.",
    impulses: "Bleed out the will to fight, breach the walls, build tension",
    difficulty: 17,
    potential_adversaries: "Mercenaries (Harrier, Sellsword, Spellblade, Weaponmaster), Noble Forces (Archer Squadron, Conscript, Elite Soldier, Knight of the Realm)",
    feats: [
      {
        id: "gTt12i63kSrUSFWDS-v5i",
        name: "Secret Entrance - Passive",
        text: "A PC can find or recall a secret way into the castle with a successful Instinct or Knowledge Roll.\n\n  *How do they get in without revealing the pathway to the attackers? Are any of the defenders monitoring this path?*"
      },
      {
        id: "_SVY5FmGmU5Uc5zwJYiR1",
        name: "Siege Weapons (Environment Change) - Action",
        text: "Consequence Countdown (5). The attacking force deploys siege weapons to try to raze the defenders' fortifications. Activate the countdown when the siege begins (for a protracted siege, make this a long-term countdown instead). When it triggers, the defenders' fortifications have been breached and the attackers flood in. You gain 2 Fear, then shift to the Pitched Battle environment and spotlight it.\n\n  *What siege weapons are being deployed? Are they magical, mundane, or a mixture of both? What defenses must the characters overcome to storm the castle?*"
      },
      {
        id: "cB28hQwYDRUeTLrAYpmYo",
        name: "Reinforcements - Action",
        text: "Summon a Knight of the Realm, a number of Tier 3 Minions equal to the number of PCs, and two adversaries of your choice within Far range of a chosen PC as reinforcements. The Knight of the Realm immediately takes the spotlight.\n\n  *Who are they targeting first? What formation do they take?*"
      },
      {
        id: "y06chCCaaw-i0wvtT_I9c",
        name: "Collateral Damage - Reaction",
        text: "When an adversary is defeated, you can spend a Fear to have a stray attack from a siege weapon hit a point on the battlefield. All targets within Very Close range of that point must make an Agility Reaction Roll.\n\n  - Targets who fail take 3d8+3 physical or magic damage and must mark a Stress.\n  - Targets who succeed must mark a Stress.\n\n  *What debris is scattered by the attack? What is broken by the strike that can't be easily mended?*"
      }
    ]
  },
  {
    id: "TWD5niwHjPxTCQba4ErCe",
    name: "Pitched Battle",
    tier: 3,
    environmentType: "Event",
    text: "A massive combat between two large groups of armed combatants.",
    impulses: "Seize people, land, and wealth, spill blood for greed and glory",
    difficulty: 17,
    potential_adversaries: "Mercenaries (Sellsword, Harrier, Spellblade, Weaponmaster), Noble Forces (Archer Squadron, Conscript, Elite Soldier, Knight of the Realm)",
    feats: [
      {
        id: "OOdKJ1pPWjj_wY9u2TsgH",
        name: "Adrift on a Sea of Steel - Passive",
        text: "Traversing a battlefield during an active combat is extremely dangerous. A PC must succeed on an Agility Roll to move at all, and can only go up to Close range on a success. If an adversary is within Melee range of them, they must mark a Stress to make an Agility Roll to move.\n\n  *Do the combatants mistake you for the enemy or consider you interlopers? Can you tell the difference between friend and foe in the fray?*"
      },
      {
        id: "0qZGVn591WMPeCaACbEgH",
        name: "Raze and Pillage - Action",
        text: "The attacking force raises the stakes by lighting a fire, stealing a valuable asset, kidnapping an important person, or killing the populace.\n\n  *What is valuable here? Who is most vulnerable?*"
      },
      {
        id: "PVyYSTVsOzEZZYVs3dcXS",
        name: "War Magic - Action",
        text: "Spend a Fear as a mage from one side uses large-scale destructive magic. Pick a point on the battlefield within Very Far range of the mage. All targets within Close range of that point must make an Agility Reaction Roll. Targets who fail take 3d12+8 magic damage and must mark a Stress.\n\n  *What form does the attack take—fireball, raining acid, a storm of blades? What tactical objective is this attack meant to accomplish, and what comes next?*"
      },
      {
        id: "2B-APHZnf0BgeECU6U4iH",
        name: "Reinforcements - Action",
        text: "Summon a Knight of the Realm, a number of Tier 3 Minions equal to the number of PCs, and two adversaries of your choice within Far range of a chosen PC as reinforcements. The Knight of the Realm immediately takes the spotlight.\n\n  *Who are they targeting first? What formation do they take?*"
      }
    ]
  },
  {
    id: "sgfKH0_Y-bo_bYBjJFbGk",
    name: "Chaos Realm",
    tier: 4,
    environmentType: "Traversal",
    text: "An otherworldly space where the laws of reality are unstable and dangerous.",
    impulses: "Annihilate certainty, consume power, defy logic",
    difficulty: 20,
    potential_adversaries: "Outer Realms Monstrosities (Abomination, Corruptor, Thrall)",
    feats: [
      {
        id: "ZUA3nO119aBDsnlUVgiBA",
        name: "Impossible Architecture - Passive",
        text: "Up is down, down is right, right is a stairway. Gravity and directionality themselves are in flux, and any attempt to move through this realm is an odyssey unto itself, requiring a Progress Countdown (8). On a failure, a PC must mark a Stress in addition to the roll's other consequences.\n\n  *What does it feel like to move in a space so alien to the Mortal Realm? What landmark or point do you fixate on to maintain your balance? What bizarre landmarks do you traverse on your journey?*"
      },
      {
        id: "1Pi4wGd9zLARjgdolRgHm",
        name: "Everything You Are This Place Will Take from You - Action",
        text: "Countdown (Loop 14). Activate the countdown. When it triggers, all PCs must succeed on a Presence Reaction Roll or their highest trait is temporarily reduced by 1d4 unless they mark a number of Stress equal to its value. Any lost trait points are regained if the PC critically succeeds or escapes the Chaos Realm.\n\n  *How does this place try to steal from you that which makes you legendary? What does it feel like to have this power taken from you?*"
      },
      {
        id: "T94vIOeIeZ1YIXcC33pkl",
        name: "Unmake - Action",
        text: "On a failure, they take 4d10 direct magic damage. On a success, they must mark a Stress.\n\n  *What glimpse of other worlds do you catch while this place tries to unmake you? What core facet of your personality does the unmaking try to erase?*"
      },
      {
        id: "gRhfjuKlb_QL_Oxzgpvxu",
        name: "Outer Realms Predators - Action",
        text: "Spend a Fear to summon an Outer Realms Abomination, an Outer Realms Corruptor, and 2d6 Outer Realms Thralls, who appear at Close range of a chosen PC in defiance of logic and causality. Immediately spotlight one of these adversaries, and you can spend an additional Fear to automatically succeed on that adversary's standard attack.\n\n  *What half-consumed remnants of the shattered soul do these monstrosities cast aside in pursuit of living flesh? What jagged reflections of former personhood do you catch between moments of unquenching malice?*"
      },
      {
        id: "tcYndGJIBxyfZFZp7I4dg",
        name: "Disorienting Reality - Reaction",
        text: "On a result with Fear, you can ask the PC to describe which of their fears the Chaos Realm evokes as a vision of reality unmakes and reconstitutes itself to the PC. The PC loses a Hope. If it is their last Hope, you gain a Fear.\n\n  *What moment do they see? If it's a memory, how is it usurped by this place? How hard will it be to hold on to the real memory?*"
      }
    ]
  },
  {
    id: "YE2xJQdFlFpCHZevD8lJ4",
    name: "Divine Usurpation",
    tier: 4,
    environmentType: "Event",
    text: "A massive ritual designed to breach the gates of the Hallows Above and unseat the New Gods themselves.",
    impulses: "Collect power, overawe, silence dissent",
    difficulty: 20,
    potential_adversaries: "Arch-Necromancer, Fallen Shock Troops, Mortal Hunter, Oracle of Doom, Perfected Zombie",
    feats: [
      {
        id: "y_eW8OZejWIpDdO_60nIf",
        name: "Final Preparations - Passive",
        text: "When the environment first takes the spotlight, designate one adversary as the Usurper seeking to overthrow the gods. Activate a Long-Term Countdown (8) as the Usurper assembles what they need to conduct the ritual. When it triggers, spotlight this environment to use the 'Beginning of the End' feature. While this environment remains in play, you can hold up to 15 Fear.\n\n  *What does the Usurper still require: The heart of a High Seraph? The last notes of an ancient vignette? The loyalty of two archenemies? The heartbroken tears of a pure soul?*"
      },
      {
        id: "zy41nwLKx_s64s41Cwdcy",
        name: "Divine Blessing - Passive",
        text: "When a PC critically succeeds, they can spend 2 Hope to refresh an ability normally limited by uses (such as once per rest, once per session).\n\n  *What god favors you as you fight against this usurpation? How does your renewed power reflect their influence?*"
      },
      {
        id: "kg2z3lY4kATZD63lrXAle",
        name: "Defiers Abound - Action",
        text: "Spend 2 Fear to summon 1d4+2 Fallen Shock Troops that appear within Close range of the Usurper to assist their divine siege. Immediately spotlight the Shock Troops to use a 'Group Attack' action.\n\n  *Which High Fallen do these troops serve? Which god's flesh do they wish to feast upon?*"
      },
      {
        id: "TZzeWzuPZsBgCu74WOaT5",
        name: "Godslayer - Action",
        text: "If the Divine Siege Countdown (see 'Beginning of the End') has triggered, you can spend 3 Fear to describe the Usurper slaying one of the gods of the Hallows Above, feasting upon their power and growing stronger. The Usurper clears 2 HP. Increase their Difficulty, damage, attack modifier, or give them a new feature from the slain god.\n\n  *Which god meets their end? What are their last words? How does the Usurper's new stolen power manifest?*"
      },
      {
        id: "wlAIa9DHgdhVOXHiW2Y3S",
        name: "Beginning of the End - Reaction",
        text: "When the 'Final Preparations' long-term countdown triggers, the Usurper begins hammering on the gates of the Hallows themselves. Activate a Divine Siege Countdown (10). Spotlight the Usurper to describe the Usurper's assault and tick down this countdown by 1. If the Usurper takes Major or greater damage, tick up the countdown by 1. When it triggers, the Usurper shatters the barrier between the Mortal Realm and the Hallows Above to slay the gods and take their place. You gain a Fear for each unmarked HP the Usurper has. You can immediately use the 'Godslayer' feature without spending Fear to make an additional GM move.\n\n  *How does the Mortal Realm writhe as the natural order is violated? What mortals witness this blasphemy from afar?*"
      },
      {
        id: "exyeF1FN5grQREFh1YDVr",
        name: "Ritual Nexus - Reaction",
        text: "On any failure with Fear against the Usurper, the PC must mark 1d4 Stress from the backlash of magical power.\n\n  *What visions of failures past torment you as your efforts fall short? How are these memories twisted by the Usurper?*"
      }
    ]
  },
  {
    id: "f3mbYJ58XFUXk0AxSQtiA",
    name: "Imperial Court",
    tier: 4,
    environmentType: "Social",
    text: "The dazzling mansion of a powerful empire, lavishly appointed with stolen treasures.",
    impulses: "Justify and perpetuate imperial rule, seduce rivals with promises of power and comfort",
    difficulty: 20,
    potential_adversaries: "Bladed Guard, Courtesan, Knight of the Realm, Monarch, Spy",
    feats: [
      {
        id: "tqZmZkfqtkiZi8z2wrP-p",
        name: "All Roads Lead Here - Passive",
        text: "While in the Imperial Court, a PC has disadvantage on Presence Rolls made to take actions that don't fit the imperial way of life or support the empire's dominance.\n\n  *How does the way language is used make even discussing alternative ways of living difficult? What obvious benefits for loyalty create friction when you try to discuss alternatives?*"
      },
      {
        id: "md1xjX854aIhFP7UW2GfX",
        name: "Rival Vassals - Passive",
        text: "The PCs can find imperial subjects, vassals, and supplicants in the court, each vying for favor, seeking proximity to power, exchanging favors for loyalty, and elevating their status above others. Some might be desperate to undermine their rivals, while others might even be open to discussions that verge on sedition.\n\n  *How do they benefit from vassalage, and what has it cost them? What exploitation drives them to consider opposing the unstoppable?*"
      },
      {
        id: "2Ym5MwTnFaLxvRl1k5AbU",
        name: "The Gravity of Empire - Action",
        text: "Spend a Fear to present a PC with a golden opportunity or offer to satisfy a major goal in exchange for obeying or supporting the empire. The target must make a Presence Reaction Roll. On a failure, they must mark all their Stress or accept the offer. If they have already marked all their Stress, they must reduce their Stress track by 1d4. On a success, they must mark 1d4 Stress as they're taxed by temptation.\n\n  *What do the PCs want so desperately they might consider throwing in with this ruthless power? How did imperial agents learn the PC's greatest desires?*"
      },
      {
        id: "DGBUBYqN_t-fDiWVlH2JA",
        name: "Imperial Decree - Action",
        text: "Spend a Fear to tick down a long-term countdown related to the empire's agenda by 1d4. If this triggers the countdown, a proclamation related to the agenda is announced at court as the plan is executed.\n\n  *What display of power or transfer of wealth was needed to expedite this plan? Whose lives were disrupted or upended to make this happen?*"
      },
      {
        id: "3ddvpbKn1Z3f9rubKiMRa",
        name: "Eyes Everywhere - Reaction",
        text: "On a result with Fear, you can spend a Fear to have someone loyal to the empire overhear seditious talk within the court. A PC must succeed on an Instinct Reaction Roll to notice that the group has been overheard so they can try to intercept the witness before the PCs are exposed.\n\n  *How has the empire compromised this witness? Why is their first impulse to protect the empire, even if doesn't treat them well?*"
      }
    ]
  },
  {
    id: "ydt-2C9I1SDeRc62OYBmX",
    name: "Necromancer's Ossuary",
    tier: 4,
    environmentType: "Exploration",
    text: "A dusty crypt with a library, twisting corridors, and abundant sarcophagi; spattered with the blood of ill-fated invaders.",
    impulses: "Confound intruders, delve into secrets best left buried, manifest unlife, unleash a tide of undead",
    difficulty: 19,
    potential_adversaries: "Arch-Necromancer's Host (Perfected Zombie, Zombie Legion)",
    feats: [
      {
        id: "iyxVfHk9yyZTW2dnlis6Q",
        name: "No Place for the Living - Passive",
        text: "A feature or action that clears HP requires spending a Hope to use. If it already costs Hope, a PC must spend an additional Hope.\n\n  *What does it feel like to try to heal in a place so antithetical to life?*"
      },
      {
        id: "2eyFUOyDjjm-GUg6KqCe8",
        name: "Centuries of Knowledge - Passive",
        text: "A PC can investigate the library and laboratory and make a Knowledge Roll to learn information related to arcana, local history, and the Necromancer's plans.\n\n  *What are the names of the tomes? What project is the necromancer working on and what does it communicate about their plans?*"
      },
      {
        id: "pTWmhpIiz3jGzEXGYvjPB",
        name: "Skeletal Burst - Action",
        text: "All targets within Close range of a point you choose in this environment must succeed on an Agility Reaction Roll or take 4d8+8 physical damage from bone shrapnel as part of the ossuary detonates around them.\n\n  *What ancient skeletal architecture is destroyed? What bones stick in your armor?*"
      },
      {
        id: "74Yk6Ciu0inJtFO9hipTp",
        name: "Aura of Death - Action",
        text: "Once per scene, roll a d4. Each undead within Far range of the Necromancer can clear HP and Stress equal to the result rolled. The undead can choose how that total number is divided between HP and Stress.\n\n  *How does the power manifest? Do the undead look more lifelike or, paradoxically, are they more decayed but vigorous?*"
      },
      {
        id: "sIrKmXqXoKnp9-SiQjcK8",
        name: "They Just Keep Coming! - Action",
        text: "Spend a Fear to summon 1d6 Rotted Zombies, two Perfected Zombies, or a Zombie Legion, who appear at Close range of a chosen PC.\n\n  *Who were these people before they became the necromancer's pawns? What vestiges of those lives remain for the heroes to see?*"
      }
    ]
  }
];

export const ENVIRONMENTS_BY_NAME: Map<string, Environment> = new Map(
    ENVIRONMENTS.map((environment) => {
        return [environment.name!, environment];
    })
);