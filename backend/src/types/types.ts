export interface GameTokenPayload{
    userId: string;
    usedIds: number[];
    currentRoundId?: number;
    score: number;
    lives: number;
}