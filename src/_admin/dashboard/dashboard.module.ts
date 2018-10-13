import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboartAdminComponent } from './dashboard.component';


const routes: Routes = [
    {
        "path": "",
        "component": DashboartAdminComponent,
        "children": [
            {
                "path": "dashboard", "component": DashboartAdminComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ], declarations: [
        DashboartAdminComponent
    ], exports: [RouterModule]
})
export class DashboardAdminModule {
}