import { Component, OnInit } from '@angular/core';
import {
    Router, NavigationStart, NavigationEnd,
    ActivatedRoute, Data,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title) { }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.titleService.setTitle('加载中...');
            } else if (event instanceof NavigationEnd) {
                this.getData().subscribe((data) => {
                    if (!data) {
                        return;
                    }
                    this.titleService.setTitle(data.anchor);
                });
            }
        });
    }

    getData(): Observable<Data> {
        // 开始获取当前路由的配置数据
        let route = this.activatedRoute;
        let anchor = '';
        while (route.firstChild) { // 一层层往下找到最底部的
            console.log(route.outlet);
            route = route.firstChild;
            if (route.outlet === 'anchor') {
                route.data.subscribe((data) => {
                    if (data && data.title) {
                        anchor = data.title;
                    }
                });
            }
        }
        return route.data;
    }
}
