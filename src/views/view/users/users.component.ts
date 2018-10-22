import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { UserControllerServices } from 'src/controllers/users.controllers';
import { Utilities } from 'src/models/utilities';
import { Router } from '@angular/router';


@Component({
    selector: '.content',
    templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
    model: any = {};
    accounts: any;
    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent,
        private _userController: UserControllerServices,
        private _utilites: Utilities,
        private _router: Router,
    ) { }
    ngOnInit() {
        const key = localStorage.getItem("user-submit");
        if (key) this.accounts = JSON.parse(key);

    }
}