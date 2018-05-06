import { NgModule } from '@angular/core';
import { MatDialogModule, } from '@angular/material';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [
    MatDialogModule,
  ],
  declarations: [ErrorComponent],
  entryComponents: [ErrorComponent],
  exports: [ErrorComponent]
})
export class ErrorModule {
}
