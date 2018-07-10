import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { MenuService } from '../services/menu.service';
import { AuthGuard } from './auth.guard';

@Injectable()
export class MenuGuard implements CanActivate {
    constructor(private menuService: MenuService,
        private authGuard: AuthGuard) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authGuard.canActivate(next, state)
            .switchMap((authed) => {
            if (authed) {
                return this.menuService.fetchMenu();
            } else {
                return Observable.of(false);
            }
        });
    }
}
