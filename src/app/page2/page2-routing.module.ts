import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2.component';

const routes: Routes = [{
    path: '',
    component: Page2Component,
    children: [
        {
            path: 'sub1',
            loadChildren: './sub1/sub1.module#Sub1Module'
        },
        {
            path: 'sub2',
            loadChildren: './sub2/sub2.module#Sub2Module',
            data: {
                preload: true
            }
        },
        {
            path: '',
            redirectTo: 'sub1'
        },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2RoutingModule { }
