export  interface Challenge {
  name: string;
  description: string;
  unlock: string;
  achievement: string;
  icon: string;
}

export const challenges: Challenge[] = [
  /* White items */
  {name: '...Maybe One More.', description: 'Duplicate the same item 7 times in a row with a 3D Printer.', unlock: 'Items.Firework', achievement: 'RepeatedlyDuplicateItems', icon: '/icons/characters/huntress.png'},
  {name: 'Elite Slayer', description: 'Defeat an Elite-type monster.', unlock: 'Items.Medkit', achievement: 'KillEliteMonster', icon: '/icons/characters/huntress.png'},
  {name: 'Keyed Up', description: 'Defeat the teleporter boss in under 15 seconds.', unlock: 'Items.TreasureCache', achievement: 'KillBossQuick', icon: '/icons/characters/huntress.png'},
  {name: '"Is This Bugged?"', description: 'Fail the shrine of chance 3 times in a row.', unlock: 'Items.Hoof', achievement: 'FailShrineChance', icon: '/icons/characters/huntress.png'},
  {name: 'The Basics', description: 'Discover 10 unique white items.', unlock: 'Items.Crowbar', achievement: 'Discover10UniqueTier1', icon: '/icons/characters/huntress.png'},
  {name: 'Learning Process', description: 'Die 5 times.', unlock: 'Items.Bear', achievement: 'Die5Times', icon: '/icons/characters/huntress.png'},
  {name: 'Flawless', description: 'Fully charge a teleporter without getting hit.', unlock: 'Items.SecondarySkillMagazine', achievement: 'CompleteTeleporterWithoutInjury', icon: '/icons/characters/huntress.png'},
  {name: 'Advancement', description: 'Complete a teleporter event.', unlock: 'Items.BossDamageBonus', achievement: 'CompleteTeleporter', icon: '/icons/characters/huntress.png'},
  
  /* Green items */
  {name: 'Rapidfire', description: 'Reach +200% attack speed.', unlock: 'Items.AttackSpeedOnCrit', achievement: 'AttackSpeed', icon: '/icons/characters/huntress.png'},
  {name: 'Warmonger', description: 'Complete three Combat Shrines in a single stage.', unlock: 'Items.EnergizedOnEquipmentUse', achievement: 'MultiCombatShrine', icon: '/icons/characters/huntress.png'},
  {name: 'Going Fast Recommended', description: 'Reach +300% movespeed (includes sprinting)', unlock: 'Items.JumpBoost', achievement: 'MoveSpeed', icon: '/icons/characters/huntress.png'},
  {name: 'Slaughter', description: 'Defeat 3000 enemies.', unlock: 'Items.Infusion', achievement: 'KillTotalEnemies', icon: '/icons/characters/huntress.png'},
  {name: 'Cut Down', description: 'Defeat 500 Elite monsters', unlock: 'Items.ExecuteLowHealthElite', achievement: 'KillElitesMilestone', icon: '/icons/characters/huntress.png'},
  {name: 'Experimenting', description: 'Pick up 5 different types of Equipment.', unlock: 'Items.EquipmentMagazine', achievement: 'Discover5Equipment', icon: '/icons/characters/huntress.png'},
  {name: 'Prismatically Aligned', description: 'Complete a Prismatic Trial.', unlock: 'Items.HealOnCrit', achievement: 'CompletePrismaticTrial', icon: '/icons/characters/huntress.png'},
  {name: 'Death Do Us Part', description: 'Discover the hidden chamber in the Abandoned Aqueduct.', unlock: 'Items.ElementalRings', achievement: 'KillElementalLemurians', icon: '/icons/characters/huntress.png'},
  {name: 'Glorious Battle', description: 'Charge the teleporter with less than 10% health.', unlock: 'Items.WarCryOnMultiKill', achievement: 'ChargeTeleporterWhileNearDeath', icon: '/icons/characters/huntress.png'},
  {name: 'Automation Activation', description: 'Activate 6 turrets in a single run.', unlock: 'Items.Squid', achievement: 'AutomationActivation', icon: '/icons/characters/huntress.png'},

  /* Red items */
  {name: 'Newtist', description: 'Discover and activate 8 unique Newt Altars.', unlock: 'Items.Talisman', achievement: 'FindUniqueNewtStatues', icon: '/icons/characters/huntress.png'},
  {name: 'The Long Road', description: 'Complete 20 stages in a single run.', unlock: 'Items.Clover', achievement: 'Complete20Stages', icon: '/icons/characters/huntress.png'},
  {name: 'Deicide', description: 'Defeat an Elite boss on Monsoon difficulty', unlock: 'Items.KillEliteFrenzy', achievement: 'HardEliteBossKill', icon: '/icons/characters/huntress.png'},
  {name: 'The Lone Survivor', description: 'Stay alive for 30 consecutive minutes.', unlock: 'Items.ExtraLife', achievement: 'StayAlive1', icon: '/icons/characters/huntress.png'},
  {name: 'Naturopath', description: 'Without healing, reach and complete the 3rd teleporter event.', unlock: 'Items.IncreaseHealing', achievement: 'CompleteThreeStagesWithoutHealing', icon: '/icons/characters/huntress.png'},
  {name: 'Macho', description: 'Deal 5,000 damage in one attack. (Can be multiple hits, piercing, crits, etc.)', unlock: 'Items.ShockNearby', achievement: 'HardHitter', icon: '/icons/characters/huntress.png'},
  {name: 'Her Concepts', description: 'Find the altar to N\'kuhana.', unlock: 'Items.NovaOnHeal', achievement: 'FindDevilAltar', icon: '/icons/characters/huntress.png'},
  {name: 'Deja Vu?', description: 'Loop back to the first stage.', unlock: 'Items.BounceNearby', achievement: 'LoopOnce', icon: '/icons/characters/huntress.png'},

  /* Lunar items */
  {name: 'The Calm', description: 'Beat the game on Monsoon difficulty.', unlock: 'Items.LunarBadLuck', achievement: 'CompleteMainEndingHard', icon: '/icons/characters/huntress.png'},
  {name: 'The Demons And The Crabs', description: 'Kill 20 Hermit Crabs by chasing them off the edge of the map.', unlock: 'Items.AutoCastEquipment', achievement: 'SuicideHermitCrabs', icon: '/icons/characters/huntress.png'},
  {name: 'Never Back Down', description: 'In 4 consecutive stages don\'t leave the teleport radius until it is fully charged.', unlock: 'Items.FocusConvergence', achievement: 'NeverBackDown', icon: '/icons/characters/huntress.png'},
  //{name: 'Blockade Breaker', description: 'Kill 15 boss enemies in a single run.', unlock: 'Items.LunarUtilityReplacement Items.LunarPrimaryReplacement', achievement: 'KillBossQuantityInRun'},
  {name: 'Moon Worshipper', description: 'Carry 5 Lunar items in a single run.', unlock: 'Items.Meteor', achievement: 'CarryLunarItems', icon: '/icons/characters/huntress.png'},
  {name: 'Cosmic Explorer', description: 'Discover and enter three unique portals.', unlock: 'Items.TonicAffliction', achievement: 'UseThreePortals', icon: '/icons/characters/huntress.png'},
  {name: 'Multikill!', description: 'Kill 15 enemies simultaneously.', unlock: 'Items.BurnNearby', achievement: 'MajorMultikill', icon: '/icons/characters/huntress.png'},

  /* Equipment */
  {name: 'Warm For Life', description: 'Die three times while burning.', unlock: 'Items.Cleanse', achievement: 'BurnToDeath', icon: '/icons/characters/huntress.png'},
  {name: 'Mechanic', description: 'Repair 30 drones or turrets.', unlock: 'Items.DroneBackup', achievement: 'TotalDronesRepaired', icon: '/icons/characters/huntress.png'},
  {name: 'Funded!', description: 'Collect $30,480 total gold.', unlock: 'Items.GoldGat', achievement: 'TotalMoneyCollected', icon: '/icons/characters/huntress.png'},
  {name: '[REDACTED]', description: 'Open the Timed Security Chest on Rallypoint Delta.', unlock: 'Items.BFG', achievement: 'FindTimedChest', icon: '/icons/characters/huntress.png'},
  {name: 'Blackout', description: 'Defeat the Guardian of Gilded Coast without any beacons deactivating.', unlock: 'Items.Gateway', achievement: 'KillGoldTitanInOneCycle', icon: '/icons/characters/huntress.png'},
  {name: 'One with the Woods', description: 'Fully upgrade a Shrine of the Woods.', unlock: 'Items.PassiveHealing', achievement: 'MaxHealingShrine', icon: '/icons/characters/huntress.png'},
  {name: 'Bookworm', description: 'Collect 10 Monster or Environment Logs.', unlock: 'Items.Scanner', achievement: 'LogCollector', icon: '/icons/characters/huntress.png'},
  {name: 'Ascendant', description: 'Defeat the teleporter bosses after activating 2 Shrines of the Mountain.', unlock: 'Items.Lightning', achievement: 'CompleteMultiBossShrine', icon: '/icons/characters/huntress.png'},
  {name: 'Cleanup Duty', description: 'Destroy 20 flying rocks in Sky Meadow.', unlock: 'Items.Recycle', achievement: 'CleanupDuty', icon: '/icons/characters/huntress.png'},
  {name: 'I Love Dying!', description: 'Die 20 times.', unlock: 'Items.DeathProjectile', achievement: 'Die20Times', icon: '/icons/characters/huntress.png'},

  /* Characters */
  {name: 'Warrior', description: 'Reach and complete the 3rd Teleporter event without dying.', unlock: 'Characters.Huntress', achievement: 'CompleteThreeStages', icon: '/icons/characters/huntress.png'},
  {name: 'Verified', description: 'Complete the first Teleporter event 5 times.', unlock: 'Characters.Toolbot', achievement: 'RepeatFirstTeleporter', icon: '/icons/characters/huntress.png'},
  {name: 'Engineering Perfection', description: 'Complete 30 stages.', unlock: 'Characters.Engineer', achievement: 'Complete30StagesCareer', icon: '/icons/characters/huntress.png'},
  {name: 'Pause', description: 'Free the survivor suspended in time.', unlock: 'Characters.Mage', achievement: 'FreeMage', icon: '/icons/characters/huntress.png'},
  {name: 'True Respite', description: 'Obliterate yourself at the Obelisk.', unlock: 'Characters.Mercenary', achievement: 'CompleteUnknownEnding', icon: '/icons/characters/huntress.png'},
  {name: 'Power Plant', description: 'Repair the broken robot with an Escape Pod\'s Fuel Array.', unlock: 'Characters.Treebot', achievement: 'RescueTreebot', icon: '/icons/characters/huntress.png'},
  {name: 'Guidance Offline', description: 'Defeat the unique guardian of Siren\'s Call.', unlock: 'Characters.Loader', achievement: 'DefeatSuperRoboBallBoss', icon: '/icons/characters/huntress.png'},
  {name: '...To Be Left Alone', description: 'Stabilize the Cell in the Void Fields.', unlock: 'Characters.Croco', achievement: 'BeatArena', icon: '/icons/characters/huntress.png'},
  {name: 'Washed Away', description: 'Beat the game.', unlock: 'Characters.Captain', achievement: 'CompleteMainEnding', icon: '/icons/characters/huntress.png'},
]
/*
const itemChallenges : Challenge[] = [
  {name: '...Maybe One More.', description: 'Duplicate the same item 7 times in a row with a 3D Printer.', unlock: 'Bundle of Fireworks', achievement: 'RepeatedlyDuplicateItems'},
]

const equipmentChallenges : Challenge[] = [
]


const artifactChallenges : Challenge[] = []
*/