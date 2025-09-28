import { Injectable } from '@angular/core';
import { BackgroundData } from '../../../../shared/interfaces';
import { BackgroundDataName, BackgroundDataUrl } from '../../../../shared/enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BackgroundService {

    private defaultBackground: BackgroundData = {
        name: BackgroundDataName.ILEX_FOREST,
        url: BackgroundDataUrl.ILEX_FOREST
    }

    private backgroundSubject = new BehaviorSubject<BackgroundData>(this.defaultBackground)
    background$ = this.backgroundSubject.asObservable()

    constructor() { 
        const storedUrl = localStorage.getItem("poke-explore-background-url")
        const storedName = localStorage.getItem("poke-explore-background-name")
        if(storedUrl && storedName){
            this.backgroundSubject.next({name: storedName, url: storedUrl})
        }
        else{
            localStorage.setItem('poke-explore-background-url', this.defaultBackground.url)
            localStorage.setItem('poke-explore-background-name', this.defaultBackground.name)
        }
    }

    setBackground(item: BackgroundData){
        localStorage.setItem("poke-explore-background-url", item.url)
        localStorage.setItem("poke-explore-background-name", item.name)
        this.backgroundSubject.next(item)
    }
    
}