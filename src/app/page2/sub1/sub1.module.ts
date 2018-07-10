import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sub1RoutingModule } from './sub1-routing.module';
import { Sub1Component } from './sub1.component';

@NgModule({
    imports: [
        CommonModule,
        Sub1RoutingModule
    ],
    declarations: [Sub1Component]
})
export class Sub1Module { }
