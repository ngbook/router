import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sub2Component } from './sub2.component';

const routes: Routes = [{
    path: '',
    component: Sub2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sub2RoutingModule { }
