import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { UserControllerServices } from 'src/controllers/users.controllers';
import { Utilities } from 'src/models/utilities';
import { Router } from '@angular/router';


@Component({
    selector: '.content',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {

    model: any = {};
    message = null;
    load = false;

    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent,
        private _userController: UserControllerServices,
        private _utilites: Utilities,
        private _router: Router,
    ) { }
    ngOnInit() {

    }

    signup(f) {
        this.load = true;
        if (!f.valid) {
            this.message = "Dữ liệu nhập vào không đúng !";
            this.load = false;
        }
        else {
            this.load = true;
            this.model.user_name = this.model.email.split("@")[0];
            this._userController.signup(this.model).then(result => {
                console.log(result);
                this._userController.login(this.model.email, this.model.password).then((response: any) => {
                    if (response.error) {
                        this.message = response.error;
                    } else {
                        if (response.error) {
                            this.message = response.error;
                        } else {
                            if (!response.data.token) {
                                this.message = "Có lỗi hệ thống";
                            } else {
                                this.model.password = "private"
                                this._utilites.setCookie("TB_U_ID", "bearer " + response.data.token.toString(), 30);
                                this._userController.getUser(this.model.email).then(async res => {
                                    localStorage.setItem("user-submit", JSON.stringify(res.data[0]));
                                    this.load = false;
                                    this.message = "";
                                    this._router.navigate(["/home"]);
                                })
                                return true;
                            }
                        }
                    }

                }).catch(error => {
                    this.load = false;
                    this.message = error;
                })
            });
        }
    }
}