import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { GameState } from '../../../../shared/interfaces';

@Component({
    standalone: true,
    imports: [],
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {

    state: GameState | null = null;

    constructor(private gameService: GameService) { }

    ngOnInit() { 
        this.gameService.state$.subscribe(state => {
            this.state = state;
        })
    }
}