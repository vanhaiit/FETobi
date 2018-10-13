import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginAdminComponent } from './login/login.component';



const routes: Routes = [

   // { path: 'login', loadChildren: '../_admin/dashboard.module#LoginAdminModule' },

   // { path: 'dashboard', loadChildren: '../_admin/dashboard.module#DashboardAdminModule' },
    
    { path: 'admin', component: LoginAdminComponent },
   // { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {
}