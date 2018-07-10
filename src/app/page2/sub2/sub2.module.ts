import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sub2RoutingModule } from './sub2-routing.module';
import { Sub2Component } from './sub2.component';

@NgModule({
  imports: [
    CommonModule,
    Sub2RoutingModule
  ],
  declarations: [Sub2Component]
})
export class Sub2Module { }
