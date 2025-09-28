import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { BackgroundData, GameState } from '../../../../shared/interfaces';
import { BACKGROUND_DATA } from "../../assets/background-data-hg-ss"
import { CommonModule } from '@angular/common';
import { BackgroundService } from '../services/background.service';
@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {

    state: GameState | null = null;
    overlayActive: boolean = false;
    selectedBackground: string | null = null;
    backgroundList = BACKGROUND_DATA

    constructor(private gameService: GameService, private backgroundService: BackgroundService) { }

    ngOnInit() { 
        this.gameService.state$.subscribe(state => {
            this.state = state;
        })

    }

    setBackground(item: BackgroundData){
        this.backgroundService.setBackground(item)
    }
}