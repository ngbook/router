import { Injectable } from '@angular/core';
import {
    CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DialogService } from 'ngbook-kits';

@Injectable()
export class ExitGuard implements CanDeactivate<any> {

    // 默认还未编辑
    isSaved = false;

    constructor(private dialogService: DialogService) {}

    canDeactivate(component: any,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.alertSaving();
    }

    private alertSaving(): Observable<boolean> {
        if (!this.isSaved) {
            const dialog = this.dialogService.confirm('【模拟】请先保存编辑中的文章再退出', {
                closeTxt: '留下',
                sureTxt: '离开',
            });
            const choice = dialog.getProperty<Observable<boolean> >('choice');
            return choice;
        }
        return Observable.of(true);
    }
}
