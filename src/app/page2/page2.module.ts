import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';

@NgModule({
    imports: [
        CommonModule,
        Page2RoutingModule
    ],
    declarations: [Page2Component]
})
export class Page2Module { }
