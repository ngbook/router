import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sub1Component } from './sub1.component';

const routes: Routes = [{
    path: '',
    component: Sub1Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sub1RoutingModule { }
