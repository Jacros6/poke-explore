import { Component, HostListener, OnInit } from '@angular/core';
import { GAME_MAP } from '../../assets/game-map';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Cell {
    row: number;
    col: number;
}

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule],
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss'
})

export class HomeComponent implements OnInit {

    gameMap = GAME_MAP;
    rows = this.gameMap.length;
    cols = this.gameMap[0].length;
    selectedCell: Cell = { row: 0, col: 0 };
    keyDict = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
    };
    private keydownHandler = this.updateKeyDict.bind(this);
    private keyupHandler = this.updateKeyDict.bind(this);
    private frameCounter = 0;
    private moveInterval = 12;


    constructor() { }

    ngOnInit() {
        document.addEventListener('keydown', this.keydownHandler);
        document.addEventListener('keyup', this.keyupHandler);
        this.engine();
    }

    cellChange(event: any, row: number, col: number) {
        console.log(event, row, col);
        this.selectedCell = { row, col };
    }

    engine(){
        this.update();
        requestAnimationFrame(this.engine.bind(this));
    }

    // @HostListener('window:keydown', ['$event'])
    // handleKeyDown(event: KeyboardEvent) {
    //     if(!this.selectedCell) return;

    //     let {row, col} = this.selectedCell;
    //     switch(event.key) {
    //         case 'ArrowUp':
    //             row = Math.max(0, row - 1);
    //             event.preventDefault();
    //             break;
    //         case 'ArrowDown':
    //             row = Math.min(this.rows - 1, row + 1);
    //             event.preventDefault();
    //             break;
    //         case 'ArrowLeft':
    //             col = Math.max(0, col - 1);
    //             event.preventDefault();
    //             break;
    //         case 'ArrowRight':
    //             col = Math.min(this.cols - 1, col + 1);
    //             event.preventDefault();
    //             break;
    //         default:
    //             return;
    //     }
    //     this.selectedCell = { row, col };

    // }

    updateKeyDict(event: any) {
        console.log(event.type, event.code);
        const k = event.code;
        if(/^Arrow\w+/.test(k)){
            console.log("setting keyDict")
            event.preventDefault();
            this.keyDict[k as keyof typeof this.keyDict] = event.type === 'keydown';
        }
    }

    update(){
        // let dist = 
        // this.keyDict.ArrowUp && (this.keyDict.ArrowLeft || this.keyDict.ArrowRight) ||
        // this.keyDict.ArrowDown && (this.keyDict.ArrowLeft || this.keyDict.ArrowRight) ? 1 : 1;
        this.frameCounter++;
        if(this.frameCounter % this.moveInterval !== 0) return;
        let dist = 1;

        if(this.keyDict.ArrowLeft) this.selectedCell.col -= dist;
        if(this.keyDict.ArrowRight) this.selectedCell.col += dist;
        if(this.keyDict.ArrowUp) this.selectedCell.row -= dist;
        if(this.keyDict.ArrowDown) this.selectedCell.row += dist;
    }   
}

