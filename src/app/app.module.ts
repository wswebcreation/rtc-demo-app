import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {baseRoutes} from './app.routing';
import {HomeModule} from './home/home.module';
import {NavModule} from './nav/nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavModule,
    HomeModule,
    RouterModule.forRoot(baseRoutes, {useHash: true})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
