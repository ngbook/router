import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyPreloadingStrategy } from './preload';

const ROUTES: Routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        data: {
            preload: true
        }
    },
    {
        path: 'page1',
        loadChildren: './page1/page1.module#Page1Module'
    },
    {
        path: 'page2',
        loadChildren: './page2/page2.module#Page2Module',
        data: {
            preload: true
        }
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
            useHash: true,
            preloadingStrategy: MyPreloadingStrategy
        })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
