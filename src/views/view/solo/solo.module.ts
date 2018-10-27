import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../layouts/layouts.module';
import { ViewComponent } from '../view.component';
import { SoloComponent } from './solo.component';
import { FormsModule } from '@angular/forms';
import { SoloCreateMatchComponent } from './create-match/solo-create-match.component';
import { SoloViewListMatchComponent } from './viewlists-match/solo-viewlists-match.component';


const routes: Routes = [
    {
        "path": "",
        "component": ViewComponent,
        "children": [
            {
                "path": "solo/solo-viewlists-match", "component": SoloViewListMatchComponent
            },
            {
                "path": "solo/solo-create-match", "component": SoloCreateMatchComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        FormsModule
    ], declarations: [
        SoloComponent,

        SoloCreateMatchComponent,
        SoloViewListMatchComponent
    ], exports: [RouterModule]
})
export class SoloModule {
}