import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HeroTopComponent} from './hero-top.component';
import {HeroService} from '../shared/hero.service';
import {TestsModule} from '../../shared/modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import "rxjs/add/observable/of";
import {Observable} from "rxjs/Observable";

describe('HeroTopComponent', () => {
    const HEROES = [
        {
            "id": 1,
            "name": "batman",
            "default": true
        },
        {
            "id": 2,
            "name": "spiderman",
            "default": false
        },
        {
            "id": 3,
            "name": "ironman",
            "default": false
        },
        {
            "id": 4,
            "name": "superman",
            "default": false
        },
        {
            "id": 5,
            "name": "aquaman",
            "default": false
        }
    ];
  let fixture;
  let component;
  let heroService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot(),
      ],
      declarations: [
        HeroTopComponent
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        HeroService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroTopComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
    heroService = TestBed.get(HeroService);
  }));

  it('should create hero top component', (() => {
    expect(component).toBeTruthy();
  }));

  it('should initialice component', fakeAsync(() => {
    fixture.detectChanges();
      spyOn(heroService, "getAllHeroes").and.returnValue(Observable.of(HEROES));
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component.heroes.length).toBe(AppConfig.topHeroesLimit);
  }));

  it('should like a hero', async(() => {
    localStorage.setItem('votes', String(AppConfig.votesLimit - 1));
    component.like({id: 1}).then((result) => {
      expect(result).toBe(true);
    });
  }));

  it('should not like a hero', async(() => {
    localStorage.setItem('votes', String(AppConfig.votesLimit));
    component.like({id: 1}).then(() => {
    }, (error) => {
      expect(error).toBe('maximum votes');
    });
    expect(heroService.checkIfUserCanVote()).toBe(false);
  }));
});
