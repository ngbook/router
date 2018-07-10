import { Component, OnInit } from '@angular/core';
import {
    Router, ActivatedRoute
} from '@angular/router';

@Component({
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.scss']
})
export class Page1Component {

    constructor(private router: Router, route: ActivatedRoute) {
        route.data.subscribe((data) => {
            console.log(data);
        });
    }
    goToPage2() {
        this.router.navigate(['/page2']);
        // this.router.navigateByUrl('/page2');
    }
    goToUser97() {
        this.router.navigate(['/user', 97, 'info']);
    }
    goToUser96() {
        this.router.navigate(['/user/info'], {
            queryParams: {
                id: 96
            }});
    }
}
