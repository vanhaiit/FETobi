import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from './login.component';
import { AdminComponent } from '../admin.component';


const routes: Routes = [
    {
        "path": "",
        "component": AdminComponent,
        "children": [
            {
                "path": "adminlogin", "component": LoginAdminComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], declarations: [
        LoginAdminComponent
    ], exports: [RouterModule]
})
export class LoginAdminModule {
}