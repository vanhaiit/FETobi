import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginAdminComponent } from './login/login.component';
import { LoginAdminModule } from './login/login.module';
import { DashboardAdminModule } from './dashboard/dashboard.module';
import { ViewAdminComponent } from './view/view-admin.component';

@NgModule({
  declarations: [
    ViewAdminComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    LoginAdminModule,
    DashboardAdminModule,
    AdminRoutingModule,
  ],
  providers: [
    BaseRequestOptions,

  ],
  entryComponents: [],
})

export class AdminModule {
}