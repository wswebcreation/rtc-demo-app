import {Component} from "@angular/core";
import {Hero} from "../shared/hero.model";
import {HeroService} from "../shared/hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-hero-detail",
    templateUrl: "./hero-detail.component.html",
    styleUrls: ["./hero-detail.component.scss"]
})

export class HeroDetailComponent {
    hero: Hero;
    canVote: boolean;

    constructor(private heroService: HeroService,
                private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: any) => {
            if (params.id) {
                this.heroService.getAllHeroes()
                    .map((heroes: Hero[]) => heroes.filter((hero: Hero) => hero.id === parseInt(params.id)))
                    .subscribe((heroes: Hero[]) => {
                        this.hero = heroes[0];
                    });
            }
        });
    }

    like(hero: Hero) {
        return new Promise((resolve, reject) => {
            this.heroService.like(hero).subscribe(() => {
                this.canVote = this.heroService.checkIfUserCanVote();
                resolve(true);
            }, (error) => {
                reject(error);
            });
        });
    }
}
