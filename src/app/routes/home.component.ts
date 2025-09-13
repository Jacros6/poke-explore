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
    selectedCell: Cell = { row: Math.floor(this.rows / 2), col: Math.floor(this.cols/2) };
    resultCell: Cell = { row: 10, col: 1 };
    overlayActive = false;
    madeGuess = false;
    
    keyDict = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
    };
    private keydownHandler = this.updateKeyDict.bind(this);
    private keyupHandler = this.updateKeyDict.bind(this);
    private frameCounter = 0;
    private moveInterval = 16;


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

    updateKeyDict(event: any) {
        
        const k = event.code;
        if(/^Arrow\w+/.test(k)){
            event.preventDefault();
            this.keyDict[k as keyof typeof this.keyDict] = event.type === 'keydown';
        }
    }

    makeGuess(){
        if (this.madeGuess) return;

        const { row: selectedRow, col: selectedCol } = this.selectedCell;
        const { row: resultRow, col: resultCol } = this.resultCell;
        this.madeGuess = true;
        if (selectedRow === resultRow && selectedCol === resultCol) {
            console.log("🎉 Correct guess!");
            return 0;
        }

        const rowDiff = Math.abs(resultRow - selectedRow);
        const colDiff = Math.abs(resultCol - selectedCol);
        console.log(Math.max(rowDiff, colDiff));
        
        return Math.max(rowDiff, colDiff);
    }

    update(){
        if(this.madeGuess) return;
        this.frameCounter++;
        if(this.frameCounter % this.moveInterval !== 0) return;
        let dist = 1;

        if(this.keyDict.ArrowLeft && this.selectedCell.col > 0) this.selectedCell.col -= dist;
        if(this.keyDict.ArrowRight && this.selectedCell.col < this.cols - 1) this.selectedCell.col += dist;
        if(this.keyDict.ArrowUp && this.selectedCell.row > 0) this.selectedCell.row -= dist;
        if(this.keyDict.ArrowDown && this.selectedCell.row < this.rows - 1) this.selectedCell.row += dist;
    }   
}

