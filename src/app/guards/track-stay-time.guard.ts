import { Injectable } from '@angular/core';
import {
    CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TrackService } from '../services/track.service';

@Injectable()
export class TrackStayTimeGuard implements CanDeactivate<any> {

    constructor(private trackService: TrackService) {}

    canDeactivate(component: any,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const start = this.trackService.timeOnload;
        if (start > 0) {
            const diff = new Date().getTime() - start;
            return this.trackService.track('事件', '页面停留时间', diff);
        }
        return true;
    }
}
