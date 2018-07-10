import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyPreloadingStrategy } from './preload';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { DialogModule } from 'ngbook-kits';
import { MenuGuard } from './guards/menu.guard';
import { MenuService } from './services/menu.service';
import { ExitGuard } from './guards/exit.guard';
import { TrackService } from './services/track.service';
// import { Page1Component } from './page1/page1.component';
import { TrackStayTimeGuard } from './guards/track-stay-time.guard';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        // Page1Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DialogModule.forRoot(),
    ],
    providers: [
        MyPreloadingStrategy,
        LoginService,
        MenuService,
        TrackService,
        AuthGuard,
        MenuGuard,
        ExitGuard,
        TrackStayTimeGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
