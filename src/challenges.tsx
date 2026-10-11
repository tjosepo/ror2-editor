export interface Challenge {
  name: string;
  description: string;
  unlocks: string[];
  achievement: string;
  icon: string;
}

export const challenges: Challenge[] = [
  /* White */
  { name: '...Maybe One More.', description: 'Duplicate the same item 7 times in a row with a 3D Printer.', unlocks: ['Items.Firework'], achievement: 'RepeatedlyDuplicateItems', icon: 'items/firework' },
  { name: 'Elite Slayer', description: 'Defeat an Elite-type monster.', unlocks: ['Items.Medkit'], achievement: 'KillEliteMonster', icon: 'items/medkit' },
  { name: 'Keyed Up', description: 'Defeat the teleporter boss in under 15 seconds.', unlocks: ['Items.TreasureCache'], achievement: 'KillBossQuick', icon: 'items/treasurecache' },
  { name: '"Is This Bugged?"', description: 'Fail the Shrine of Chance 3 times in a row.', unlocks: ['Items.Hoof'], achievement: 'FailShrineChance', icon: 'items/hoof' },
  { name: 'The Basics', description: 'Discover 10 unique white items.', unlocks: ['Items.Crowbar'], achievement: 'Discover10UniqueTier1', icon: 'items/crowbar' },
  { name: 'Learning Process', description: 'Die 5 times.', unlocks: ['Items.Bear'], achievement: 'Die5Times', icon: 'items/bear' },
  { name: 'Flawless', description: 'Fully charge a teleporter without getting hit.', unlocks: ['Items.SecondarySkillMagazine'], achievement: 'CompleteTeleporterWithoutInjury', icon: 'items/secondaryskillmagazine' },
  { name: 'Advancement', description: 'Complete a teleporter event.', unlocks: ['Items.BossDamageBonus'], achievement: 'CompleteTeleporter', icon: 'items/bossdamagebonus' },

  /* Green */
  { name: 'Rapidfire', description: 'Reach +200% attack speed.', unlocks: ['Items.AttackSpeedOnCrit'], achievement: 'AttackSpeed', icon: 'items/attackspeedoncrit' },
  { name: 'Warmonger', description: 'Complete three Combat Shrines in a single stage.', unlocks: ['Items.EnergizedOnEquipmentUse'], achievement: 'MultiCombatShrine', icon: 'items/energizedonequipmentuse' },
  { name: 'Going Fast Recommended', description: 'Reach +300% movespeed (includes sprinting)', unlocks: ['Items.JumpBoost'], achievement: 'MoveSpeed', icon: 'items/jumpboost' },
  { name: 'Slaughter', description: 'Defeat 3000 enemies.', unlocks: ['Items.Infusion'], achievement: 'KillTotalEnemies', icon: 'items/infusion' },
  { name: 'Cut Down', description: 'Defeat 500 Elite monsters', unlocks: ['Items.ExecuteLowHealthElite'], achievement: 'KillElitesMilestone', icon: 'items/executelowhealthelite' },
  { name: 'Experimenting', description: 'Pick up 5 different types of Equipment.', unlocks: ['Items.EquipmentMagazine'], achievement: 'Discover5Equipment', icon: 'items/equipmentmagazine' },
  { name: 'Prismatically Aligned', description: 'Complete a Prismatic Trial.', unlocks: ['Items.HealOnCrit'], achievement: 'CompletePrismaticTrial', icon: 'items/healoncrit' },
  { name: 'Death Do Us Part', description: 'Discover the hidden chamber in the Abandoned Aqueduct.', unlocks: ['Items.ElementalRings'], achievement: 'KillElementalLemurians', icon: 'items/elementalrings' },
  { name: 'Glorious Battle', description: 'Charge the teleporter with less than 10% health.', unlocks: ['Items.WarCryOnMultiKill'], achievement: 'ChargeTeleporterWhileNearDeath', icon: 'items/warcryonmultikill' },
  { name: 'Automation Activation', description: 'Activate 6 turrets in a single run.', unlocks: ['Items.Squid'], achievement: 'AutomationActivation', icon: 'items/squid' },

  /* Red */
  { name: 'Newtist', description: 'Discover and activate 8 unique Newt Altars.', unlocks: ['Items.Talisman'], achievement: 'FindUniqueNewtStatues', icon: 'items/talisman' },
  { name: 'The Long Road', description: 'Complete 20 stages in a single run.', unlocks: ['Items.Clover'], achievement: 'Complete20Stages', icon: 'items/clover' },
  { name: 'Deicide', description: 'Defeat an Elite boss on Monsoon difficulty', unlocks: ['Items.KillEliteFrenzy'], achievement: 'HardEliteBossKill', icon: 'items/killelitefrenzy' },
  { name: 'The Lone Survivor', description: 'Stay alive for 30 consecutive minutes.', unlocks: ['Items.ExtraLife'], achievement: 'StayAlive1', icon: 'items/extralife' },
  { name: 'Naturopath', description: 'Without healing, reach and complete the 3rd teleporter event.', unlocks: ['Items.IncreaseHealing'], achievement: 'CompleteThreeStagesWithoutHealing', icon: 'items/increasehealing' },
  { name: 'Macho', description: 'Deal 5,000 damage in one attack. (Can be multiple hits, piercing, crits, etc.)', unlocks: ['Items.ShockNearby'], achievement: 'HardHitter', icon: 'items/shocknearby' },
  { name: 'Her Concepts', description: 'Find the altar to N\'kuhana.', unlocks: ['Items.NovaOnHeal'], achievement: 'FindDevilAltar', icon: 'items/novaonheal' },
  { name: 'Deja Vu?', description: 'Loop back to the first stage.', unlocks: ['Items.BounceNearby'], achievement: 'LoopOnce', icon: 'items/bouncenearby' },

  /* Lunar */
  { name: 'The Calm', description: 'Beat the game on Monsoon difficulty.', unlocks: ['Items.LunarBadLuck'], achievement: 'CompleteMainEndingHard', icon: 'items/lunarbadluck' },
  { name: 'The Demons And The Crabs', description: 'Kill 20 Hermit Crabs by chasing them off the edge of the map.', unlocks: ['Items.AutoCastEquipment'], achievement: 'SuicideHermitCrabs', icon: 'items/autocastequipment' },
  { name: 'Never Back Down', description: 'In 4 consecutive stages don\'t leave the teleport radius until it is fully charged.', unlocks: ['Items.FocusConvergence'], achievement: 'NeverBackDown', icon: 'items/focusconvergence' },
  { name: 'Blockade Breaker', description: 'Kill 15 boss enemies in a single run.', unlocks: ['Items.LunarUtilityReplacement', 'Items.LunarPrimaryReplacement'], achievement: 'KillBossQuantityInRun', icon: 'items/blockadebreaker' },
  { name: 'Moon Worshipper', description: 'Carry 5 Lunar items in a single run.', unlocks: ['Items.Meteor'], achievement: 'CarryLunarItems', icon: 'items/meteor' },
  { name: 'Cosmic Explorer', description: 'Discover and enter three unique portals.', unlocks: ['Items.TonicAffliction'], achievement: 'UseThreePortals', icon: 'items/tonicaffliction' },
  { name: 'Multikill!', description: 'Kill 15 enemies simultaneously.', unlocks: ['Items.BurnNearby'], achievement: 'MajorMultikill', icon: 'items/burnnearby' },

  /* Equipment */
  { name: 'Warm For Life', description: 'Die three times while burning.', unlocks: ['Items.Cleanse'], achievement: 'BurnToDeath', icon: 'items/cleanse' },
  { name: 'Mechanic', description: 'Repair 30 drones or turrets.', unlocks: ['Items.DroneBackup'], achievement: 'TotalDronesRepaired', icon: 'items/dronebackup' },
  { name: 'Funded!', description: 'Collect $30,480 total gold.', unlocks: ['Items.GoldGat'], achievement: 'TotalMoneyCollected', icon: 'items/goldgat' },
  { name: '[REDACTED]', description: 'Open the Timed Security Chest on Rallypoint Delta.', unlocks: ['Items.BFG'], achievement: 'FindTimedChest', icon: 'items/bfg' },
  { name: 'Blackout', description: 'Defeat the Guardian of Gilded Coast without any beacons deactivating.', unlocks: ['Items.Gateway'], achievement: 'KillGoldTitanInOneCycle', icon: 'items/gateway' },
  { name: 'One with the Woods', description: 'Fully upgrade a Shrine of the Woods.', unlocks: ['Items.PassiveHealing'], achievement: 'MaxHealingShrine', icon: 'items/passivehealing' },
  { name: 'Bookworm', description: 'Collect 10 Monster or Environment Logs.', unlocks: ['Items.Scanner'], achievement: 'LogCollector', icon: 'items/scanner' },
  { name: 'Ascendant', description: 'Defeat the teleporter bosses after activating 2 Shrines of the Mountain.', unlocks: ['Items.Lightning'], achievement: 'CompleteMultiBossShrine', icon: 'items/lightning' },
  { name: 'Cleanup Duty', description: 'Destroy 20 flying rocks in Sky Meadow.', unlocks: ['Items.Recycle'], achievement: 'CleanupDuty', icon: 'items/recycle' },
  { name: 'I Love Dying!', description: 'Die 20 times.', unlocks: ['Items.DeathProjectile'], achievement: 'Die20Times', icon: 'items/deathprojectile' },
  { name: 'King of the Hill', description: 'Journey to the Prime Meridian and defeat the False Son.', unlocks: ['Items.HealAndRevive'], achievement: 'DefeatFalseSon', icon: 'items/seedoflife' },

  /* Commando */
  { name: 'Commando: Godspeed', description: 'As Commando, fully charge the first-stage teleporter before the timer hits 5 minutes.', unlocks: ['Skills.Commando.SlideJet'], achievement: 'CommandoFastFirstStageClear', icon: 'skills/commando/slidejet' },
  { name: 'Commando: Rolling Thunder', description: 'As Commando, land the killing blow on an Overloading Worm.', unlocks: ['Skills.Commando.FireShotgunBlast'], achievement: 'CommandoKillOverloadingWorm', icon: 'skills/commando/fireshotgunblast' },
  { name: 'Commando: Incorruptible', description: 'As Commando, clear 20 stages in a single run without picking up any Lunar items.', unlocks: ['Skills.Commando.ThrowGrenade'], achievement: 'CommandoNonLunarEndurance', icon: 'skills/commando/throwgrenade' },
  { name: 'Commando: Mastery', description: 'As Commando, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Commando.Alt1'], achievement: 'CommandoClearGameMonsoon', icon: 'skins/commando/alt1' },
  { name: 'Commando: Cleared Prime Meridian', description: 'As Commando, complete the Event on Prime Meridian', unlocks: [], achievement: 'CommandoClearMeridianEvent', icon: 'skins/commando/alt2' },
  { name: 'Commando: Purge', description: 'As Commando deny the offering of the Collective', unlocks: ['Skins.Commando.Alt2'], achievement: 'CommandoPurge', icon: 'skins/commando/alt2' },

  /* Huntress */
  { name: 'Huntress: One Shot, One Kill', description: 'As Huntress, collect and carry 12 Crowbars at once.', unlocks: ['Skills.Huntress.MiniBlink'], achievement: 'HuntressCollectCrowbars', icon: 'skills/huntress/miniblink' },
  { name: 'Huntress: Finishing Touch', description: 'As Huntress, land a killing blow with every possible hit of a single glaive.', unlocks: ['Skills.Huntress.FlurryArrow'], achievement: 'HuntressAllGlaiveBouncesKill', icon: 'skills/huntress/flurryarrow' },
  { name: 'Huntress: Piercing Wind', description: 'As Huntress, start and finish either Rallypoint Delta or Scorched Acres without falling below 100% health.', unlocks: ['Skills.Huntress.Snipe'], achievement: 'HuntressMaintainFullHealthOnFrozenWall', icon: 'skills/huntress/snipe' },
  { name: 'Huntress: Mastery', description: 'As Huntress, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Huntress.Alt1'], achievement: 'HuntressClearGameMonsoon', icon: 'skins/huntress/alt1' },
  { name: 'Huntress: Cleared Prime Meridian', description: 'As Huntress, complete the Event on Prime Meridian.', unlocks: [], achievement: 'HuntressClearMeridianEvent', icon: 'skins/huntress/alt2' },
  { name: 'Huntress: Purge', description: 'As Huntress deny the offering of the Collective', unlocks: ['Skins.Huntress.Alt2'], achievement: 'HuntressPurge', icon: 'skins/huntress/alt2' },

  /* Bandit */
  { name: 'Warrior', description: 'Reach and complete the 3rd Teleporter event without dying.', unlocks: ['Characters.Bandit2'], achievement: 'CompleteThreeStages', icon: 'characters/bandit2' },
  { name: 'Bandit: Classic Man', description: "As Bandit, successfully use 'Lights Out' to reset your cooldowns 15 times in a row.", unlocks: ['Skills.Bandit2.Rifle'], achievement: 'Bandit2ConsecutiveReset', icon: 'skills/bandit2/rifle' },
  { name: 'Bandit: Sadist', description: "As Bandit, kill a monster with 20 stacks of Hemorrhage.", unlocks: ['Skills.Bandit2.SerratedShivs'], achievement: 'Bandit2StackSuperBleed', icon: 'skills/bandit2/serrated-shivs' },
  { name: 'Bandit: B&E', description: "As Bandit, kill the final boss with 'Lights Out'.", unlocks: ['Skills.Bandit2.SkullRevolver'], achievement: 'Bandit2RevolverFinale', icon: 'skills/bandit2/skull-revolver' },
  { name: 'Bandit: Mastery', description: "As Bandit, beat the game or obliterate on Monsoon'.", unlocks: ['Skills.Bandit2.Alt1'], achievement: 'Bandit2ClearGameMonsoon', icon: 'skins/bandit2/alt1' },
  { name: 'Bandit: Cleared Prime Meridian', description: 'As Bandit, complete the Event on Prime Meridian.', unlocks: [], achievement: 'Bandit2ClearMeridianEvent', icon: 'skins/bandit2/alt2' },
  { name: 'Bandit: Accept and Decompile', description: 'As Bandit, accept the offering of the Collective.', unlocks: ['Skins.Bandit2.Alt2'], achievement: 'Bandit2Decompile', icon: 'skins/bandit2/alt2' },

  /* MUL-T */
  { name: 'Verified', description: 'Complete the first Teleporter event 5 times.', unlocks: ['Characters.Toolbot'], achievement: 'RepeatFirstTeleporter', icon: 'characters/toolbot' },
  { name: 'MUL-T: Pest Control', description: 'As MUL-T, defeat two Beetle Queens without leaving the teleporter zone.', unlocks: ['Skills.Toolbot.Grenade'], achievement: 'ToolbotGuardTeleporter', icon: 'skills/toolbot/grenade' },
  { name: 'MUL-T: Gotcha!', description: 'As MUL-T, land the killing blow on an Imp Overlord with the Preon Accumulator.', unlocks: ['Skills.Toolbot.Buzzsaw'], achievement: 'ToolbotKillImpBossWithBfg', icon: 'skills/toolbot/buzzsaw' },
  { name: 'MUL-T: Seventh Day', description: 'As MUL-T, clear the Void Fields on Stage 7 or later.', unlocks: ['Skills.Toolbot.SpecialAlt'], achievement: 'ToolbotBeatArenaLater', icon: 'skills/toolbot/special-alt' },
  { name: 'MUL-T: Mastery', description: 'As MUL-T, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Toolbot.Alt1'], achievement: 'ToolbotClearGameMonsoon', icon: 'skins/toolbot/alt1' },
  { name: 'MUL-T: Cleared Prime Meridian', description: 'As MUL-T, complete the Event on Prime Meridian.', unlocks: [], achievement: 'ToolbotClearMeridianEvent', icon: 'skins/toolbot/alt2' },
  { name: 'MUL-T: Purge', description: 'As MUL-T deny the offering of the Collective.', unlocks: ['Skins.Toolbot.Alt2'], achievement: 'ToolbotPurge', icon: 'skins/toolbot/alt2' },

  /* Engineer */
  { name: 'Engineering Perfection', description: 'Complete 30 stages.', unlocks: ['Characters.Engineer'], achievement: 'Complete30StagesCareer', icon: 'characters/engineer' },
  { name: 'Engineer: Better With Friends', description: 'As Engineer, recruit 12 minions at one time.', unlocks: ['Skills.Engi.WalkerTurret'], achievement: 'EngiArmy', icon: 'skills/engi/walkerturret' },
  { name: 'Engineer: 100% Calculated', description: 'As Engineer, defeat the teleporter boss in less than 5 seconds after it spawns.', unlocks: ['Skills.Engi.SpiderMine'], achievement: 'EngiKillBossQuick', icon: 'skills/engi/spidermine' },
  { name: 'Engineer: Zero Sum', description: 'As Engineer, finish chargin the teleporter with zero monsters remaining on the stage.', unlocks: ['Skills.Engi.Harpoon'], achievement: 'EngiClearTeleporterWithZeroMonsters', icon: 'skills/engi/harpoon' },
  { name: 'Engineer: Mastery', description: 'As Engineer, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Engi.Alt1'], achievement: 'EngiClearGameMonsoon', icon: 'skins/engi/alt1' },
  { name: 'Engineer: Cleared Prime Meridian', description: 'As Engineer, complete the Event on Prime Meridian.', unlocks: [], achievement: 'EngiClearMeridianEvent', icon: 'skins/engi/alt2' },
  { name: 'Engineer: Purge', description: 'As Engineer deny the offering of the Collective', unlocks: ['Skins.Engi.Alt2'], achievement: 'EngiPurge', icon: 'skins/engi/alt2' },

  /* Artificer */
  { name: 'Pause.', description: 'Free the survivor suspended in time.', unlocks: ['Characters.Mage'], achievement: 'FreeMage', icon: 'characters/mage' },
  { name: 'Artificer: Massacre', description: 'As Artificer, perform a multikill of 20 enemies.', unlocks: ['Skills.Mage.LightningBolt'], achievement: 'MageMultiKill', icon: 'skills/mage/lightningbolt' },
  { name: 'Artificer: Orbital Bombardment', description: 'As Artificer, kill 15 enemies before touching the ground.', unlocks: ['Skills.Mage.FlyUp'], achievement: 'MageAirborneMultiKill', icon: 'skills/mage/flyup' },
  { name: 'Artificer: Chunked!', description: 'As Artificer, fully defeat the teleport boss in a one-second burst of damage.', unlocks: ['Skills.Mage.IceBomb'], achievement: 'MageFastBoss', icon: 'skills/mage/icebomb' },
  { name: 'Artificer: Mastery', description: 'As Artificer, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Mage.Alt1'], achievement: 'MageClearGameMonsoon', icon: 'skins/mage/alt1' },
  { name: 'Artificer: Cleared Prime Meridian', description: 'As Artificer, complete the Event on Prime Meridian.', unlocks: [], achievement: 'MageClearMeridianEvent', icon: 'skins/mage/alt2' },
  { name: 'Artificer: Accept and Decompile', description: 'As Artificer accept the offering of the Collective', unlocks: ['Skins.Mage.Alt2'], achievement: 'MageDecompile', icon: 'skins/mage/alt2' },

  /* Mercenary */
  { name: 'True Respite', description: 'Obliterate yourself at the Obelisk.', unlocks: ['Characters.Mercenary'], achievement: 'CompleteUnknownEnding', icon: 'characters/mercenary' },
  { name: 'Mercenary: Ethereal', description: 'As Mercenary, complete a Prismatic Trial without falling below 100% health.', unlocks: ['Skills.Merc.EvisProjectile'], achievement: 'MercCompleteTrialWithFullHealth', icon: 'skills/merc/evisprojectile' },
  { name: 'Mercenary: Flash of Blades', description: 'As Mercenary, use 20 abilities in 10 seconds.', unlocks: ['Skills.Merc.FocusedAssault'], achievement: 'MercXSkillsInYSeconds', icon: 'skills/merc/focused-assault' },
  { name: 'Mercenary: Demon of the Skies', description: 'As Mercenary, kill 15 enemies before touching the ground.', unlocks: ['Skills.Merc.Uppercut'], achievement: 'MercDontTouchGround', icon: 'skills/merc/uppercut' },
  { name: 'Mercenary: Mastery', description: 'As Mercenary, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Merc.Alt1'], achievement: 'MercClearGameMonsoon', icon: 'skins/merc/alt1' },
  { name: 'Mercenary: Cleared Prime Meridian', description: 'As Mercenary, complete the Event on Prime Meridian.', unlocks: [], achievement: 'MercClearMeridianEvent', icon: 'skins/merc/alt2' },
  { name: 'Mercenary: Purge', description: 'As Mercenary deny the offering of the Collective', unlocks: ['Skins.Merc.Alt2'], achievement: 'MercPurge', icon: 'skins/merc/alt2' },

  /* REX */
  { name: 'REX: Power Plant', description: 'Repair the broken robot with an Escape Pod\'s Fuel Array.', unlocks: ['Characters.Treebot'], achievement: 'RescueTreebot', icon: 'characters/treebot' },
  { name: 'REX: Bushwhacked', description: 'As REX, complete an entire teleporter event while under 50% health.', unlocks: ['Skills.Treebot.Barrage'], achievement: 'TreebotLowHealthTeleporter', icon: 'skills/treebot/barrage' },
  { name: 'REX: Full of Life', description: 'As REX, heal for 1000 health at once.', unlocks: ['Skills.Treebot.SpecialAlt1'], achievement: 'TreebotBigHeal', icon: 'skills/treebot/special-alt1' },
  { name: 'REX: Dunked', description: 'As REX, kill a Clay Dunestrider on Abandoned Aqueduct by throwing it into a pit.', unlocks: ['Skills.Treebot.PlantSonicBoom'], achievement: 'TreebotDunkClayBoss', icon: 'skills/treebot/plantsonicboom' },
  { name: 'REX: Mastery', description: 'As REX, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Treebot.Alt1'], achievement: 'TreebotClearGameMonsoon', icon: 'skins/treebot/alt1' },
  { name: 'REX: Cleared Prime Meridian', description: 'As REX, complete the Event on Prime Meridian.', unlocks: [], achievement: 'TreebotClearMeridianEvent', icon: 'skins/treebot/alt2' },
  { name: 'Rex: Accept and Decompile', description: 'As Rex accept the offering of the Collective', unlocks: ['Skins.Treebot.Alt2'], achievement: 'TreebotDecompile', icon: 'skins/treebot/alt2' },

  /* Loader */
  { name: 'Guidance Offline', description: 'Defeat the unique guardian of Siren\'s Call.', unlocks: ['Characters.Loader'], achievement: 'DefeatSuperRoboBallBoss', icon: 'characters/loader' },
  { name: 'Loader: Swing By', description: 'As Loader, reach and proceed through the Celestial Portal in 25 minutes or less.', unlocks: ['Skills.Loader.ZapFist'], achievement: 'LoaderSpeedRun', icon: 'skills/loader/zapfist' },
  { name: 'Loader: Earthshatter', description: 'As Loader, land a Charged Gauntlet hit at 300mph or higher.', unlocks: ['Skills.Loader.YankHook'], achievement: 'LoaderBigSlam', icon: 'skills/loader/yankhook' },
  { name: 'Loader: The Thunderdome', description: "As Loader, kill three other Loaders in the Bulwark's ambry.", unlocks: ['Skills.Loader.Thunderslam'], achievement: 'LoaderKillLoaders', icon: 'skills/loader/thunderslam' },
  { name: 'Loader: Mastery', description: 'As Loader, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Loader.Alt1'], achievement: 'LoaderClearGameMonsoon', icon: 'skins/loader/alt1' },
  { name: 'Loader: Cleared Prime Meridian', description: 'As Loader, complete the Event on Prime Meridian.', unlocks: [], achievement: 'LoaderClearMeridianEvent', icon: 'skins/loader/alt2' },
  { name: 'Loader: Accept and Decompile', description: 'As Loader accept the offering of the Collective', unlocks: ['Skins.Loader.Alt2'], achievement: 'LoaderDecompile', icon: 'skins/loader/alt2' },

  /* Acrid */
  { name: '...To Be Left Alone', description: 'Stabilize the Cell in the Void Fields.', unlocks: ['Characters.Croco'], achievement: 'BeatArena', icon: 'characters/croco' },
  { name: 'Acrid: Pandemic', description: 'As Acrid, inflict Poison 1000 total times.', unlocks: ['Skills.Croco.ChainableLeap'], achievement: 'CrocoTotalInfectionsMilestone', icon: 'skills/croco/chainableleap' },
  { name: 'Acrid: Bad Medicine', description: 'As Acrid, land the final blow on a Scavenger.', unlocks: ['Skills.Croco.CrocoBite'], achievement: 'CrocoKillScavenger', icon: 'skills/croco/crocobite' },
  { name: 'Acrid: Easy Prey', description: 'As Acrid, land the killing blow on 50 total enemies that have 1 hit point left.', unlocks: ['Skills.Croco.PassivePoisonLethal'], achievement: 'CrocoKillWeakEnemiesMilestone', icon: 'skills/croco/passivepoisonlethal' },
  { name: 'Acrid: Mastery', description: 'As Acrid, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Croco.Alt1'], achievement: 'CrocoClearGameMonsoon', icon: 'skins/croco/alt1' },
  { name: 'Acrid: Cleared Prime Meridian', description: 'As Acrid, complete the Event on Prime Meridian.', unlocks: [], achievement: 'CrocoClearMeridianEvent', icon: 'skins/croco/alt2' },
  { name: 'Acrid: Purge', description: 'As Acrid deny the offering of the Collective', unlocks: ['Skins.Croco.Alt2'], achievement: 'CrocoPurge', icon: 'skins/croco/alt2' },

  /* Captain */
  { name: 'Washed Away', description: 'Beat the game.', unlocks: ['Characters.Captain'], achievement: 'CompleteMainEnding', icon: 'characters/captain' },
  { name: 'Captain: Wanderlust', description: 'As Captain, visit 10 different environments in a single run', unlocks: ['Skills.Captain.CaptainSupplyDropEquipmentRestock'], achievement: 'CaptainVisitSeveralStages', icon: 'skills/captain/captainsupplydropequipmentrestock' },
  { name: 'Captain: Worth Every Penny', description: 'As Captain, repair and recruit a TC-280 Prototype.', unlocks: ['Skills.Captain.CaptainSupplyDropHacking'], achievement: 'CaptainBuyMegaDrone', icon: 'skills/captain/captainsupplydrophacking' },
  { name: 'Captain: Smushed', description: 'As Captain, kill the final boss using a Supply Beacon.', unlocks: ['Skills.Captain.UtilityAlt1'], achievement: 'CaptainSupplyDropFinale', icon: 'skills/captain/utility-alt1' },
  { name: 'Captain: Mastery', description: 'As Captain, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Captain.Alt1'], achievement: 'CaptainClearGameMonsoon', icon: 'skins/captain/alt1' },
  { name: 'Captain: Cleared Prime Meridian', description: 'As Captain, complete the Event on Prime Meridian.', unlocks: [], achievement: 'CaptainClearMeridianEvent', icon: 'skins/captain/alt2' },
  { name: 'Captain: Accept and Decompile', description: 'As Captain accept the offering of the Collective', unlocks: ['Skins.Captain.Alt2'], achievement: 'CaptainDecompile', icon: 'skins/captain/alt2' },

  /* Railgunner */
  { name: 'Railgunner: Marksman', description: 'As Railgunner, fire 30 consecutive sniper shots without missing a Weak Point.', unlocks: ['Skills.Railgunner.SecondaryAlt1'], achievement: 'RailgunnerConsecutiveWeakPoints', icon: 'skills/railgunner/marksman' },
  { name: 'Railgunner: Annihiliator', description: 'As Railgunner, deal 1,000,000 damage in one shot.', unlocks: ['Skills.Railgunner.UtilityAlt1'], achievement: 'RailgunnerDealMassiveDamage', icon: 'skills/railgunner/annihiliator' },
  { name: 'Railgunner: Trickshot', description: 'As Railgunner, get 3 kills with a single Supercharge shot while airborne.', unlocks: ['Skills.Railgunner.SpecialAlt1'], achievement: 'RailgunnerAirborneMultiKill', icon: 'skills/railgunner/trickshot' },
  { name: 'Railgunner: Mastery', description: 'As Railgunner, beat the game or obliterate on Monsoon.', unlocks: ['Skins.RailGunner.Alt1'], achievement: 'RailgunnerClearGameMonsoon', icon: 'skins/railgunner/alt1' },
  { name: 'Railgunner: Cleared Prime Meridian', description: 'As Railgunner, complete the Event on Prime Meridian.', unlocks: [], achievement: 'RailgunnerClearMeridianEvent', icon: 'skins/railgunner/alt2' },

  /* Void Fiend */
  { name: 'Dragged Below', description: 'Escape the Planetarium or complete wave 50 in Simulacrum.', unlocks: ['Characters.VoidSurvivor'], achievement: 'CompleteVoidEnding', icon: 'characters/voidsurvivor' },
  { name: '「V??oid Fiend』: Mastery', description: 'As 「V??oid Fiend』, beat the game or obliterate on Monsoon.', unlocks: ['Skins.VoidSurvivor.Alt1'], achievement: 'VoidSurvivorClearGameMonsoon', icon: 'skins/voidsurvivor/alt1' },
  { name: 'Void Fiend: Cleared Prime Meridian', description: 'As Void Fiend, complete the Event on Prime Meridian.', unlocks: [], achievement: 'VoidSurvivorClearMeridianEvent', icon: 'skins/voidsurvivor/alt2' },

  /* Seeker */
  { name: 'Seeker: Airborne Souls', description: 'As Seeker, hit three or more airborne enemies with a single use of the exploding third hit of Spirit Punch.', unlocks: ['Skills.Seeker.SoulSearch'], achievement: 'SeekerAirMultiHit', icon: 'skills/seeker/soulsearch' },
  { name: 'Seeker: Mastery', description: 'As Seeker, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Seeker.Alt1'], achievement: 'SeekerClearGameMonsoon', icon: 'skins/seeker/alt1' },
  { name: 'Seeker: Clear Mind', description: 'As Seeker, meditate 20 times without missing an input in a single run.', unlocks: ['Skills.Seeker.PalmBlast'], achievement: 'SeekerPerfect20Meditation', icon: 'skills/seeker/palmblast' },
  { name: 'Seeker: Scorched Earth', description: 'Deal 500,000% damage with one use of Sojourn\'s explosion', unlocks: ['Skills.Seeker.Reprieve'], achievement: 'NukeSojourn', icon: 'skills/seeker/reprieve' },

  /* CHEF */
  { name: 'Order Up!', description: 'Complete the Wok\'s recipe in Reformed Altar.', unlocks: ['Characters.Chef'], achievement: 'ActivateChef', icon: 'characters/chef' },
  { name: 'Chef: Barbecued Bison Recipe Complete', description: 'As Chef complete 10 recipes by searing an oiled bison with Sear.', unlocks: ['Skills.Chef.YesChef'], achievement: 'BarbecueQuantityBisonInRun', icon: 'skills/chef/searbison' },
  { name: 'Chef: Mastery', description: 'As Chef, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Chef.Alt1'], achievement: 'ChefClearGameMonsoon', icon: 'skins/chef/alt1' },
  { name: 'CHEF: You’ve Always Been Crazy', description: 'As CHEF hit five airborne enemies with one instance of Roll.', unlocks: ['Skills.Chef.RollAlt'], achievement: 'RolyPolyHitFiveAirEnemies', icon: 'skills/chef/rollalt' },
  { name: 'CHEF: It’s Getting Hot In Here!', description: 'As CHEF apply 20 stacks of Burn at once to the final boss.', unlocks: ['Skills.Chef.Oil'], achievement: 'BurnMithrix', icon: 'skills/chef/oil' },

  /* False Son */
  { name: 'Purified Freedom', description: 'Purify the Heart of the False Son using the Halcyon Seed.', unlocks: ['Characters.FalseSon'], achievement: 'UnlockFalseSon', icon: 'characters/falseson' },
  { name: 'False Son: Stare Them Down', description: 'As False Son, kill 15 enemies with one activation of Laser of the Father.', unlocks: ['Skills.FalseSon.LaserBurst'], achievement: 'FalseSonLaserMultiKill', icon: 'skills/falseson/laserburst' },
  { name: 'False Son: Mastery', description: 'As False Son, beat the game or obliterate on Monsoon.', unlocks: ['Skins.FalseSon.Alt1'], achievement: 'FalseSonClearGameMonsoon', icon: 'skins/falseson/alt1' },
  { name: 'False Son: Family Bonding', description: 'As False Son, have Aurelionite kill the final boss while the final boss is inflicted with at least one Lunar Ruin.', unlocks: ['Skills.FalseSon.Unknown'], achievement: 'FalseSonKillMithrixWithGoldenGal', icon: 'skills/falseson/unknown' },
  { name: 'False Son: Protein Heavy Diet', description: 'As False Son, gain up to 40 Lunar Spikes through Growth.', unlocks: ['Skills.FalseSon.LunarStakes'], achievement: 'FalseSonGrowthChallenge', icon: 'skills/falseson/lunarstakes' },

  /* Drifter */
  { name: 'Lost in Transit', description: 'Free the Drifter from the Prison Matrix in Solutional Haunt.', unlocks: ['Characters.Drifter'], achievement: 'FreeDrifter', icon: 'characters/drifter' },
  { name: 'Drifter: Trash Compactor', description: 'As Drifter, carry 20 temporary items at once.', unlocks: ['Skills.Drifter.JunkCube'], achievement: 'DrifterJunkCubeAchievement', icon: 'skills/drifter/junkcube' },
  { name: 'Drifter: In The Bag', description: 'As Drifter, defeat a boss from the challenge of the Mountain using a Shrine of the Mountain.', unlocks: ['Skills.Drifter.TornadoSlam'], achievement: 'DrifterTornadoSlamAchievement', icon: 'skills/drifter/tornadoslam' },
  { name: 'Drifter: Leave No Trace', description: 'As Drifter, claim the contents of the lost backpack in the vault of Solutional Haunt.', unlocks: ['Skills.Drifter.Tinker'], achievement: 'DrifterTinkerAchievement', icon: 'skills/drifter/tinker' },
  { name: 'Drifter: Mastery', description: 'As Drifter, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Drifter.Alt1'], achievement: 'DrifterClearGameMonsoon', icon: 'skins/drifter/alt1' },

  /* Operator */
  { name: 'Operator: Is That All You Got?', description: 'As Operator, kill 4 different types of monsters with a single ricochet from your primary.', unlocks: ['Skills.DroneTech.Trickshot'], achievement: 'DroneTechTrickshot', icon: 'skills/dronetech/trickshot' },
  { name: 'Operator: Not So Different', description: 'Defeat the teleporter boss on Conduit Canyon without touching the ground.', unlocks: ['Skills.DroneTech.DefeatVultureBossWhileAirborne'], achievement: 'DroneTechDefeatVultureBossWhileAirborne', icon: 'skills/dronetech/defeatvulturebosswhileairborne' },
  { name: 'Operator: That Just Happened', description: 'As Operator, keep an Elder Lemurian airborne for 10 seconds.', unlocks: ['Skills.DroneTech.JuggleLemurian'], achievement: 'DroneTechJuggleLemurian', icon: 'skills/dronetech/jugglelemurian' },
  { name: 'Operator: Putting Together a Team', description: 'As Operator, recruit five different drones.', unlocks: ['Skills.DroneTech.UniqueDrones'], achievement: 'DroneTechUniqueDrones', icon: 'skills/dronetech/uniquedrones' },
  { name: 'Operator: Mastery', description: 'As Operator, beat the game or obliterate on Monsoon.', unlocks: ['Skins.DroneTech.Alt1'], achievement: 'DroneTechClearGameMonsoon', icon: 'skins/dronetech/alt1' },

  /* Artifacts */
  { name: 'Trial of Spite', description: 'Complete the Trial of Spite.', unlocks: ['Artifacts.Bomb'], achievement: 'ObtainArtifactBomb', icon: 'artifacts/bomb' },
  { name: 'Trial of Command', description: 'Complete the Trial of Command.', unlocks: ['Artifacts.Command'], achievement: 'ObtainArtifactCommand', icon: 'artifacts/command' },
  { name: 'Trial of Delusion', description: 'Complete the Trial of Delusion.', unlocks: ['Artifacts.Delusion'], achievement: 'ObtainArtifactDelusion', icon: 'artifacts/delusion' },
  { name: 'Trial of Devotion', description: 'Complete the Trial of Devotion.', unlocks: ['Artifacts.Devotion'], achievement: 'ObtainArtifactDevotion', icon: 'artifacts/devotion' },
  { name: 'Trial of Honor', description: 'Complete the Trial of Honor.', unlocks: ['Artifacts.EliteOnly'], achievement: 'ObtainArtifactEliteOnly', icon: 'artifacts/eliteonly' },
  { name: 'Trial of Enigma', description: 'Complete the Trial of Enigma.', unlocks: ['Artifacts.Enigma'], achievement: 'ObtainArtifactEnigma', icon: 'artifacts/enigma' },
  { name: 'Trial of Chaos', description: 'Complete the Trial of Chaos.', unlocks: ['Artifacts.FriendlyFire'], achievement: 'ObtainArtifactFriendlyFire', icon: 'artifacts/friendlyfire' },
  { name: 'Trial of Glass', description: 'Complete the Trial of Glass.', unlocks: ['Artifacts.Glass'], achievement: 'ObtainArtifactGlass', icon: 'artifacts/glass' },
  { name: 'Trial of Dissonance', description: 'Complete the Trial of Dissonance.', unlocks: ['Artifacts.MixEnemy'], achievement: 'ObtainArtifactMixEnemy', icon: 'artifacts/mixenemy' },
  { name: 'Trial of Evolution', description: 'Complete the Trial of Evolution.', unlocks: ['Artifacts.MonsterTeamGainsItems'], achievement: 'ObtainArtifactMonsterTeamGainsItems', icon: 'artifacts/monsterteamgainsitems' },
  { name: 'Trial of Metamorphosis', description: 'Complete the Trial of Metamorphosis.', unlocks: ['Artifacts.RandomSurvivorOnRespawn'], achievement: 'ObtainArtifactRandomSurvivorOnRespawn', icon: 'artifacts/randomsurvivoronrespawn' },
  { name: 'Trial of Sacrifice', description: 'Complete the Trial of Sacrifice.', unlocks: ['Artifacts.Sacrifice'], achievement: 'ObtainArtifactSacrifice', icon: 'artifacts/sacrifice' },
  { name: 'Trial of Vengeance', description: 'Complete the Trial of Vengeance.', unlocks: ['Artifacts.ShadowClone'], achievement: 'ObtainArtifactShadowClone', icon: 'artifacts/shadowclone' },
  { name: 'Trial of Kin', description: 'Complete the Trial of Kin.', unlocks: ['Artifacts.SingleMonsterType'], achievement: 'ObtainArtifactSingleMonsterType', icon: 'artifacts/singlemonstertype' },
  { name: 'Trial of Swarms', description: 'Complete the Trial of Swarms.', unlocks: ['Artifacts.Swarms'], achievement: 'ObtainArtifactSwarms', icon: 'artifacts/swarms' },
  { name: 'Trial of Death', description: 'Complete the Trial of Death.', unlocks: ['Artifacts.TeamDeath'], achievement: 'ObtainArtifactTeamDeath', icon: 'artifacts/teamdeath' },
  { name: 'Trial of Frailty', description: 'Complete the Trial of Frailty.', unlocks: ['Artifacts.WeakAssKnees'], achievement: 'ObtainArtifactWeakAssKnees', icon: 'artifacts/weakassknees' },
  { name: 'Trial of Soul', description: 'Complete the Trial of Soul.', unlocks: ['Artifacts.WispOnDeath'], achievement: 'ObtainArtifactWispOnDeath', icon: 'artifacts/wispondeath' },
  { name: 'Experienced Rebirth', description: 'Gain the power of another life by offering to the Shrine of Rebirth.', unlocks: ['Artifacts.Rebirth'], achievement: 'ObtainArtifactRebirth', icon: 'artifacts/rebirth' },
  { name: 'Trial of Prestige', description: 'Complete the Trial of Prestige.', unlocks: ['Artifacts.Prestige'], achievement: 'ObtainArtifactPrestige', icon: 'artifacts/prestige' },
] as const;