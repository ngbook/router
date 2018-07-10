import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrackService {
    timeOnload = 0;

    constructor() { }

    track(actionType, action, value?) {
        console.log(actionType, action, value);
        // 模拟上报请求
        return Observable.of(true).delay(500) // 2秒，模拟调用服务超时
            // 添加调用超时的限制，确保在超时的时候不影响当前的页面逻辑
            .timeout(1000).catch(() => Observable.of(true));
    }
}
