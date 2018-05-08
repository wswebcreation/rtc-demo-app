import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule, MatGridListModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule} from '@angular/material';
import {ServicesModule} from '../services/services.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatIconModule,
    MatGridListModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
