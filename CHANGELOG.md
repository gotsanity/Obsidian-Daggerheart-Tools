# Changelog

## [1.4.0](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/compare/1.3.0...1.4.0) (2025-07-12)


### Features

* added ability to add an existing adversary to a document's markdown using the command pallette 'Add adversary to the document' ([8bd8da7](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/8bd8da7cd240424727b077aa77cfd97918072238))
* Added environment block rendering, added SRD environments to the database ([c9c785e](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/c9c785e6aabd984b4246516d225d03c52fdc6005))

## [1.3.0](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/compare/1.2.2...1.3.0) (2025-07-09)


### Features

* added ability to delete features and experiences from adversary forms and adjusted styles of adversary form to be more readable ([ab4bd6a](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/ab4bd6abec89c65d61e756e90402dcc40354e956))

## [1.2.2](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/compare/1.2.1...1.2.2) (2025-07-09)


### Bug Fixes

* fixed error in .gitignore ([e220d41](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/e220d41b8a19205896a19693f67f9f4caba4b59b))

## [1.2.1](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/compare/1.2.0...1.2.1) (2025-07-09)


### Bug Fixes

* fixed issue with id property on features and fixed error in tier datatype in daggerheart-srd-bestiary.ts ([87bdd24](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/87bdd24e510547d32b7d6aa7cd430fecf52b8004))

## [1.2.0](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/compare/1.1.1...1.2.0) (2025-07-09)


### Features

* added ability to dynamically add features and experiences to adversary modal form ([9ccfa37](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/9ccfa37b658d5fbde22bdd2d1050d725fae7d6e0))
* added ability to insert new adversaries directly into active editor sessions at the cursor ([02ee940](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/02ee940c5f6cfbec7175da9fe66c217bb0089343))
* added save as, edit, and new adversary modals with validation ([89fea67](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/89fea67e998d1b8b010cbfc4469a80b9e1c89a5e))
* added validation to adversary modal form ([400efee](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/400efee0672011e2115cbd5a93886b1553ee99aa))
* introduced method to insert updated name on edit into markdown ([80c1163](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/80c1163c5d278300cd54d3853a310165a2c53b8e))


### Bug Fixes

* added styles.css, main.js to .gitignore ([971c514](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/971c5145a3d5a299dfadfbd5bf67cba973c6e785))
* fixed [#8](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/issues/8) issue with frontmatter being overwritten on insert. ([80c1163](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/80c1163c5d278300cd54d3853a310165a2c53b8e))
* fixed issue with repository callbacks being unable to unsubscribe ([80c1163](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/80c1163c5d278300cd54d3853a310165a2c53b8e))
* fixed validation for saving adversaries with existing features and experiences ([1aa3beb](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/1aa3beb68415b8b659b7dfc79ec651e95d1310d5))
* fixed validation to include features and experiences ([80b5faf](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/80b5fafb0d63f4d73de8ca2aeaedf20e62984b3d))

## [1.1.1](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/compare/1.1.0...1.1.1) (2025-07-08)


### Bug Fixes

* fixes [#5](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/issues/5), issue with ITS Theme injecting extra content into existing layouts. ([6ae78b1](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/6ae78b1727be701ba1db4f6076f9168f791bd001))

## [1.1.0](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/compare/v1.0.0...1.1.0) (2025-07-07)


### Features

* added ability to delete combatants ([a5b8217](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/a5b8217f5ff6cb093c64f601082e2c39a5127925))
* Added bestiary and api bindings ([ef6d953](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/ef6d9531794459e0d69348a7fe4aa7196ed5448e))
* added buttons to add combatants and to track combatants inside of adversary blocks ([de54520](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/de54520e0326a332477224bf7d1ce20acea32ae9))
* added combat tracking and saving to frontmatter ([ddcbef7](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/ddcbef7d820c09aba0e6d085863fd83f1bb62c88))
* added persistent tracking to encounters ([af92515](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/af9251548db3215ae15a60e98c5b267d00159300))
* added repositories for adversaries, encounters, environments, and abilit cards ([d14ea97](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/d14ea973318ecdd25ffe335ffe3d377cc56bb84b))
* persistent tracking of hp and stress on combatants ([dc4647d](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/dc4647d98cd2e57a4e0205652e2097580adba75b))
* simple adversary blocks added ([d3cfc7f](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/d3cfc7f5cdb77f1bccf4aa45b8cf954c713651ba))


### Bug Fixes

* fixed issue with changes made to adversaries not updating saved encounters ([5414a94](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/5414a94aea6b2be3e64455121401e634eff2c077))
* made api fixes to allow the project to build ([4ba6e2d](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/4ba6e2d6ed7bec1f8d58ea320df306c93acf79b1))
* Update release-please.yml ([e88b412](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/e88b412c591bd17da8de07210c69ee2e62365457))
* updated icon, fixed rendering error, and introduced a few style fixes ([7312663](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/731266311822b1965f7dd64b766dc2009d7312b2))
* updated styles for buttons on combat tracker ([6fe3133](https://github.com/gotsanity/Obsidian-Daggerheart-Tools/commit/6fe3133a7c6afc68f1bb9f89148ef3629674fd95))
