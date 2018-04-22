import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeroesService} from "./heroes.service";
import {HttpClientModule} from "@angular/common/http";
import {OverviewComponent} from "./overview/overview.component";
import {DetailsComponent} from "./details/details.component";
import {HeroesComponent} from "./heroes.component";
import {HeroesRoutingModule} from "./heroes.routing.module";
import {
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTooltipModule
} from "@angular/material";
import {TopComponent} from "./top/top.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HeroesRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [
    HeroesService
  ],
  declarations: [DetailsComponent, HeroesComponent, OverviewComponent, TopComponent],
  exports: [DetailsComponent, HeroesComponent, OverviewComponent, TopComponent]
})
export class HeroesModule {
}
