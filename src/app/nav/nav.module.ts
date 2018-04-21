import {NgModule} from "@angular/core";


import {MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {NavComponent} from "./nav.component";
import {HeroesModule} from "../heroes/heroes.module";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HeroesModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [NavComponent]
})
export class NavModule {
}
