import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ROUTES} from './app.routes';
import {SharedModule} from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
