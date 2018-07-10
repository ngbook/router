import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { LoginComponent } from './login/login.component';
import { Sub1Component } from './page2/sub1/sub1.component';
import { Sub2Component } from './page2/sub2/sub2.component';
import { Page2Component } from './page2/page2.component';

const ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'page1',
        component: Page1Component
    },
    {
        path: 'page2',
        component: Page2Component,
        children: [
            {
                path: 'sub1',
                component: Sub1Component,
            },
            {
                path: 'sub2',
                component: Sub2Component,
            },
            {
                path: '',
                redirectTo: 'sub1',
                pathMatch: 'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
