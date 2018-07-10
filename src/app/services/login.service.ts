import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { Router } from '@angular/router';

const INDEX_URL = '/index';
const USER_KEY  = 'user-id';

@Injectable()
export class LoginService {
    public userId = '';
    private nextUrl = INDEX_URL;

    constructor(private route: Router) { }

    isAuthed(): Observable<boolean> {
        // 用随机数模拟登录态
        const rand = Math.round(Math.random() * 10000) % 3;
        const authed = rand ? true : false;
        console.log('authorized: ', authed);
        return Observable.of(authed).delay(1000);
    }
    setNextUrl(url: string) {
        this.nextUrl = url;
    }
    goNext() {
        if (!this.nextUrl) {
            this.nextUrl = INDEX_URL;
        }
        this.route.navigateByUrl(this.nextUrl);
    }
}
