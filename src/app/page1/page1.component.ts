import { Component, OnInit } from '@angular/core';
import {
    Router,
} from '@angular/router';

@Component({
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.scss']
})
export class Page1Component {

    constructor(private router: Router) { }
    goToPage2() {
        this.router.navigate(['/page2']);
        // this.router.navigateByUrl('/page2');
    }
}
