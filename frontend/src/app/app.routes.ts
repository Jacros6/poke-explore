import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home.component';

export const routes: Routes = [
    {
        component: HomeComponent,
        path: ''
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
];
