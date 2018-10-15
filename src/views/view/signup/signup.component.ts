import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { UserControllerServices } from 'src/controllers/users.controllers';
import { Utilities } from 'src/models/utilities';

@Component({
    selector: '.content',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {

    model : any = {};
    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent,
        private _userController: UserControllerServices,
        private _utilites: Utilities,
    ) { }
    ngOnInit() {

    }

    signup(){
        console.log(this.model);
        this._userController.signup(this.model).then(result => {
            console.log(result);
        });
    }
}