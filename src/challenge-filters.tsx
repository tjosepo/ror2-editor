import { Character, DLCType, ItemRarity } from "./challenges";

export interface ChallengeFilter {
  name: string;
  type: ChallengeFilterType;
  target: any;
  icon: string;
}

export enum ChallengeFilterType {
  ItemRarity,
  Character,
  Artifact,
  DLCType,
  //VisualGap, // Hacky hack
}

export interface ChallengeFilterCategory {
  name: string;
  filters: ChallengeFilter[];
}

export const challengeFilterCategories: ChallengeFilterCategory[] = [
  /* Characters */
  { name: "Characters", filters: [
    { name: "Commando", type: ChallengeFilterType.Character, target: Character.Commando, icon: "characters/commando-alt" },
    { name: "Huntress", type: ChallengeFilterType.Character, target: Character.Huntress, icon: "characters/huntress-alt" },
    { name: "Bandit", type: ChallengeFilterType.Character, target: Character.Bandit, icon: "characters/bandit-alt" },
    { name: "MUL-T", type: ChallengeFilterType.Character, target: Character.MUL_T, icon: "characters/toolbot-alt" },
    { name: "Engineer", type: ChallengeFilterType.Character, target: Character.Engineer, icon: "characters/engineer-alt" },
    { name: "Artificer", type: ChallengeFilterType.Character, target: Character.Artificer, icon: "characters/mage-alt" },
    { name: "Mercenary", type: ChallengeFilterType.Character, target: Character.Mercenary, icon: "characters/mercenary-alt" },
    { name: "REX", type: ChallengeFilterType.Character, target: Character.REX, icon: "characters/treebot-alt" },
    { name: "Loader", type: ChallengeFilterType.Character, target: Character.Loader, icon: "characters/loader-alt" },
    { name: "Acrid", type: ChallengeFilterType.Character, target: Character.Acrid, icon: "characters/croco-alt" },
    { name: "Captain", type: ChallengeFilterType.Character, target: Character.Captain, icon: "characters/captain-alt" },
    { name: "Railgunner", type: ChallengeFilterType.Character, target: Character.Railgunner, icon: "characters/railgunner-alt" },
    { name: "Void Fiend", type: ChallengeFilterType.Character, target: Character.VoidFiend, icon: "characters/voidsurvivor-alt" },
    { name: "Seeker", type: ChallengeFilterType.Character, target: Character.Seeker, icon: "characters/seeker-alt" },
    { name: "Chef", type: ChallengeFilterType.Character, target: Character.Chef, icon: "characters/chef-alt" },
    { name: "False Son", type: ChallengeFilterType.Character, target: Character.FalseSon, icon: "characters/falseson-alt" },
  ] },

  /* Items */
  { name: "Items", filters: [
    { name: "White Items", type: ChallengeFilterType.ItemRarity, target: ItemRarity.White, icon: "items/hoof" },
    { name: "Green Items", type: ChallengeFilterType.ItemRarity, target: ItemRarity.Green, icon: "items/elementalrings" },
    { name: "Red Items", type: ChallengeFilterType.ItemRarity, target: ItemRarity.Red, icon: "items/extralife" },
    //{ type: ChallengeFilterType.ItemRarity, target: ItemRarity.Yellow, icon: "" }, // No yellow items are unlocked through challenges
    { name: "Lunar Items", type: ChallengeFilterType.ItemRarity, target: ItemRarity.Lunar, icon: "items/tonicaffliction" },
    //{ type: ChallengeFilterType.ItemRarity, target: ItemRarity.Void }, // No void items are unlocked through challenges
    { name: "Equipment", type: ChallengeFilterType.ItemRarity, target: ItemRarity.Equipment, icon: "items/bfg" },
  ] },

  /* Artifacts */
  {name: "Artifacts", filters: [
    { name: "Artifacts", type: ChallengeFilterType.Artifact, target: undefined, icon: "artifacts/command" },
  ]},

  /* DLCs. */
  { name: "Releases", filters: [
    { name: "Base Game", type: ChallengeFilterType.DLCType, target: DLCType.Base, icon: "dlcs/base" },
    { name: "DLC: Survivors of the Void", type: ChallengeFilterType.DLCType, target: DLCType.SurvivorsOfTheVoid, icon: "dlcs/void" },
    { name: "DLC: Seekers of the Storm", type: ChallengeFilterType.DLCType, target: DLCType.SeekersOfTheStorm, icon: "dlcs/storm" },
    //{ name: "", type: ChallengeFilterType.VisualGap, target: undefined, icon: "" },
  ] },
];

export const challengeFilters: ChallengeFilter[] = challengeFilterCategories.map((category: ChallengeFilterCategory) => category.filters).flat();
