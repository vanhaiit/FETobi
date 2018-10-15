import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { UserControllerServices } from 'src/controllers/users.controllers';

declare let mLayout: any;

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, AfterViewInit {

    model: any = {};

    constructor(private userController: UserControllerServices) {

    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    userLogin() {
        this.userController.login(this.model.email, this.model.password).then((response: any) => {
            this.model = response;
            console.log(response);
        }, error => {
            console.log(error);
        });
    }

}