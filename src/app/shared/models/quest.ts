import { QuestType } from "../enums/enumQuestType";
import { QuestStage } from "./questStage";

export class Quest {
    id!: string;
    type!: QuestType;
    chapter!: number;
    name!: string;
    stages!: QuestStage[];
  }