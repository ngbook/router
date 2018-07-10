import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
