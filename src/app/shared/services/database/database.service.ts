import { Injectable } from "@angular/core";
import { Item } from "../../models/item";
import { ItemType } from "../../enums/enumItemType";
import { ItemAcquirable } from "../../enums/enumItemAcquirable";
import { Quest } from "../../models/quest";
import { QuestType } from "../../enums/enumQuestType";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    private items: Item[] = [
        {
            id: '2054cd17-a14d-4d70-8871-794abad1a3cf',
            description: 'Use it ro regenerate a small amount of HP',
            type: ItemType.Potion,
            weight: 50,
            acquirable: [
                ItemAcquirable.Merchant,
                ItemAcquirable.MainQuest
            ],
            price: 10,
            image: '/assets/img/img_item_hp_potion.png'
        }
    ]

    private quests: Quest[] = [
        {
            id: '',
            type: QuestType.Main,
            chapter: 1,
            name: 'Return of the Crow',
            stages: [
                {
                    id: '',
                    questId: '',
                    stage: 1,
                    name: 'Return to Avilius',
                    description: 'After the successful mission, the one waiting was Clemens, the captian of the Night Crows. Clemens came out himself to give a warm welcome and shared the news of an intriguing request.',
                    hasBoss: false,
                    reward: [
                        {
                            id: '',
                            experience: 0,
                            gold: 30.000,
                            items: [
                                {
                                    id: '2054cd17-a14d-4d70-8871-794abad1a3cf'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '',
                    questId: '',
                    stage: 2,
                    name: 'First Impressions of Avilius',
                    description: 'Clemens seemed hesitant at the plea to at least give some time to rest, but he eventually gave in. In return for the favor, he shared some gome news that had happened to the Night Crows in the meantime.',
                    hasBoss: false,
                    reward: [
                        {
                            id: '',
                            experience: 0,
                            gold: 30.000,
                            items: [
                                {
                                    id: '',
                                    description: ''
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 2,
            name: 'A Special Client',
            stages: [
                {
                    id: '',
                    questId: '',
                    stage: 1,
                    name: 'Return to Avilius',
                    description: 'After the successful mission, the one waiting was Clemens, the captian of the Night Crows. Clemens came out himself to give a warm welcome and shared the news of an intriguing request.',
                    hasBoss: false,
                    reward: [
                        {
                            id: '',
                            experience: 0,
                            gold: 30.000,
                            items: [
                                {
                                    id: '2054cd17-a14d-4d70-8871-794abad1a3cf'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '',
                    questId: '',
                    stage: 2,
                    name: 'First Impressions of Avilius',
                    description: 'Clemens seemed hesitant at the plea to at least give some time to rest, but he eventually gave in. In return for the favor, he shared some gome news that had happened to the Night Crows in the meantime.',
                    hasBoss: false,
                    reward: [
                        {
                            id: '',
                            experience: 0,
                            gold: 30.000,
                            items: [
                                {
                                    id: '',
                                    description: ''
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 3,
            name: 'Faint Traces',
            stages: [
                {
                    id: '',
                    questId: '',
                    stage: 1,
                    name: 'Return to Avilius',
                    description: 'After the successful mission, the one waiting was Clemens, the captian of the Night Crows. Clemens came out himself to give a warm welcome and shared the news of an intriguing request.',
                    hasBoss: false,
                    reward: [
                        {
                            id: '',
                            experience: 0,
                            gold: 30.000,
                            items: [
                                {
                                    id: '2054cd17-a14d-4d70-8871-794abad1a3cf'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '',
                    questId: '',
                    stage: 2,
                    name: 'First Impressions of Avilius',
                    description: 'Clemens seemed hesitant at the plea to at least give some time to rest, but he eventually gave in. In return for the favor, he shared some gome news that had happened to the Night Crows in the meantime.',
                    hasBoss: false,
                    reward: [
                        {
                            id: '',
                            experience: 0,
                            gold: 30.000,
                            items: [
                                {
                                    id: '',
                                    description: ''
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 4,
            name: 'The Only Clue',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 5,
            name: 'A Meaningful Meeting',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 6,
            name: 'Died-down Ember',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 7,
            name: 'An Encounter of Fate',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 8,
            name: 'Secret of Bastium',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 9,
            name: 'Villagers in Danger',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 10,
            name: 'After the Fugitive',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 11,
            name: 'Temple in the Forest',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 12,
            name: 'Questionable Traces',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 13,
            name: 'What Hides in the Logging Area',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 14,
            name: 'Patients in the Wetlands',
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 15,
            name: `The Fugitive's Identity`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 16,
            name: `Winds in Celano`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 17,
            name: `A Dangerous Rumor`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 18,
            name: `Battle for the Truth`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 19,
            name: `The Lying Miner`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 20,
            name: `The Hidden Truth`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 21,
            name: `The One Pulling the Strings`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 22,
            name: `Sweet Words of Persuasion`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 23,
            name: `Rights Regained`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 24,
            name: `The Missing Craftsman`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 25,
            name: `The Missing Villagers`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 26,
            name: `A Secret Meeting`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 27,
            name: `Heathens and Orcs`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 28,
            name: `The Wandering Mage`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 29,
            name: `The Heathen's Identity`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 30,
            name: `An Omen of Revolt`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 31,
            name: `Going After The Traces`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 32,
            name: `The Goblin's Plot`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 33,
            name: `An Odd Lizardman`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 34,
            name: `Shadow of the Kingdom`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 35,
            name: `The Rebel Force's Last Moments`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 36,
            name: `Celano Revisited`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 37,
            name: `Looking for Traces`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 38,
            name: `Continuous Exploration`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 39,
            name: `Long-awaited Reunion`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 40,
            name: `A Visitor From the Holy See`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 41,
            name: `An Abnormal Entity`,
            stages: [
            ]
        },
        {
            id: '',
            type: QuestType.Main,
            chapter: 42,
            name: `Accusations of Heathenism`,
            stages: [
            ]
        }
    ]

    constructor() {
    }

    getItems(): Item[] {
        return this.items;
    }

    getItemById(id: string): Item | null {
        return this.items.find(g => g.id === id) || null;
    }

    getQuests(): Quest[] {
        return this.quests;
    }

    getQuestById(id: string): Quest | null {
        return this.quests.find(g => g.id === id) || null;
    }
}