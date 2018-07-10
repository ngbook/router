import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    userId: string;

    constructor(private route: ActivatedRoute) {
        route.data.subscribe((data) => {
            console.log('user=>', data);
        });
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const id = params.get('id');
            if (id) {
                this.userId = id;
                console.log('user id =', this.userId);
            }
        });
        this.route.queryParamMap.subscribe((params: ParamMap) => {
            const id = params.get('id');
            if (id) {
                this.userId = id;
                console.log('user id =', this.userId);
            }
        });
    }
}
