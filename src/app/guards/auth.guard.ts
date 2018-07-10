import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service';
import { DialogService } from 'ngbook-kits';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private loginService: LoginService,
        private router: Router,
        private dialog: DialogService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        // 模拟过程中，登录页都返回 true
        if ('/login' === this.router.url) {
            return Observable.of(true);
        }
        const authed = this.loginService.isAuthed();
        authed.subscribe((auth) => {
            if (!auth) {
                // 把尝试进入的地址先存到 auth service 里
                this.loginService.setNextUrl(state.url);
                // 弹出提示
                const dialog = this.dialog.alert('抱歉，您暂没有权限访问。请先登录');
                dialog.onSure.subscribe(() => {
                    this.router.navigateByUrl('/login');
                });
            }
        });
        return authed;
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(next, state);
    }
}
