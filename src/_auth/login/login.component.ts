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
    display_user = false;
    account: any = {};

    constructor(private userController: UserControllerServices,
        private _utilites: Utilities, ) {
    }
    ngOnInit() {
        const key = localStorage.getItem("user");
        if (key) this.account = JSON.parse(key), this.display_user = true;
    }
    signOut() {
        try {
            localStorage.removeItem("user");
            document.cookie = "SS_U_ID=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location.href = "/";
            return true;
        } catch (ex) {
            return false;
        }
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
                    this.model.password = "private"
                    this._utilites.setCookie("SS_U_ID", "bearer " + response.access_token.toString(), 30);
                    this.userController.getUserByName(this.model.email).then(async res => {
                        localStorage.setItem("user", JSON.stringify(res));
                        window.location.href = "/";
                    })
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