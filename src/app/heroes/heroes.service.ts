import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Hero} from './hero';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable()
export class HeroesService {
  public HEROES_URL = '/heroes';
  public VOTE_LIMIT = 3;
  private SNACKBAR_DURATION = 3000;
  private headers: HttpHeaders;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getAllHeroes(): Observable<Hero[]> {
    return this.http.get(this.HEROES_URL)
      .map(response => response)
      .catch((error) => this.handleError(error));
  }

  like(hero: Hero) {
    if (this.checkIfUserCanVote()) {
      return this.http
        .post(`${this.HEROES_URL}/${hero.id}/like`, {}, {headers: this.headers})
        .map((response) => {
          localStorage.setItem('votes', '' + (Number(localStorage.getItem('votes')) + 1));
          hero.likes += 1;
          this.showSnackBar('Saved!');
          return response;
        })
        .catch(error => this.handleError(error));
    } else {
      this.showSnackBar(`The limit of votes is ${this.VOTE_LIMIT}!`);
      return Observable.throw('maximum votes');
    }
  }

  checkIfUserCanVote(): boolean {
    return Number(localStorage.getItem('votes')) < this.VOTE_LIMIT;
  }

  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = this.SNACKBAR_DURATION;
    this.snackBar.open(name, 'OK', config);
  }

  private handleError(error: any) {
    let observable = Observable.throw(error || 'backend server error');
    if (error instanceof Response) {
      observable = Observable.throw(error.json()['error'] || 'backend server error');
    }
    this.showSnackBar('An error occured. Please try again!');
    return observable;
  }
}
