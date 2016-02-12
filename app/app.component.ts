import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: '/app/hero.html'
})


export class AppComponent {
    public title = 'Tour of Heroes';
    public hero = 'Windstorm';
    public heroe : Hero = {
        id: 1,
        name: 'Windstorm'
    }
}


interface Hero {
    id: number;
    name: string;
}

