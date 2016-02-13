import { Component, OnInit } from 'angular2/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import {RouteConfig, Router} from "angular2/router";

@Component({
    selector: 'my-dashboard',
    templateUrl: '/app/template/dashboard.html'
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }
    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}