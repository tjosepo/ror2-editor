export interface Challenge {
  name: string;
  description: string;
  unlocks: string[];
  achievement: string;
  icon: string;
  dlc: DLCType;
  unlockType: UnlockType;
  rarity?: ItemRarity;
  character?: Character;
}

export enum UnlockType {
  Item,
  Character,
  Skill,
  Skin,
  Artifact,
}

export enum ItemRarity {
  White,
  Green,
  Red,
  Yellow,
  Lunar,
  Void,
  Equipment
}

export enum Character {
  Commando,
  Huntress,
  Bandit,
  MUL_T,
  Engineer,
  Artificer,
  Mercenary,
  REX,
  Loader,
  Acrid,
  Captain,
  Railgunner,
  VoidFiend,
  Seeker,
  Chef,
  FalseSon,
}

export enum DLCType {
  Base,
  SurvivorsOfTheVoid,
  SeekersOfTheStorm,
}

export const challenges: Challenge[] = [
  /* White items */
  { name: '...Maybe One More.', description: 'Duplicate the same item 7 times in a row with a 3D Printer.', unlocks: ['Items.Firework'], achievement: 'RepeatedlyDuplicateItems', icon: 'items/firework', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.White },
  { name: 'Elite Slayer', description: 'Defeat an Elite-type monster.', unlocks: ['Items.Medkit'], achievement: 'KillEliteMonster', icon: 'items/medkit', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.White },
  { name: 'Keyed Up', description: 'Defeat the teleporter boss in under 15 seconds.', unlocks: ['Items.TreasureCache'], achievement: 'KillBossQuick', icon: 'items/treasurecache', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.White },
  { name: '"Is This Bugged?"', description: 'Fail the shrine of chance 3 times in a row.', unlocks: ['Items.Hoof'], achievement: 'FailShrineChance', icon: 'items/hoof', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.White },
  { name: 'The Basics', description: 'Discover 10 unique white items.', unlocks: ['Items.Crowbar'], achievement: 'Discover10UniqueTier1', icon: 'items/crowbar', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.White },
  { name: 'Learning Process', description: 'Die 5 times.', unlocks: ['Items.Bear'], achievement: 'Die5Times', icon: 'items/bear', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.White },
  { name: 'Flawless', description: 'Fully charge a teleporter without getting hit.', unlocks: ['Items.SecondarySkillMagazine'], achievement: 'CompleteTeleporterWithoutInjury', icon: 'items/secondaryskillmagazine', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.White },
  { name: 'Advancement', description: 'Complete a teleporter event.', unlocks: ['Items.BossDamageBonus'], achievement: 'CompleteTeleporter', icon: 'items/bossdamagebonus', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.White },

  /* Green items */
  { name: 'Rapidfire', description: 'Reach +200% attack speed.', unlocks: ['Items.AttackSpeedOnCrit'], achievement: 'AttackSpeed', icon: 'items/attackspeedoncrit', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Green },
  { name: 'Warmonger', description: 'Complete three Combat Shrines in a single stage.', unlocks: ['Items.EnergizedOnEquipmentUse'], achievement: 'MultiCombatShrine', icon: 'items/energizedonequipmentuse', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Green },
  { name: 'Going Fast Recommended', description: 'Reach +300% movespeed (includes sprinting)', unlocks: ['Items.JumpBoost'], achievement: 'MoveSpeed', icon: 'items/jumpboost', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Green },
  { name: 'Slaughter', description: 'Defeat 3000 enemies.', unlocks: ['Items.Infusion'], achievement: 'KillTotalEnemies', icon: 'items/infusion', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Green },
  { name: 'Cut Down', description: 'Defeat 500 Elite monsters', unlocks: ['Items.ExecuteLowHealthElite'], achievement: 'KillElitesMilestone', icon: 'items/executelowhealthelite', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Green },
  { name: 'Experimenting', description: 'Pick up 5 different types of Equipment.', unlocks: ['Items.EquipmentMagazine'], achievement: 'Discover5Equipment', icon: 'items/equipmentmagazine', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Green },
  { name: 'Prismatically Aligned', description: 'Complete a Prismatic Trial.', unlocks: ['Items.HealOnCrit'], achievement: 'CompletePrismaticTrial', icon: 'items/healoncrit', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Green },
  { name: 'Death Do Us Part', description: 'Discover the hidden chamber in the Abandoned Aqueduct.', unlocks: ['Items.ElementalRings'], achievement: 'KillElementalLemurians', icon: 'items/elementalrings', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Green },
  { name: 'Glorious Battle', description: 'Charge the teleporter with less than 10% health.', unlocks: ['Items.WarCryOnMultiKill'], achievement: 'ChargeTeleporterWhileNearDeath', icon: 'items/warcryonmultikill', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Green },
  { name: 'Automation Activation', description: 'Activate 6 turrets in a single run.', unlocks: ['Items.Squid'], achievement: 'AutomationActivation', icon: 'items/squid', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Green },

  /* Red items */
  { name: 'Newtist', description: 'Discover and activate 8 unique Newt Altars.', unlocks: ['Items.Talisman'], achievement: 'FindUniqueNewtStatues', icon: 'items/talisman', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Red },
  { name: 'The Long Road', description: 'Complete 20 stages in a single run.', unlocks: ['Items.Clover'], achievement: 'Complete20Stages', icon: 'items/clover', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Red },
  { name: 'Deicide', description: 'Defeat an Elite boss on Monsoon difficulty', unlocks: ['Items.KillEliteFrenzy'], achievement: 'HardEliteBossKill', icon: 'items/killelitefrenzy', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Red },
  { name: 'The Lone Survivor', description: 'Stay alive for 30 consecutive minutes.', unlocks: ['Items.ExtraLife'], achievement: 'StayAlive1', icon: 'items/extralife', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Red },
  { name: 'Naturopath', description: 'Without healing, reach and complete the 3rd teleporter event.', unlocks: ['Items.IncreaseHealing'], achievement: 'CompleteThreeStagesWithoutHealing', icon: 'items/increasehealing', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Red },
  { name: 'Macho', description: 'Deal 5,000 damage in one attack. (Can be multiple hits, piercing, crits, etc.)', unlocks: ['Items.ShockNearby'], achievement: 'HardHitter', icon: 'items/shocknearby', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Red },
  { name: 'Her Concepts', description: 'Find the altar to N\'kuhana.', unlocks: ['Items.NovaOnHeal'], achievement: 'FindDevilAltar', icon: 'items/novaonheal', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Red },
  { name: 'Deja Vu?', description: 'Loop back to the first stage.', unlocks: ['Items.BounceNearby'], achievement: 'LoopOnce', icon: 'items/bouncenearby', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Red },

  /* Lunar items */
  { name: 'The Calm', description: 'Beat the game on Monsoon difficulty.', unlocks: ['Items.LunarBadLuck'], achievement: 'CompleteMainEndingHard', icon: 'items/lunarbadluck', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Lunar },
  { name: 'The Demons And The Crabs', description: 'Kill 20 Hermit Crabs by chasing them off the edge of the map.', unlocks: ['Items.AutoCastEquipment'], achievement: 'SuicideHermitCrabs', icon: 'items/autocastequipment', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Lunar },
  { name: 'Never Back Down', description: 'In 4 consecutive stages don\'t leave the teleport radius until it is fully charged.', unlocks: ['Items.FocusConvergence'], achievement: 'NeverBackDown', icon: 'items/focusconvergence', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Lunar },
  { name: 'Blockade Breaker', description: 'Kill 15 boss enemies in a single run.', unlocks: ['Items.LunarUtilityReplacement', 'Items.LunarPrimaryReplacement'], achievement: 'KillBossQuantityInRun', icon: 'items/blockadebreaker', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Lunar },
  { name: 'Moon Worshipper', description: 'Carry 5 Lunar items in a single run.', unlocks: ['Items.Meteor'], achievement: 'CarryLunarItems', icon: 'items/meteor', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Lunar },
  { name: 'Cosmic Explorer', description: 'Discover and enter three unique portals.', unlocks: ['Items.TonicAffliction'], achievement: 'UseThreePortals', icon: 'items/tonicaffliction', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Lunar },
  { name: 'Multikill!', description: 'Kill 15 enemies simultaneously.', unlocks: ['Items.BurnNearby'], achievement: 'MajorMultikill', icon: 'items/burnnearby', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Lunar },

  /* Equipment */
  { name: 'Warm For Life', description: 'Die three times while burning.', unlocks: ['Items.Cleanse'], achievement: 'BurnToDeath', icon: 'items/cleanse', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },
  { name: 'Mechanic', description: 'Repair 30 drones or turrets.', unlocks: ['Items.DroneBackup'], achievement: 'TotalDronesRepaired', icon: 'items/dronebackup', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },
  { name: 'Funded!', description: 'Collect $30,480 total gold.', unlocks: ['Items.GoldGat'], achievement: 'TotalMoneyCollected', icon: 'items/goldgat', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },
  { name: '[REDACTED]', description: 'Open the Timed Security Chest on Rallypoint Delta.', unlocks: ['Items.BFG'], achievement: 'FindTimedChest', icon: 'items/bfg', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },
  { name: 'Blackout', description: 'Defeat the Guardian of Gilded Coast without any beacons deactivating.', unlocks: ['Items.Gateway'], achievement: 'KillGoldTitanInOneCycle', icon: 'items/gateway', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },
  { name: 'One with the Woods', description: 'Fully upgrade a Shrine of the Woods.', unlocks: ['Items.PassiveHealing'], achievement: 'MaxHealingShrine', icon: 'items/passivehealing', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },
  { name: 'Bookworm', description: 'Collect 10 Monster or Environment Logs.', unlocks: ['Items.Scanner'], achievement: 'LogCollector', icon: 'items/scanner', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },
  { name: 'Ascendant', description: 'Defeat the teleporter bosses after activating 2 Shrines of the Mountain.', unlocks: ['Items.Lightning'], achievement: 'CompleteMultiBossShrine', icon: 'items/lightning', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },
  { name: 'Cleanup Duty', description: 'Destroy 20 flying rocks in Sky Meadow.', unlocks: ['Items.Recycle'], achievement: 'CleanupDuty', icon: 'items/recycle', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },
  { name: 'I Love Dying!', description: 'Die 20 times.', unlocks: ['Items.DeathProjectile'], achievement: 'Die20Times', icon: 'items/deathprojectile', dlc: DLCType.Base, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },
  { name: 'King of the Hill', description: 'Journey to the Prime Meridian and defeat the False Son.', unlocks: ['Items.HealAndRevive'], achievement: 'DefeatFalseSon', icon: 'items/seedoflife', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Item, rarity: ItemRarity.Equipment },

  /* Commando skills */
  { name: 'Commando: Godspeed', description: 'As Commando, fully charge the first-stage teleporter before the timer hits 5 minutes.', unlocks: ['Skills.Commando.SlideJet'], achievement: 'CommandoFastFirstStageClear', icon: 'skills/commando/slidejet', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Commando },
  { name: 'Commando: Rolling Thunder', description: 'As Commando, land the killing blow on an Overloading Worm.', unlocks: ['Skills.Commando.FireShotgunBlast'], achievement: 'CommandoKillOverloadingWorm', icon: 'skills/commando/fireshotgunblast', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Commando },
  { name: 'Commando: Incorruptible', description: 'As Commando, clear 20 stages in a single run without picking up any Lunar items.', unlocks: ['Skills.Commando.ThrowGrenade'], achievement: 'CommandoNonLunarEndurance', icon: 'skills/commando/throwgrenade', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Commando },
  { name: 'Commando: Mastery', description: 'As Commando, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Commando.Alt1'], achievement: 'CommandoClearGameMonsoon', icon: 'skins/commando/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.Commando },
  { name: 'Commando: Cleared Prime Meridian', description: 'As Commando, complete the Event on Prime Meridian', unlocks: ['Skins.Commando.Alt2'], achievement: 'CommandoClearMeridianEvent', icon: 'skins/commando/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Commando },

  /* Huntress skills */
  { name: 'Huntress: One Shot, One Kill', description: 'As Huntress, collect and carry 12 Crowbars at once.', unlocks: ['Skills.Huntress.MiniBlink'], achievement: 'HuntressCollectCrowbars', icon: 'skills/huntress/miniblink', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Huntress },
  { name: 'Huntress: Finishing Touch', description: 'As Huntress, land a killing blow with every possible hit of a single glaive.', unlocks: ['Skills.Huntress.FlurryArrow'], achievement: 'HuntressAllGlaiveBouncesKill', icon: 'skills/huntress/flurryarrow', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Huntress },
  { name: 'Huntress: Piercing Wind', description: 'As Huntress, start and finish either Rallypoint Delta or Scorched Acres without falling below 100% health.', unlocks: ['Skills.Huntress.Snipe'], achievement: 'HuntressMaintainFullHealthOnFrozenWall', icon: 'skills/huntress/snipe', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Huntress },
  { name: 'Huntress: Mastery', description: 'As Huntress, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Huntress.Alt1'], achievement: 'HuntressClearGameMonsoon', icon: 'skins/huntress/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.Huntress },
  { name: 'Huntress: Cleared Prime Meridian', description: 'As Huntress, complete the Event on Prime Meridian.', unlocks: ['Skins.Huntress.Alt2'], achievement: 'HuntressClearMeridianEvent', icon: 'skins/huntress/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Huntress },

  /* Bandit skills */
  { name: 'Warrior', description: 'Reach and complete the 3rd Teleporter event without dying.', unlocks: ['Characters.Bandit2'], achievement: 'CompleteThreeStages', icon: 'characters/bandit2', dlc: DLCType.Base, unlockType: UnlockType.Character, character: Character.Bandit },
  { name: 'Bandit: Classic Man', description: "As Bandit, successfully use 'Lights Out' to reset your cooldowns 15 times in a row.", unlocks: ['Skills.Bandit2.Rifle'], achievement: 'Bandit2ConsecutiveReset', icon: 'skills/bandit2/rifle', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Bandit },
  { name: 'Bandit: Sadist', description: "As Bandit, kill a monster with 20 stacks of Hemorrhage.", unlocks: ['Skills.Bandit2.SerratedShivs'], achievement: 'Bandit2StackSuperBleed', icon: 'skills/bandit2/serrated-shivs', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Bandit },
  { name: 'Bandit: B&E', description: "As Bandit, kill the final boss with 'Lights Out'.", unlocks: ['Skills.Bandit2.SkullRevolver'], achievement: 'Bandit2RevolverFinale', icon: 'skills/bandit2/skull-revolver', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Bandit },
  { name: 'Bandit: Mastery', description: "As Bandit, beat the game or obliterate on Monsoon'.", unlocks: ['Skills.Bandit2.Alt1'], achievement: 'Bandit2ClearGameMonsoon', icon: 'skins/bandit2/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.Bandit },
  { name: 'Bandit: Cleared Prime Meridian', description: 'As Bandit, complete the Event on Prime Meridian.', unlocks: ['Skins.Bandit2.Alt2'], achievement: 'Bandit2ClearMeridianEvent', icon: 'skins/bandit2/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Bandit },

  /* MUL-T skills */
  { name: 'Verified', description: 'Complete the first Teleporter event 5 times.', unlocks: ['Characters.Toolbot'], achievement: 'RepeatFirstTeleporter', icon: 'characters/toolbot', dlc: DLCType.Base, unlockType: UnlockType.Character, character: Character.MUL_T },
  { name: 'MUL-T: Pest Control', description: 'As MUL-T, defeat two Beetle Queens without leaving the teleporter zone.', unlocks: ['Skills.Toolbot.Grenade'], achievement: 'ToolbotGuardTeleporter', icon: 'skills/toolbot/grenade', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.MUL_T },
  { name: 'MUL-T: Gotcha!', description: 'As MUL-T, land the killing blow on an Imp Overlord with the Preon Accumulator.', unlocks: ['Skills.Toolbot.Buzzsaw'], achievement: 'ToolbotKillImpBossWithBfg', icon: 'skills/toolbot/buzzsaw', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.MUL_T },
  { name: 'MUL-T: Seventh Day', description: 'As MUL-T, clear the Void Fields on Stage 7 or later.', unlocks: ['Skills.Toolbot.SpecialAlt'], achievement: 'ToolbotBeatArenaLater', icon: 'skills/toolbot/special-alt', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.MUL_T },
  { name: 'MUL-T: Mastery', description: 'As MUL-T, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Toolbot.Alt1'], achievement: 'ToolbotClearGameMonsoon', icon: 'skins/toolbot/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.MUL_T },
  { name: 'MUL-T: Cleared Prime Meridian', description: 'As MUL-T, complete the Event on Prime Meridian.', unlocks: ['Skins.Toolbot.Alt2'], achievement: 'ToolbotClearMeridianEvent', icon: 'skins/toolbot/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.MUL_T },

  /* Engineer skills */
  { name: 'Engineering Perfection', description: 'Complete 30 stages.', unlocks: ['Characters.Engineer'], achievement: 'Complete30StagesCareer', icon: 'characters/engineer', dlc: DLCType.Base, unlockType: UnlockType.Character, character: Character.Engineer },
  { name: 'Engineer: Better With Friends', description: 'As Engineer, recruit 12 minions at one time.', unlocks: ['Skills.Engi.WalkerTurret'], achievement: 'EngiArmy', icon: 'skills/engi/walkerturret', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Engineer },
  { name: 'Engineer: 100% Calculated', description: 'As Engineer, defeat the teleporter boss in less than 5 seconds after it spawns.', unlocks: ['Skills.Engi.SpiderMine'], achievement: 'EngiKillBossQuick', icon: 'skills/engi/spidermine', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Engineer },
  { name: 'Engineer: Zero Sum', description: 'As Engineer, finish chargin the teleporter with zero monsters remaining on the stage.', unlocks: ['Skills.Engi.Harpoon'], achievement: 'EngiClearTeleporterWithZeroMonsters', icon: 'skills/engi/harpoon', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Engineer },
  { name: 'Engineer: Mastery', description: 'As Engineer, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Engi.Alt1'], achievement: 'EngiClearGameMonsoon', icon: 'skins/engi/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.Engineer },
  { name: 'Engineer: Cleared Prime Meridian', description: 'As Engineer, complete the Event on Prime Meridian.', unlocks: ['Skins.Engi.Alt2'], achievement: 'EngiClearMeridianEvent', icon: 'skins/engi/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Engineer },

  /* Artificer skills */
  { name: 'Pause', description: 'Free the survivor suspended in time.', unlocks: ['Characters.Mage'], achievement: 'FreeMage', icon: 'characters/mage', dlc: DLCType.Base, unlockType: UnlockType.Character, character: Character.Artificer },
  { name: 'Artificer: Massacre', description: 'As Artificer, perform a multikill of 20 enemies.', unlocks: ['Skills.Mage.LightningBolt'], achievement: 'MageMultiKill', icon: 'skills/mage/lightningbolt', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Artificer },
  { name: 'Artificer: Orbital Bombardment', description: 'As Artificer, kill 15 enemies before touching the ground.', unlocks: ['Skills.Mage.FlyUp'], achievement: 'MageAirborneMultiKill', icon: 'skills/mage/flyup', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Artificer },
  { name: 'Artificer: Chunked!', description: 'As Artificer, fully defeat the teleport boss in a one-second burst of damage.', unlocks: ['Skills.Mage.IceBomb'], achievement: 'MageFastBoss', icon: 'skills/mage/icebomb', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Artificer },
  { name: 'Artificer: Mastery', description: 'As Artificer, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Mage.Alt1'], achievement: 'MageClearGameMonsoon', icon: 'skins/mage/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.Artificer },
  { name: 'Artificer: Cleared Prime Meridian', description: 'As Artificer, complete the Event on Prime Meridian.', unlocks: ['Skins.Mage.Alt2'], achievement: 'MageClearMeridianEvent', icon: 'skins/mage/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Artificer },

  /* Mercenary skills */
  { name: 'True Respite', description: 'Obliterate yourself at the Obelisk.', unlocks: ['Characters.Mercenary'], achievement: 'CompleteUnknownEnding', icon: 'characters/mercenary', dlc: DLCType.Base, unlockType: UnlockType.Character, character: Character.Mercenary },
  { name: 'Mercenary: Ethereal', description: 'As Mercenary, complete a Prismatic Trial without falling below 100% health.', unlocks: ['Skills.Merc.EvisProjectile'], achievement: 'MercCompleteTrialWithFullHealth', icon: 'skills/merc/evisprojectile', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Mercenary },
  { name: 'Mercenary: Flash of Blades', description: 'As Mercenary, use 20 abilities in 10 seconds.', unlocks: ['Skills.Merc.FocusedAssault'], achievement: 'MercXSkillsInYSeconds', icon: 'skills/merc/focused-assault', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Mercenary },
  { name: 'Mercenary: Demon of the Skies', description: 'As Mercenary, kill 15 enemies before touching the ground.', unlocks: ['Skills.Merc.Uppercut'], achievement: 'MercDontTouchGround', icon: 'skills/merc/uppercut', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Mercenary },
  { name: 'Mercenary: Mastery', description: 'As Mercenary, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Merc.Alt1'], achievement: 'MercClearGameMonsoon', icon: 'skins/merc/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.Mercenary },
  { name: 'Mercenary: Cleared Prime Meridian', description: 'As Mercenary, complete the Event on Prime Meridian.', unlocks: ['Skins.Merc.Alt2'], achievement: 'MercClearMeridianEvent', icon: 'skins/merc/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Mercenary },

  /* REX skills */
  { name: 'Power Plant', description: 'Repair the broken robot with an Escape Pod\'s Fuel Array.', unlocks: ['Characters.Treebot'], achievement: 'RescueTreebot', icon: 'characters/treebot', dlc: DLCType.Base, unlockType: UnlockType.Character, character: Character.REX },
  { name: 'REX: Bushwhacked', description: 'As REX, complete an entire teleporter event while under 50% health.', unlocks: ['Skills.Treebot.Barrage'], achievement: 'TreebotLowHealthTeleporter', icon: 'skills/treebot/barrage', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.REX },
  { name: 'REX: Bushwhacked', description: 'As REX, complete an entire teleporter event while under 50% health.', unlocks: ['Skills.Treebot.SpecialAlt1'], achievement: 'TreebotBigHeal', icon: 'skills/treebot/special-alt1', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.REX },
  { name: 'REX: Dunked', description: 'As REX, kill a Clay Dunestrider on Abandoned Aqueduct by throwing it into a pit.', unlocks: ['Skills.Treebot.PlantSonicBoom'], achievement: 'TreebotDunkClayBoss', icon: 'skills/treebot/plantsonicboom', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.REX },
  { name: 'REX: Mastery', description: 'As REX, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Treebot.Alt1'], achievement: 'TreebotClearGameMonsoon', icon: 'skins/treebot/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.REX },
  { name: 'Rex: Cleared Prime Meridian', description: 'As Rex, complete the Event on Prime Meridian.', unlocks: ['Skins.Treebot.Alt2'], achievement: 'TreebotClearMeridianEvent', icon: 'skins/treebot/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.REX },

  /* Loader skills */
  { name: 'Guidance Offline', description: 'Defeat the unique guardian of Siren\'s Call.', unlocks: ['Characters.Loader'], achievement: 'DefeatSuperRoboBallBoss', icon: 'characters/loader', dlc: DLCType.Base, unlockType: UnlockType.Character, character: Character.Loader },
  { name: 'Loader: Swing By', description: 'As Loader, reach and proceed through the Celestial Portal in 25 minutes or less.', unlocks: ['Skills.Loader.ZapFist'], achievement: 'LoaderSpeedRun', icon: 'skills/loader/zapfist', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Loader },
  { name: 'Loader: Earthshatter', description: 'As Loader, land a Charged Gauntlet hit at 300mph or higher.', unlocks: ['Skills.Loader.YankHook'], achievement: 'LoaderBigSlam', icon: 'skills/loader/yankhook', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Loader },
  { name: 'Loader: The Thunderdome', description: "As Loader, kill three other Loaders in the Bulwark's ambry.", unlocks: ['Skills.Loader.Thunderslam'], achievement: 'LoaderKillLoaders', icon: 'skills/loader/thunderslam', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Loader },
  { name: 'Loader: Mastery', description: 'As Loader, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Loader.Alt1'], achievement: 'LoaderClearGameMonsoon', icon: 'skins/loader/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.Loader },
  { name: 'Loader: Cleared Prime Meridian', description: 'As Loader, complete the Event on Prime Meridian.', unlocks: ['Skins.Loader.Alt2'], achievement: 'LoaderClearMeridianEvent', icon: 'skins/loader/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Loader },

  /* Acrid skills */
  { name: '...To Be Left Alone', description: 'Stabilize the Cell in the Void Fields.', unlocks: ['Characters.Croco'], achievement: 'BeatArena', icon: 'characters/croco', dlc: DLCType.Base, unlockType: UnlockType.Character, character: Character.Acrid },
  { name: 'Acrid: Pandemic', description: 'As Acrid, inflict Poison 1000 total times.', unlocks: ['Skills.Croco.ChainableLeap'], achievement: 'CrocoTotalInfectionsMilestone', icon: 'skills/croco/chainableleap', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Acrid },
  { name: 'Acrid: Bad Medecine', description: 'As Acrid, land the final blow on a Scavenger.', unlocks: ['Skills.Croco.CrocoBite'], achievement: 'CrocoKillScavenger', icon: 'skills/croco/crocobite', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Acrid },
  { name: 'Acrid: Easy Prey', description: 'As Acrid, land the killing blow on 50 total enemies that have 1 hit point left.', unlocks: ['Skills.Croco.PassivePoisonLethal'], achievement: 'CrocoKillWeakEnemiesMilestone', icon: 'skills/croco/passivepoisonlethal', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Acrid },
  { name: 'Acrid: Mastery', description: 'As Acrid, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Croco.Alt1'], achievement: 'CrocoClearGameMonsoon', icon: 'skins/croco/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.Acrid },
  { name: 'Acrid: Cleared Prime Meridian', description: 'As Acrid, complete the Event on Prime Meridian.', unlocks: ['Skins.Croco.Alt2'], achievement: 'CrocoClearMeridianEvent', icon: 'skins/croco/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Acrid },

  /* Captain skills */
  { name: 'Washed Away', description: 'Beat the game.', unlocks: ['Characters.Captain'], achievement: 'CompleteMainEnding', icon: 'characters/captain', dlc: DLCType.Base, unlockType: UnlockType.Character, character: Character.Captain },
  { name: 'Captain: Wanderlust', description: 'As Captain, visit 10 different environments in a single run', unlocks: ['Skills.Captain.CaptainSupplyDropEquipmentRestock'], achievement: 'CaptainVisitSeveralStages', icon: 'skills/captain/captainsupplydropequipmentrestock', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Captain },
  { name: 'Captain: Worth Every Penny', description: 'As Captain, repair and recruit a TC-280 Prototype.', unlocks: ['Skills.Captain.CaptainSupplyDropHacking'], achievement: 'CaptainBuyMegaDrone', icon: 'skills/captain/captainsupplydrophacking', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Captain },
  { name: 'Captain: Smushed', description: 'As Captain, kill the final boss using a Supply Beacon.', unlocks: ['Skills.Captain.UtilityAlt1'], achievement: 'CaptainSupplyDropFinale', icon: 'skills/captain/utility-alt1', dlc: DLCType.Base, unlockType: UnlockType.Skill, character: Character.Captain },
  { name: 'Captain: Mastery', description: 'As Captain, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Captain.Alt1'], achievement: 'CaptainClearGameMonsoon', icon: 'skins/captain/alt1', dlc: DLCType.Base, unlockType: UnlockType.Skin, character: Character.Captain },
  { name: 'Captain: Cleared Prime Meridian', description: 'As Captain, complete the Event on Prime Meridian.', unlocks: ['Skins.Captain.Alt2'], achievement: 'CaptainClearMeridianEvent', icon: 'skins/captain/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Captain },

  /* Railgunner skills */
  { name: 'Railgunner: Marksman', description: 'As Railgunner, fire 30 consecutive sniper shots without missing a Weak Point.', unlocks: ['Skills.Railgunner.SecondaryAlt1'], achievement: 'RailgunnerConsecutiveWeakPoints', icon: 'skills/railgunner/marksman', dlc: DLCType.SurvivorsOfTheVoid, unlockType: UnlockType.Skill, character: Character.Railgunner },
  { name: 'Railgunner: Annihilator', description: 'As Railgunner, deal 1,000,000 damage in one shot.', unlocks: ['Skills.Railgunner.UtilityAlt1'], achievement: 'RailgunnerDealMassiveDamage', icon: 'skills/railgunner/annihiliator', dlc: DLCType.SurvivorsOfTheVoid, unlockType: UnlockType.Skill, character: Character.Railgunner },
  { name: 'Railgunner: Trickshot', description: 'As Railgunner, get 3 kills with a single Supercharge shot while airborne.', unlocks: ['Skills.Railgunner.SpecialAlt1'], achievement: 'RailgunnerAirborneMultiKill', icon: 'skills/railgunner/trickshot', dlc: DLCType.SurvivorsOfTheVoid, unlockType: UnlockType.Skill, character: Character.Railgunner },
  { name: 'Railgunner: Mastery', description: 'As Railgunner, beat the game or obliterate on Monsoon.', unlocks: ['Skins.RailGunner.Alt1'], achievement: 'RailgunnerClearGameMonsoon', icon: 'skins/railgunner/alt1', dlc: DLCType.SurvivorsOfTheVoid, unlockType: UnlockType.Skin, character: Character.Railgunner },
  { name: 'Railgunner: Cleared Prime Meridian', description: 'As Railgunner, complete the Event on Prime Meridian.', unlocks: ['Skins.RailGunner.Alt2'], achievement: 'RailgunnerClearMeridianEvent', icon: 'skins/railgunner/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Railgunner },

  /* Void Fiend skills */
  { name: 'Dragged Below', description: 'Escape the Planetarium or complete wave 50 in Simulacrum.', unlocks: ['Characters.VoidSurvivor'], achievement: 'CompleteVoidEnding', icon: 'characters/voidsurvivor', dlc: DLCType.SurvivorsOfTheVoid, unlockType: UnlockType.Character, character: Character.VoidFiend },
  { name: 'Void Fiend: Mastery', description: 'As Void Fiend, beat the game or obliterate on Monsoon.', unlocks: ['Skins.VoidSurvivor.Alt1'], achievement: 'VoidSurvivorClearGameMonsoon', icon: 'skins/voidsurvivor/alt1', dlc: DLCType.SurvivorsOfTheVoid, unlockType: UnlockType.Skin, character: Character.VoidFiend },
  { name: 'Void Fiend: Cleared Prime Meridian', description: 'As Void Fiend, complete the Event on Prime Meridian.', unlocks: ['Skins.VoidSurvivor.Alt2'], achievement: 'VoidSurvivorClearMeridianEvent', icon: 'skins/voidsurvivor/alt2', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.VoidFiend },

  /* Seeker skills */
  { name: 'Seeker: Airborne Souls', description: 'As Seeker, hit three or more airborne enemies with a single use of the exploding third hit of Spirit Punch.', unlocks: ['Skills.Seeker.SoulSearch'], achievement: 'SeekerAirMultiHit', icon: 'skills/seeker/soulsearch', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skill, character: Character.Seeker },
  { name: 'Seeker: Mastery', description: 'As Seeker, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Seeker.Alt1'], achievement: 'SeekerClearGameMonsoon', icon: 'skins/seeker/alt1', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Seeker },

  /* Chef skills */
  { name: 'Order Up!', description: 'Complete the Wok\'s recipe in Reformed Altar.', unlocks: ['Characters.Chef'], achievement: 'ActivateChef', icon: 'characters/chef', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Character, character: Character.Chef },
  { name: 'Chef: Barbecued Bison Recipe Complete', description: 'As Chef complete 10 recipes by searing an oiled bison with Sear.', unlocks: ['Skills.Chef.YesChef'], achievement: 'BarbecueQuantityBisonInRun', icon: 'skills/chef/searbison', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skill, character: Character.Chef },
  { name: 'Chef: Mastery', description: 'As Chef, beat the game or obliterate on Monsoon.', unlocks: ['Skins.Chef.Alt1'], achievement: 'ChefClearGameMonsoon', icon: 'skins/chef/alt1', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.Chef },

  /* False Son skills */
  { name: 'Purified Freedom', description: 'Purify the Heart of the False Son using the Halcyon Seed.', unlocks: ['Characters.FalseSon'], achievement: 'UnlockFalseSon', icon: 'characters/falseson', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Character, character: Character.FalseSon },
  { name: 'False Son: Stare Them Down', description: 'As False Son, kill 15 enemies with one activation of Laser of the Father.', unlocks: ['Skills.FalseSon.LaserBurst'], achievement: 'FalseSonLaserMultiKill', icon: 'skills/falseson/laserburst', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skill, character: Character.FalseSon },
  { name: 'False Son: Mastery', description: 'As False Son, beat the game or obliterate on Monsoon.', unlocks: ['Skins.FalseSon.Alt1'], achievement: 'FalseSonClearGameMonsoon', icon: 'skins/falseson/alt1', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Skin, character: Character.FalseSon },

  /* Artifacts */
  { name: 'Trial of Spite', description: 'Complete the Trial of Spite.', unlocks: ['Artifacts.Bomb'], achievement: 'ObtainArtifactBomb', icon: 'artifacts/bomb', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Command', description: 'Complete the Trial of Command.', unlocks: ['Artifacts.Command'], achievement: 'ObtainArtifactCommand', icon: 'artifacts/command', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Delusion', description: 'Complete the Trial of Delusion.', unlocks: ['Artifacts.Delusion'], achievement: 'ObtainArtifactDelusion', icon: 'artifacts/delusion', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Devotion', description: 'Complete the Trial of Devotion.', unlocks: ['Artifacts.Devotion'], achievement: 'ObtainArtifactDevotion', icon: 'artifacts/devotion', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Honor', description: 'Complete the Trial of Honor.', unlocks: ['Artifacts.EliteOnly'], achievement: 'ObtainArtifactEliteOnly', icon: 'artifacts/eliteonly', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Enigma', description: 'Complete the Trial of Enigma.', unlocks: ['Artifacts.Enigma'], achievement: 'ObtainArtifactEnigma', icon: 'artifacts/enigma', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Chaos', description: 'Complete the Trial of Chaos.', unlocks: ['Artifacts.FriendlyFire'], achievement: 'ObtainArtifactFriendlyFire', icon: 'artifacts/friendlyfire', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Glass', description: 'Complete the Trial of Glass.', unlocks: ['Artifacts.Glass'], achievement: 'ObtainArtifactGlass', icon: 'artifacts/glass', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Dissonance', description: 'Complete the Trial of Dissonance.', unlocks: ['Artifacts.MixEnemy'], achievement: 'ObtainArtifactMixEnemy', icon: 'artifacts/mixenemy', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Evolution', description: 'Complete the Trial of Evolution.', unlocks: ['Artifacts.MonsterTeamGainsItems'], achievement: 'ObtainArtifactMonsterTeamGainsItems', icon: 'artifacts/monsterteamgainsitems', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Metamorphosis', description: 'Complete the Trial of Metamorphosis.', unlocks: ['Artifacts.RandomSurvivorOnRespawn'], achievement: 'ObtainArtifactRandomSurvivorOnRespawn', icon: 'artifacts/randomsurvivoronrespawn', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Sacrifice', description: 'Complete the Trial of Sacrifice.', unlocks: ['Artifacts.Sacrifice'], achievement: 'ObtainArtifactSacrifice', icon: 'artifacts/sacrifice', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Vengeance', description: 'Complete the Trial of Vengeance.', unlocks: ['Artifacts.ShadowClone'], achievement: 'ObtainArtifactShadowClone', icon: 'artifacts/shadowclone', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Kin', description: 'Complete the Trial of Kin.', unlocks: ['Artifacts.SingleMonsterType'], achievement: 'ObtainArtifactSingleMonsterType', icon: 'artifacts/singlemonstertype', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Swarms', description: 'Complete the Trial of Swarms.', unlocks: ['Artifacts.Swarms'], achievement: 'ObtainArtifactSwarms', icon: 'artifacts/swarms', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Death', description: 'Complete the Trial of Death.', unlocks: ['Artifacts.TeamDeath'], achievement: 'ObtainArtifactTeamDeath', icon: 'artifacts/teamdeath', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Frailty', description: 'Complete the Trial of Frailty.', unlocks: ['Artifacts.WeakAssKnees'], achievement: 'ObtainArtifactWeakAssKnees', icon: 'artifacts/weakassknees', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Trial of Soul', description: 'Complete the Trial of Soul.', unlocks: ['Artifacts.WispOnDeath'], achievement: 'ObtainArtifactWispOnDeath', icon: 'artifacts/wispondeath', dlc: DLCType.Base, unlockType: UnlockType.Artifact },
  { name: 'Experienced Rebirth', description: 'Gain the power of another life by offering to the Shrine of Rebirth.', unlocks: ['Artifacts.Rebirth'], achievement: 'ObtainArtifactRebirth', icon: 'artifacts/rebirth', dlc: DLCType.SeekersOfTheStorm, unlockType: UnlockType.Artifact },
] as const;