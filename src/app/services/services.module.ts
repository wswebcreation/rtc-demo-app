import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatDialogModule, MatSnackBarModule} from '@angular/material';
import {ErrorModule} from '../error/error.module';
import {HeroesService} from './heroes.service';

@NgModule({
  imports: [
    HttpClientModule,
    ErrorModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    HeroesService
  ],
})
export class ServicesModule {
}
