import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { GameState, MakeGuessPayload, NextLocationPayload } from '../../../../shared/interfaces';

@Injectable({providedIn: 'root'})
export class GameService {
    constructor(private http: HttpClient) { }
    
    private state  = new BehaviorSubject<GameState>({
        score: 0,
        lives: 3,
    })

    state$ = this.state.asObservable();

    startGame(): Observable<any>{
        return this.http.post("http://localhost:3000/game/start-game", {});
    }

    nextLocation(token: string): Observable<NextLocationPayload>{
        return this.http.post<NextLocationPayload>("http://localhost:3000/game/next-location", {token});
    }

    makeGuess(token: string, guessed_location: {row: number, col: number}): Observable<MakeGuessPayload>{
        return this.http.post<MakeGuessPayload>("http://localhost:3000/game/make-guess", {token, guessed_location}).pipe(
            tap((res: MakeGuessPayload) => {
                this.state.next({
                    score: res.score,
                    lives: res.lives
                })
            })
        )
    }
}