import {Component, OnInit} from "@angular/core";
import {HeroesService} from "../heroes.service";
import {Router} from "@angular/router";
import {Hero} from "../hero";

@Component({
  selector: "app-top",
  templateUrl: "./top.component.html",
  styleUrls: ["./top.component.scss"]
})
export class TopComponent implements OnInit {
  TOP_HEROES_LIMIT = 4;
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
      this.heroes = heroes.sort((a, b) => b.likes - a.likes).slice(0, this.TOP_HEROES_LIMIT);
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
