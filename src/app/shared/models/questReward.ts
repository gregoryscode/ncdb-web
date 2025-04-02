import { Item } from "./item";

export class QuestReward {
    id!: string;
    experience!: number;
    gold!: number;
    items!: Item[];
  }