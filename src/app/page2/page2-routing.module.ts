import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2.component';
// import { AuthGuard } from '../guards/auth.guard';

const ROUTES: Routes = [{
    path: '',
    component: Page2Component,
    children: [
        {
            path: 'sub1',
            loadChildren: './sub1/sub1.module#Sub1Module',
            data: {
                title: '子页面1'
            },
            // canActivate: [AuthGuard],
        },
        {
            path: 'sub2',
            loadChildren: './sub2/sub2.module#Sub2Module',
            data: {
                preload: true,
                title: '子页面2'
            },
            // canActivate: [AuthGuard],
        },
        {
            path: '',
            redirectTo: 'sub1'
        },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class Page2RoutingModule { }
