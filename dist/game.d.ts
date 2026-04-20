import type { Card } from "./types.js";
import { AudioController } from "./sounds.js";
export declare class Game {
    pairs: number;
    cards: Card[];
    firstIndex: number;
    secondIndex: number;
    lock: boolean;
    found: number;
    audio: AudioController;
    constructor(pairs: number, audio: AudioController);
    private getCard;
    private buildCards;
    buildGrid(): void;
    flipCard(index: number): void;
    start(): void;
}
//# sourceMappingURL=game.d.ts.map