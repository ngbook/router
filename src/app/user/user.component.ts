import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    userId: string;
    menus: any[];

    constructor(private route: ActivatedRoute,
        private menuService: MenuService) {
        // route.data.subscribe((data) => {
        //     console.log('user=>', data);
        // });
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const id = params.get('id');
            if (id) {
                this.userId = id;
                // console.log('user id =', this.userId);
            }
        });
        this.route.queryParamMap.subscribe((params: ParamMap) => {
            const id = params.get('id');
            if (id) {
                this.userId = id;
                console.log('user id =', this.userId);
            }
        });
        this.menus = this.menuService.menus;
    }
}
