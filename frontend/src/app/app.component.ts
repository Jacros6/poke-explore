import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { BackgroundService } from './services/background.service';
import { BackgroundData } from '../../../shared/interfaces';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'poke-explore';
  background: BackgroundData | null = null;

  constructor(private backgroundService: BackgroundService){

  }

  ngOnInit(){
    this.backgroundService.background$.subscribe(bg => {
      this.background = bg;
    });
  }
}
