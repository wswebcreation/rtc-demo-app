import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../model/hero';
import { ErrorComponent } from '../error/error.component';

@Injectable()
export class HeroesService {
  public HEROES_URL = '/heroes';
  public VOTE_LIMIT = 3;
  private headers: HttpHeaders;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) {
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
    this.snackBar.open(name, 'OK');
  }

  showDialog(message): void {
    if (this.dialog.openDialogs.length === 0) {
      this.dialog.open(ErrorComponent, {
        width: '300px',
        data: {message: message}
      });
    }
  }

  private handleError(error: any) {
    let observable = Observable.throw(error || 'backend server error');
    if (error instanceof Response) {
      observable = Observable.throw(error.json()['error'] || 'backend server error');
    }
    this.showDialog('An error occured. Please try again!');
    return observable;
  }
}
