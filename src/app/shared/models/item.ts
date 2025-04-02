import { ItemAcquirable } from "../enums/enumItemAcquirable";
import { ItemType } from "../enums/enumItemType";

export class Item {
    id!: string;
    description?: string;
    type?: ItemType;
    weight?: number;
    price?: number;
    acquirable?: ItemAcquirable[];
    image?: string;
  }