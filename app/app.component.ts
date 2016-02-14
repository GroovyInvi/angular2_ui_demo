import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: '/app/template/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
//
//@RouteConfig([
//    {
//        path: '/dashboard',
//        name: 'Dashboard',
//        component: DashboardComponent,
//        useAsDefault: true
//    },
//    {
//        path: '/detail/:id',
//        name: 'HeroDetail',
//        component: HeroDetailComponent
//    },
//    {
//        path: '/heroes',
//        name: 'Heroes',
//        component: HeroComponent
//    }
//])
export class AppComponent {
    title = 'Tour of Heroes';
}
