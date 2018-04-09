import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesModule} from "./heroes/heroes.module";
import {TopComponent} from "./heroes/top/top.component";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: TopComponent},
  {path: 'heroes', loadChildren: ()=> HeroesModule},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
