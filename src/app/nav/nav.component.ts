import {Component, OnInit} from "@angular/core";
import {HeroesService} from "../services/heroes.service";
import {Hero} from "../model/hero";
import {FormControl} from "@angular/forms";

import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import {Router} from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  defaultHeroes: Hero[];
  filteredHeroes: Hero[];
  heroFormControl: FormControl;

  constructor(private heroesService: HeroesService, private router: Router) {
    this.heroFormControl = new FormControl();
  }

  ngOnInit() {
    this.heroesService.getAllHeroes().subscribe((heroes: Hero[]) => {
      this.defaultHeroes = heroes.filter(hero => hero["default"]);

      this.heroFormControl
        .valueChanges
        .startWith(null)
        .map(value => this.filterHeroes(value))
        .subscribe(heroesFiltered => this.filteredHeroes = heroesFiltered);
    });
  }

  filterHeroes(val: string): Hero[] {
    let filteredHeroes = this.defaultHeroes;
    if (val) {
      filteredHeroes = this.defaultHeroes.filter(hero => hero.name.toLowerCase().indexOf(val.toLowerCase()) === 0 && hero["default"]);
    }
    return filteredHeroes;
  }

  searchHero(hero: Hero): Promise<boolean> {
    return this.router.navigate([`${this.heroesService.HEROES_URL}/${hero.id}`]);
  }
}
