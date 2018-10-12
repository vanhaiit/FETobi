import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { ScriptLoaderService } from '../_services/script-loader.service';

import { LayoutModule } from './layouts/layouts.module';
import { ViewComponent } from './view/view.component';
import { HomeModule } from './view/home/home.module';
import { PlayerDetailModule } from './view/player-detail/player-detail.module';


@NgModule({
  declarations: [
    ViewComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    LayoutModule,
    HomeModule,
    PlayerDetailModule
  ],
  providers: [
    ScriptLoaderService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
