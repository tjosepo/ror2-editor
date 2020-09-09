export interface Challenge {
  name: string;
  description: string;
  unlock: string;
  achievement: string;
  icon: string;
}

export const challenges: Challenge[] = [
  /* White items */
  { name: '...Maybe One More.', description: 'Duplicate the same item 7 times in a row with a 3D Printer.', unlock: 'Items.Firework', achievement: 'RepeatedlyDuplicateItems', icon: '/icons/png/items/firework.png' },
  { name: 'Elite Slayer', description: 'Defeat an Elite-type monster.', unlock: 'Items.Medkit', achievement: 'KillEliteMonster', icon: '/icons/png/items/medkit.png' },
  { name: 'Keyed Up', description: 'Defeat the teleporter boss in under 15 seconds.', unlock: 'Items.TreasureCache', achievement: 'KillBossQuick', icon: '/icons/png/items/treasurecache.png' },
  { name: '"Is This Bugged?"', description: 'Fail the shrine of chance 3 times in a row.', unlock: 'Items.Hoof', achievement: 'FailShrineChance', icon: '/icons/png/items/hoof.png' },
  { name: 'The Basics', description: 'Discover 10 unique white items.', unlock: 'Items.Crowbar', achievement: 'Discover10UniqueTier1', icon: '/icons/png/items/crowbar.png' },
  { name: 'Learning Process', description: 'Die 5 times.', unlock: 'Items.Bear', achievement: 'Die5Times', icon: '/icons/png/items/bear.png' },
  { name: 'Flawless', description: 'Fully charge a teleporter without getting hit.', unlock: 'Items.SecondarySkillMagazine', achievement: 'CompleteTeleporterWithoutInjury', icon: '/icons/png/items/secondaryskillmagazine.png' },
  { name: 'Advancement', description: 'Complete a teleporter event.', unlock: 'Items.BossDamageBonus', achievement: 'CompleteTeleporter', icon: '/icons/png/items/bossdamagebonus.png' },

  /* Green items */
  { name: 'Rapidfire', description: 'Reach +200% attack speed.', unlock: 'Items.AttackSpeedOnCrit', achievement: 'AttackSpeed', icon: '/icons/png/items/firework.png' },
  { name: 'Warmonger', description: 'Complete three Combat Shrines in a single stage.', unlock: 'Items.EnergizedOnEquipmentUse', achievement: 'MultiCombatShrine', icon: '/icons/png/items/attackspeedoncrit.png' },
  { name: 'Going Fast Recommended', description: 'Reach +300% movespeed (includes sprinting)', unlock: 'Items.JumpBoost', achievement: 'MoveSpeed', icon: '/icons/png/items/jumpboost.png' },
  { name: 'Slaughter', description: 'Defeat 3000 enemies.', unlock: 'Items.Infusion', achievement: 'KillTotalEnemies', icon: '/icons/png/items/infusion.png' },
  { name: 'Cut Down', description: 'Defeat 500 Elite monsters', unlock: 'Items.ExecuteLowHealthElite', achievement: 'KillElitesMilestone', icon: '/icons/png/items/executelowhealthelite.png' },
  { name: 'Experimenting', description: 'Pick up 5 different types of Equipment.', unlock: 'Items.EquipmentMagazine', achievement: 'Discover5Equipment', icon: '/icons/png/items/equipmentmagazine.png' },
  { name: 'Prismatically Aligned', description: 'Complete a Prismatic Trial.', unlock: 'Items.HealOnCrit', achievement: 'CompletePrismaticTrial', icon: '/icons/png/items/healoncrit.png' },
  { name: 'Death Do Us Part', description: 'Discover the hidden chamber in the Abandoned Aqueduct.', unlock: 'Items.ElementalRings', achievement: 'KillElementalLemurians', icon: '/icons/png/items/elementalrings.png' },
  { name: 'Glorious Battle', description: 'Charge the teleporter with less than 10% health.', unlock: 'Items.WarCryOnMultiKill', achievement: 'ChargeTeleporterWhileNearDeath', icon: '/icons/png/items/warcryonmultikill.png' },
  { name: 'Automation Activation', description: 'Activate 6 turrets in a single run.', unlock: 'Items.Squid', achievement: 'AutomationActivation', icon: '/icons/png/items/squid.png' },

  /* Red items */
  { name: 'Newtist', description: 'Discover and activate 8 unique Newt Altars.', unlock: 'Items.Talisman', achievement: 'FindUniqueNewtStatues', icon: '/icons/png/items/firework.png' },
  { name: 'The Long Road', description: 'Complete 20 stages in a single run.', unlock: 'Items.Clover', achievement: 'Complete20Stages', icon: '/icons/png/items/firework.png' },
  { name: 'Deicide', description: 'Defeat an Elite boss on Monsoon difficulty', unlock: 'Items.KillEliteFrenzy', achievement: 'HardEliteBossKill', icon: '/icons/png/items/firework.png' },
  { name: 'The Lone Survivor', description: 'Stay alive for 30 consecutive minutes.', unlock: 'Items.ExtraLife', achievement: 'StayAlive1', icon: '/icons/png/items/firework.png' },
  { name: 'Naturopath', description: 'Without healing, reach and complete the 3rd teleporter event.', unlock: 'Items.IncreaseHealing', achievement: 'CompleteThreeStagesWithoutHealing', icon: '/icons/png/items/firework.png' },
  { name: 'Macho', description: 'Deal 5,000 damage in one attack. (Can be multiple hits, piercing, crits, etc.)', unlock: 'Items.ShockNearby', achievement: 'HardHitter', icon: '/icons/png/items/firework.png' },
  { name: 'Her Concepts', description: 'Find the altar to N\'kuhana.', unlock: 'Items.NovaOnHeal', achievement: 'FindDevilAltar', icon: '/icons/png/items/firework.png' },
  { name: 'Deja Vu?', description: 'Loop back to the first stage.', unlock: 'Items.BounceNearby', achievement: 'LoopOnce', icon: '/icons/png/items/firework.png' },

  /* Lunar items */
  { name: 'The Calm', description: 'Beat the game on Monsoon difficulty.', unlock: 'Items.LunarBadLuck', achievement: 'CompleteMainEndingHard', icon: '/icons/png/items/firework.png' },
  { name: 'The Demons And The Crabs', description: 'Kill 20 Hermit Crabs by chasing them off the edge of the map.', unlock: 'Items.AutoCastEquipment', achievement: 'SuicideHermitCrabs', icon: '/icons/png/items/firework.png' },
  { name: 'Never Back Down', description: 'In 4 consecutive stages don\'t leave the teleport radius until it is fully charged.', unlock: 'Items.FocusConvergence', achievement: 'NeverBackDown', icon: '/icons/png/items/firework.png' },
  //{name: 'Blockade Breaker', description: 'Kill 15 boss enemies in a single run.', unlock: 'Items.LunarUtilityReplacement Items.LunarPrimaryReplacement', achievement: 'KillBossQuantityInRun'},
  { name: 'Moon Worshipper', description: 'Carry 5 Lunar items in a single run.', unlock: 'Items.Meteor', achievement: 'CarryLunarItems', icon: '/icons/png/items/firework.png' },
  { name: 'Cosmic Explorer', description: 'Discover and enter three unique portals.', unlock: 'Items.TonicAffliction', achievement: 'UseThreePortals', icon: '/icons/png/items/firework.png' },
  { name: 'Multikill!', description: 'Kill 15 enemies simultaneously.', unlock: 'Items.BurnNearby', achievement: 'MajorMultikill', icon: '/icons/png/items/firework.png' },

  /* Equipment */
  { name: 'Warm For Life', description: 'Die three times while burning.', unlock: 'Items.Cleanse', achievement: 'BurnToDeath', icon: '/icons/png/items/firework.png' },
  { name: 'Mechanic', description: 'Repair 30 drones or turrets.', unlock: 'Items.DroneBackup', achievement: 'TotalDronesRepaired', icon: '/icons/png/items/firework.png' },
  { name: 'Funded!', description: 'Collect $30,480 total gold.', unlock: 'Items.GoldGat', achievement: 'TotalMoneyCollected', icon: '/icons/png/items/firework.png' },
  { name: '[REDACTED]', description: 'Open the Timed Security Chest on Rallypoint Delta.', unlock: 'Items.BFG', achievement: 'FindTimedChest', icon: '/icons/png/items/firework.png' },
  { name: 'Blackout', description: 'Defeat the Guardian of Gilded Coast without any beacons deactivating.', unlock: 'Items.Gateway', achievement: 'KillGoldTitanInOneCycle', icon: '/icons/png/items/firework.png' },
  { name: 'One with the Woods', description: 'Fully upgrade a Shrine of the Woods.', unlock: 'Items.PassiveHealing', achievement: 'MaxHealingShrine', icon: '/icons/png/items/firework.png' },
  { name: 'Bookworm', description: 'Collect 10 Monster or Environment Logs.', unlock: 'Items.Scanner', achievement: 'LogCollector', icon: '/icons/png/items/firework.png' },
  { name: 'Ascendant', description: 'Defeat the teleporter bosses after activating 2 Shrines of the Mountain.', unlock: 'Items.Lightning', achievement: 'CompleteMultiBossShrine', icon: '/icons/png/items/firework.png' },
  { name: 'Cleanup Duty', description: 'Destroy 20 flying rocks in Sky Meadow.', unlock: 'Items.Recycle', achievement: 'CleanupDuty', icon: '/icons/png/items/firework.png' },
  { name: 'I Love Dying!', description: 'Die 20 times.', unlock: 'Items.DeathProjectile', achievement: 'Die20Times', icon: '/icons/png/items/firework.png' },

  /* Characters */
  { name: 'Warrior', description: 'Reach and complete the 3rd Teleporter event without dying.', unlock: 'Characters.Huntress', achievement: 'CompleteThreeStages', icon: '/icons/png/items/firework.png' },
  { name: 'Verified', description: 'Complete the first Teleporter event 5 times.', unlock: 'Characters.Toolbot', achievement: 'RepeatFirstTeleporter', icon: '/icons/png/items/firework.png' },
  { name: 'Engineering Perfection', description: 'Complete 30 stages.', unlock: 'Characters.Engineer', achievement: 'Complete30StagesCareer', icon: '/icons/png/items/firework.png' },
  { name: 'Pause', description: 'Free the survivor suspended in time.', unlock: 'Characters.Mage', achievement: 'FreeMage', icon: '/icons/png/items/firework.png' },
  { name: 'True Respite', description: 'Obliterate yourself at the Obelisk.', unlock: 'Characters.Mercenary', achievement: 'CompleteUnknownEnding', icon: '/icons/png/items/firework.png' },
  { name: 'Power Plant', description: 'Repair the broken robot with an Escape Pod\'s Fuel Array.', unlock: 'Characters.Treebot', achievement: 'RescueTreebot', icon: '/icons/png/items/firework.png' },
  { name: 'Guidance Offline', description: 'Defeat the unique guardian of Siren\'s Call.', unlock: 'Characters.Loader', achievement: 'DefeatSuperRoboBallBoss', icon: '/icons/png/items/firework.png' },
  { name: '...To Be Left Alone', description: 'Stabilize the Cell in the Void Fields.', unlock: 'Characters.Croco', achievement: 'BeatArena', icon: '/icons/png/items/firework.png' },
  { name: 'Washed Away', description: 'Beat the game.', unlock: 'Characters.Captain', achievement: 'CompleteMainEnding', icon: '/icons/png/items/firework.png' },

  /* Commando skills */
  { name: 'Commando: Godspeed', description: 'As Commando, fully charge the first-stage teleporter before the timer hits 5 minutes.', unlock: 'Skills.Commando.SlideJet', achievement: 'CommandoFastFirstStageClear', icon: '/icons/png/items/firework.png' },
  { name: 'Commando: Incorruptible', description: 'As Commando, clear 20 stages in a single run without picking up any Lunar items.', unlock: 'Skills.Commando.ThrowGrenade', achievement: 'CommandoNonLunarEndurance', icon: '/icons/png/items/firework.png' },
  { name: 'Commando: Rolling Thunder', description: 'As Commando, land the killing blow on an Overloading Worm.', unlock: 'Skills.Commando.FireShotgunBlast', achievement: 'CommandoKillOverloadingWorm', icon: '/icons/png/items/firework.png' },
  { name: 'Commando: Mastery', description: 'As Commando, beat the game or obliterate on Monsoon.', unlock: 'Skins.Commando.Alt1', achievement: 'CommandoClearGameMonsoon', icon: '/icons/png/items/firework.png' },

  /* Huntress skills */
  { name: 'Huntress: Finishing Touch', description: 'As Huntress, land a killing blow with every possible hit of a single glaive.', unlock: 'Skills.Huntress.FlurryArrow', achievement: 'HuntressAllGlaiveBouncesKill', icon: '/icons/png/items/firework.png' },
  { name: 'Huntress: One Shot, One Kill', description: 'As Huntress, collect and carry 12 Crowbars at once.', unlock: 'Skills.Huntress.MiniBlink', achievement: 'HuntressCollectCrowbars', icon: '/icons/png/items/firework.png' },
  { name: 'Huntress: Piercing Wind', description: 'As Huntress, start and finish either Rallypoint Delta or Scorched Acres without falling below 100% health.', unlock: 'Skills.Huntress.Snipe', achievement: 'HuntressMaintainFullHealthOnFrozenWall', icon: '/icons/png/items/firework.png' },
  { name: 'Huntress: Mastery', description: 'As Huntress, beat the game or obliterate on Monsoon.', unlock: 'Skins.Huntress.Alt1', achievement: 'HuntressClearGameMonsoon', icon: '/icons/png/items/firework.png' },

  /* MUL-T skills */
  { name: 'MUL-T: Gotcha!', description: 'As MUL-T, land the killing blow on an Imp Overlord with the Preon Accumulator.', unlock: 'Skills.Toolbot.Buzzsaw', achievement: 'ToolbotKillImpBossWithBfg', icon: '/icons/png/items/firework.png' },
  { name: 'MUL-T: Pest Control', description: 'As MUL-T, defeat two Beetle Queens without leaving the teleporter zone.', unlock: 'Skills.Toolbot.Grenade', achievement: 'ToolbotGuardTeleporter', icon: '/icons/png/items/firework.png' },
  { name: 'MUL-T: Mastery', description: 'As MUL-T, beat the game or obliterate on Monsoon.', unlock: 'Skins.Toolbot.Alt1', achievement: 'ToolbotClearGameMonsoon ', icon: '/icons/png/items/firework.png' },

]