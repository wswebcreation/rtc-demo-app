import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ServicesModule} from '../services/services.module';
import {NavComponent} from './nav.component';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ServicesModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {
}
