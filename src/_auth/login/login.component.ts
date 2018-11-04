import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { UserControllerServices } from 'src/controllers/users.controllers';
import { Utilities } from 'src/models/utilities';
import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { async } from 'rxjs/internal/scheduler/async';

declare let mLayout: any;

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, AfterViewInit {
    model: any = {};
    message = null;
    returnUrl: string;
    display_user = false;
    account: any = {};
    load = false;
    private _user: any = {};


    constructor(
        private _authService: AuthService,
        private _userController: UserControllerServices,
        private _utilites: Utilities
    ) { }
    ngOnInit() {
        const key = localStorage.getItem("user-submit");
        if (key) this.account = JSON.parse(key), this.display_user = true, this.account.username = this.account.username.toUpperCase();
    }

    signOut() {
        try {
            localStorage.removeItem("user-submit");
            document.cookie = "TB_U_ID=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            this.display_user = false;
            return true;
        } catch (ex) {
            return false;
        }
    }

    userLogin() {
        this.load = true;
        this.model.password = this.model.password.trim();
        this.model.email = this.model.email.trim();
        if (!this.model.email || !this.model.password) {
            this.message = "Xin vui lòng nhập đầy đủ thông tin.!";
            return this.load = false;
        }
        if (this.model.email.length < 3 || this.model.password.length < 3) {
            this.message = "Độ dài không hợp lệ xin vui lòng thử lại.!";
            return this.load = false;
        }
        this._userController.login(this.model.email, this.model.password).then((response: any) => {
            if (response.error_msg) {
                this.message = "Tài khoản hoặc mật khẩu không đúng !";
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
                        this.display_user = true;
                        this.ngOnInit();
                    })
                    return true;
                }
            }

        }).catch(error => {
            if (error._body == '{"error":"invalid_grant"}') this.message = "Tài khoản hoặc mật khẩu không đúng !";
            return this.load = false;
        })
    }

    socialSignIn(socialPlatform: string) {
        this.load = true;
        let socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform == "google") {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }

        this._authService.signIn(socialPlatformProvider).then(async (userData) => {
           // this._user.username = userData.email.split("@")[0];
            this._user.email = userData.email;
            this._user.username = userData.name;
            this._user.password = userData.id;
            this._user.avatar_user = userData.photoUrl;
            if (this._user) {
                this._userController.getUser(this._user.email).then(async res => {
                    if (res.data.length !== 0) {
                        localStorage.setItem("user-submit", JSON.stringify(res.data[0]));
                        this._userController.login(this._user.email, this._user.password).then((response: any) => {
                            if (response.error_msg) {
                                this.message = "Tài khoản hoặc mật khẩu không đúng !";
                            } else {
                                if (!response.data.token) {
                                    this.message = "Có lỗi hệ thống";
                                } else {
                                    this.model.password = "private"
                                    this._utilites.setCookie("TB_U_ID", "bearer " + response.data.token.toString(), 30);
                                    this._userController.getUser(this.model.email).then(async res => {
                                        this.load = false;
                                        this.message = "";
                                        this.display_user = true;
                                        this.ngOnInit();
                                    })
                                    return true;
                                }
                            }
                        }).catch(error => {
                            this.message = error;
                        })
                    } else {
                        this._userController.signup(this._user).then(async result => {
                            this._userController.login(this._user.email, this._user.password).then((response: any) => {
                                if (response.error) {
                                    this.message = response.error;
                                } else {
                                    if (!response.data.token) {
                                        this.message = "Có lỗi hệ thống";
                                    } else {
                                        this.model.password = "private"
                                        this._utilites.setCookie("TB_U_ID", "bearer " + response.data.token.toString(), 30);
                                        this._userController.getUser(this._user.email).then(async res => {
                                            localStorage.setItem("user-submit", JSON.stringify(res.data[0]));
                                            this.load = false;
                                            this.message = "";
                                            this.display_user = true;
                                            this.ngOnInit();
                                        })
                                        return true;
                                    }
                                }
                            }).catch(error => {
                                this.message = error;
                            })
                        });
                    }
                })
            } else {
                console.log("connsect false");
            }

        });
    }

    ngAfterViewInit() {

    }

}