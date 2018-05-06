import {Component, OnInit} from "@angular/core";
import {HeroesService} from "../../services/heroes.service";
import {Router} from "@angular/router";
import {Hero} from "../../model/hero";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"]
})
export class OverviewComponent implements OnInit {
  heroes: Hero[];
  loading: boolean;
  canVote: boolean;

  constructor(private heroesService: HeroesService, private router: Router) {
    this.canVote = false;
  }

  ngOnInit() {
    this.loading = true;
    this.canVote = this.heroesService.checkIfUserCanVote();
    this.heroesService.getAllHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
      this.loading = false;
    }, (error: Response) => {
      this.loading = false;
    });
  }

  details(hero: Hero): void {
    if (hero.default) {
      this.router.navigate([`${this.heroesService.HEROES_URL}/${hero.id}`]);
    }
  }

  like(hero: Hero) {
    this.heroesService.like(hero).subscribe(() => {
      this.canVote = this.heroesService.checkIfUserCanVote();
    }, (error: Response) => {
      console.error(error);
    });
  }
}
