import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const baseRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'heroes',
    loadChildren: 'app/heroes/heroes.module#HeroesModule'
  }
];
