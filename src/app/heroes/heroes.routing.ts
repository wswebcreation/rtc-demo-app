import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HeroesComponent } from './heroes.component';
import { OverviewComponent } from './overview/overview.component';

const heroesRoutes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      {path: '', component: OverviewComponent},
      {path: ':id', component: DetailsComponent}
    ]
  }
];

export const heroesRouting: ModuleWithProviders = RouterModule.forChild(heroesRoutes);
