import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RectangleComponent } from './components/rectangle/rectangle.component';
import { SquareComponent } from './components/square/square.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'rectangle', component: RectangleComponent, pathMatch: 'full' },
    { path: 'square', component: SquareComponent, pathMatch: 'full' },
    // { path: '', redirectTo: '/home' },
    // { path: '**', redirectTo: '/home' }
];
