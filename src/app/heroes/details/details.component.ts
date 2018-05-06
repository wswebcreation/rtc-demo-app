import {Component, OnInit} from "@angular/core";
import {Hero} from "../../model/hero";
import {HeroesService} from "../../services/heroes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {

  hero: Hero;
  loading: boolean;
  canVote: boolean;

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) {
    this.canVote = false;
  }

  ngOnInit() {
    this.loading = true;
    this.canVote = this.heroesService.checkIfUserCanVote();
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.heroesService.getAllHeroes()
          .map((heroes: Hero[]) => heroes.filter((hero: Hero) => hero.id === parseInt(params.id)))
          .subscribe((heroes: Hero[]) => {
            this.hero = heroes[0];
            this.loading = false;
          });
      }
    },(error: Response) => {
      this.loading = false;
    });
  }

  like(hero: Hero) {
    this.heroesService.like(hero).subscribe(() => {
      this.canVote = this.heroesService.checkIfUserCanVote();
    }, (error: Response) => {
      console.error(error);
    });
  }

}
