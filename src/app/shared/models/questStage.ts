import { QuestReward } from "./questReward";

export class QuestStage {
    id!: string;
    questId!: string;
    stage!: number;
    name!: string;
    description!: string;
    objective?: string;
    hasBoss!: boolean;
    reward!: QuestReward[];
  }