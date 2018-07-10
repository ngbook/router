import { Component, OnInit } from '@angular/core';
import {
    Router, NavigationStart, NavigationEnd,
    ActivatedRoute, Data,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { TrackService } from './services/track.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private trackService: TrackService,
    ) { }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.titleService.setTitle('加载中...');
            } else if (event instanceof NavigationEnd) {
                this.getData().subscribe((data) => {
                    if (!data) {
                        return;
                    }
                    this.titleService.setTitle(data.title);
                });
                this.trackService.timeOnload = new Date().getTime();
            }
        });
    }

    getData(): Observable<Data> {
        // 开始获取当前路由的配置数据
        let route = this.activatedRoute;
        while (route.firstChild) { // 一层层往下找到最底部的
            route = route.firstChild;
        }
        return route.data;
    }
}
