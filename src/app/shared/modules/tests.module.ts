import {NgModule} from '@angular/core';
import {ProgressBarService} from '../../core/progress-bar.service';
import {MaterialModule} from './material.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
      HttpClientTestingModule,
    RouterModule,
    RouterTestingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProgressBarService]
})

export class TestsModule {
}
