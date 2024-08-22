import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { SportComponent } from './sport/sport.component';
import { GamingComponent } from './gaming/gaming.component';

export const routes: Routes = [
    { path: 'home', component: ArticlesComponent },
    { path: 'sport', component: SportComponent },
    { path: 'gaming', component: GamingComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home on empty path
];