import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatCardModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatTooltipModule} from '@angular/material';
import {ErrorModule} from '../error/error.module';
import {DetailsComponent} from './details/details.component';
import {HeroesComponent} from './heroes.component';
import {heroesRouting} from './heroes.routing';
import {OverviewComponent} from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorModule,
    heroesRouting,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  declarations: [
    DetailsComponent,
    HeroesComponent,
    OverviewComponent
  ],
  exports: [
    DetailsComponent,
    HeroesComponent,
    OverviewComponent
  ]
})
export class HeroesModule {
}
