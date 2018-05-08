import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../model/hero';
import {HeroesService} from '../services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  TOP_HEROES_LIMIT = 12;
  heroes: Hero[];
  loading: boolean;
  canVote: boolean;

  constructor(private heroesService: HeroesService,
              private router: Router) {
    this.canVote = false;
  }

  ngOnInit() {
    this.loading = true;
    this.canVote = this.heroesService.checkIfUserCanVote();
    this.heroesService.getAllHeroes()
      .subscribe((heroes: Hero[]) => {
        this.heroes = heroes.sort((a, b) => b.likes - a.likes).slice(0, this.TOP_HEROES_LIMIT);
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
