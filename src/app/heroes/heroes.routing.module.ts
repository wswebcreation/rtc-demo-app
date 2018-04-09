import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesService} from "./heroes.service";
import {HttpClientModule} from "@angular/common/http";
import { OverviewComponent } from './overview/overview.component';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes.component";
import {DetailsComponent} from "./details/details.component";

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

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
