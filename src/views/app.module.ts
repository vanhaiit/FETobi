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
import { AdminModule } from 'src/_admin/admins.module';
import { SignupModule } from './view/signup/signup.module';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { UsersModule } from './view/users/users.module';

// Configs 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("48680544510-0moon3v0pdu84ppf1ufjismijqkckuvl.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("296708850931042")
  }
]);

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
    PlayerDetailModule,
    AdminModule,
    SignupModule,
    UsersModule,
    SocialLoginModule.initialize(config)
    
  ],
  providers: [
    ScriptLoaderService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
