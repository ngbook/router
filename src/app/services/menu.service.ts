import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export interface Menu {
    name: string;
    url: string;
}

@Injectable()
export class MenuService {
    menus: Menu[];

    fetchMenu(): Observable<boolean> {
        console.log('fetching menu... ');
        if (this.menus && this.menus.length > 0) {
            return Observable.of(true);
        }
        const future = new Subject<boolean>();
        // 模拟菜单数据
        const menus = [{
            name: '资金管理',
            url: '#'
        }, {
            name: '人员管理',
            url: '#'
        }, {
            name: '个人中心',
            url: '#'
        }];
        // 模拟请求
        return Observable.of(menus).delay(1000)
            .map((data) => {
                this.menus = data;
                return data && data.length > 0;
            });
    }
}
