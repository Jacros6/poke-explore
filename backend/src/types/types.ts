export interface GameTokenPayload{
    userId: string;
    usedIds: number[];
    currentRoundId?: number;
    score: number;
    lives: number;
}

export interface Coordinates{
    row: number,
    col: number
}

export interface LocationData{
    name: string,
    image_url: string,
    coordinates: Coordinates
}

