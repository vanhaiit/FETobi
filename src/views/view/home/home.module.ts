import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../layouts/layouts.module';
import { ViewComponent } from '../view.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
    {
        "path": "",
        "component": ViewComponent,
        "children": [
            {
                "path": "home", "component": HomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule
    ], declarations: [
        HomeComponent
    ], exports: [RouterModule]
})
export class HomeModule {
}