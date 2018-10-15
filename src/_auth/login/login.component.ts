import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { UserControllerServices } from 'src/controllers/users.controllers';
import { Utilities } from 'src/models/utilities';

declare let mLayout: any;

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, AfterViewInit {
    model: any = {};
    loading = false;
    message = null;
    returnUrl: string;

    constructor(private userController: UserControllerServices,
        private _utilites: Utilities, ) {
    }
    ngOnInit() {
    }

    userLogin() {
        this.model.password = this.model.password.trim();
        this.model.email = this.model.email.trim();
        if (!this.model.email || !this.model.password) {
            this.message = "Xin vui lòng nhập đầy đủ thông tin.!";
            return this.loading = false;
        }
        if (this.model.email.length < 3 || this.model.password.length < 3) {
            this.message = "Độ dài không hợp lệ xin vui lòng thử lại.!";
            return this.loading = false;
        }
        this.userController.login(this.model.email, this.model.password).then((response: any) => {
            if (response.error) {
                this.message = response.error;
            } else {
                if (!response.access_token) {
                    this.message = "Có lỗi hệ thống";
                } else {
                    this._utilites.setCookie("SS_U_ID", response.access_token.toString(), 30);
                    window.location.href = "/";
                    return true;
                }
            }

        }).catch(error => {
            this.message = error;
        })
    }
    ngAfterViewInit() {

    }

}