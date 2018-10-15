import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../layouts/layouts.module';
import { ViewComponent } from '../view.component';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { Utilities } from 'src/models/utilities';
import { UserControllerServices } from 'src/controllers/users.controllers';




const routes: Routes = [
    {
        "path": "",
        "component": ViewComponent,
        "children": [
            {
                "path": "signup", "component": SignupComponent
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
        SignupComponent
    ], exports: [RouterModule],
    providers: [
        UserControllerServices ,
        Utilities
      ],
})
export class SignupModule {
    
}