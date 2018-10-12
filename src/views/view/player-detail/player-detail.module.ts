import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../layouts/layouts.module';
import { ViewComponent } from '../view.component';
import { PlayerDetailComponent } from './player-detail.component';


const routes: Routes = [
    {
        "path": "",
        "component": ViewComponent,
        "children": [
            {
                "path": "playerdetail", "component": PlayerDetailComponent
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
        PlayerDetailComponent
    ], exports: [RouterModule]
})
export class PlayerDetailModule {
    
}