import { Component, OnInit, HostListener } from '@angular/core';
import {
    Router, ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ExitGuard } from '../guards/exit.guard';

@Component({
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

    constructor(
        private router: Router,
        private exitGuard: ExitGuard) {
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
    ngOnInit() {
        // 模拟用户点击编辑按钮的操作，表示用户已经开始编译文章了
        this.edit();
    }
    // 模拟编辑的操作
    edit() {
        this.exitGuard.isSaved = false;
    }
    save() {
        this.exitGuard.isSaved = true;
    }

    // @HostListener('window:beforeunload', ['$event'])
    // beforeLeaving(event) {
    //     return event.returnValue = 'sure?';
    // }

}
