import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GameService {
    constructor(private http: HttpClient) { }
    

    startGame(){
        return this.http.post("http://localhost:3000/game/start-game", {});
    }

    nextLocation(){
        
    }

    makeGuess(token: string, guessed_location: {row: number, col: number}){
        return this.http.post("http://localhost:3000/game/make-guess", {token, guessed_location})
    }
}