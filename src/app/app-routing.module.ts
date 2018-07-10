import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyPreloadingStrategy } from './preload';

const ROUTES: Routes = [
    {
        path: 'user/:id/info',
        loadChildren: './user/user.module#UserModule',
        data: {
            title: '用户详情页'
        }
    },
    {
        path: 'user/info',
        loadChildren: './user/user.module#UserModule',
        data: {
            title: '用户详情页'
        }
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        data: {
            preload: true,
            title: '登录页'
        }
    },
    {
        path: 'page1',
        loadChildren: './page1/page1.module#Page1Module',
        data: {
            title: 'Page1页面'
        }
    },
    {
        path: 'page2',
        loadChildren: './page2/page2.module#Page2Module',
        data: {
            preload: true,
            title: 'Page2页面'
        }
    },
    {
        path: '404',
        component: NotFoundComponent,
        data: {
            title: '404没找到相关页面'
        }
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
