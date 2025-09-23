export interface Cell {
    row: number;
    col: number;
}

export interface LocationData {
    name: string,
    description: string,
    coordinates: Cell
}

export type GameStatus = "won" | "lost" | null;

export interface NextLocationPayload {
    token: string,
    image_url: string
}

export type GameResult = "correct" | "wrong";

export interface MakeGuessPayload{
    result: GameResult,
    distance: number,
    updatedToken: string,
    status: GameStatus,
    actualLocation: ResultLocationData,
    lives: number,
    score: number,
}

export interface ResultLocationData{
    name: string,
    coordinates: Cell,
}

export interface GameState{
    score: number;
    lives: number;
}

