import { Component, HostListener, OnInit } from '@angular/core';
import { GAME_MAP } from '../../assets/game-map';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../services/game.service';
import { LOCATION_DATA_SS_HG } from '../../assets/location-data-ss_hg';

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
    highlightedCells: Cell[] = [];
    resultCell: Cell | null = null;
    overlayActive = false;
    madeGuess = false;
    image_url: string | null = null;
    radius: number | null = null;
    selectedLocation: any;
    
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


    constructor(private readonly gameService: GameService) { 
        
    }

    ngOnInit() {
        document.addEventListener('keydown', this.keydownHandler);
        document.addEventListener('keyup', this.keyupHandler);
        this.engine();
        this.gameService.startGame().subscribe((res: any) => {
            localStorage.setItem("poke-explore-token", res.token);
            this.image_url = res.image_url
        })
    }

    getNextLocation(){
        const token = localStorage.getItem("poke-explore-token");
        if(!token){
            console.error("No game token found");
            return;
        }
        console.log("Fetching next location");
        this.gameService.nextLocation(token).subscribe((res: any) => {
            localStorage.setItem("poke-explore-token", res.token);
            console.log(res)
            this.image_url = res.image_url;
        })
    }

    updateLocation(row: number, col: number){
        const location = Object.values(LOCATION_DATA_SS_HG).find(loc => 
            loc.tiles.some(tile => tile.row === row && tile.col === col)
        );

        if(location){
            this.selectedLocation = { 
                name: location.name, 
                description: location.description, 
                coordinates: {
                    row: this.selectedCell.row,
                    col: this.selectedCell.col
                }
            }
        }
        else{
            this.selectedLocation = null;
        }
    }

    cellChange(event: any, row: number, col: number) {
        console.log(event, row, col);
        this.selectedCell = { row, col };

        // this.updateLocation(row, col);
    }

    nextRound(){
        this.madeGuess = false;

        this.selectedCell = { row: Math.floor(this.rows / 2), col: Math.floor(this.cols/2) };

        this.overlayActive = false;
        this.highlightedCells = [];
        this.getNextLocation();
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
        // if (this.madeGuess) return;
        if(this.madeGuess) return;

        const token = localStorage.getItem("poke-explore-token") as string;

        this.gameService.makeGuess(token, this.selectedCell).subscribe((result: any) => {
            console.log(result)
            this.madeGuess = true;
            this.resultCell = result.actualLocation.coordinates;
            if(!this.resultCell){
                return;
            }
            const maxRadius = Math.min(result.distance,2);
            this.radius = maxRadius;

            this.highlightedCells = [];
            for(let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    const dist = Math.max(
                        Math.abs(i - this.resultCell.row),
                        Math.abs(j - this.resultCell.col)
                    );
                    if(dist <= maxRadius){
                        const cell = { row: i, col: j, borders: { top: false, right: false, bottom: false, left: false } };

                        if (!this.highlightedCells.find(c => c.row === i - 1 && c.col === j)) cell.borders.top = true;
                        if (!this.highlightedCells.find(c => c.row === i + 1 && c.col === j)) cell.borders.bottom = true;
                        if (!this.highlightedCells.find(c => c.row === i && c.col === j - 1)) cell.borders.left = true;
                        if (!this.highlightedCells.find(c => c.row === i && c.col === j + 1)) cell.borders.right = true;

                        this.highlightedCells.push(cell);
                    }
                }
            }
            console.log(this.highlightedCells)
        })
    }

    isHighlighted(i: number, j: number): boolean {
        return this.highlightedCells.some(cell => cell.row === i && cell.col === j);
    }

    getBorderClasses(i: number, j: number): any {
        const cell = this.highlightedCells.find(c => c.row === i && c.col === j);
        if (!cell) return {};

        const baseClass =
            this.radius === 0 ? 'highlight-green' :
            this.radius === 1 ? 'highlight-yellow' :
            'highlight-red';

        return {
            [baseClass]: true,
            'border-top': !this.isHighlighted(i - 1, j),
            'border-bottom': !this.isHighlighted(i + 1, j),
            'border-left': !this.isHighlighted(i, j - 1),
            'border-right': !this.isHighlighted(i, j + 1),
        };
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

        this.updateLocation(this.selectedCell.row, this.selectedCell.col);
    }   
}

