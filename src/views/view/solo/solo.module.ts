import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../layouts/layouts.module';
import { ViewComponent } from '../view.component';
import { SoloComponent } from './solo.component';
import { FormsModule } from '@angular/forms';
import { SoloCreateMatchComponent } from './create-match/solo-create-match.component';
import { SoloViewListMatchComponent } from './viewlists-match/solo-viewlists-match.component';
import { SoloMatchDetailComponent } from './detail-match/solo-match-detail.component';


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
            },
            {
                "path": "solo/solo-detail-match/:id", "component": SoloMatchDetailComponent
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
        SoloViewListMatchComponent,
        SoloMatchDetailComponent
    ], exports: [RouterModule]
})
export class SoloModule {
}