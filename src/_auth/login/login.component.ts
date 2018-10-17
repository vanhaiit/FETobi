import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { UserControllerServices } from 'src/controllers/users.controllers';
import { Utilities } from 'src/models/utilities';
import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

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
    private _user: any = {};


    constructor(
        private _authService: AuthService,
        private _userController: UserControllerServices,
        private _utilites: Utilities
    ) { }
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
        this._userController.login(this.model.email, this.model.password).then((response: any) => {
            if (response.error) {
                this.message = response.error;
            } else {
                if (!response.access_token) {
                    this.message = "Có lỗi hệ thống";
                } else {
                    this._utilites.setCookie("SS_U_ID", "bearer " + response.access_token.toString(), 30);
                    window.location.href = "/";
                    return true;
                }
            }

        }).catch(error => {
            this.message = error;
        })
    }

    socialSignIn(socialPlatform: string) {
        let socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform == "google") {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }

        this._authService.signIn(socialPlatformProvider).then((userData) => {
            console.log(userData);
            this._user.UserName = userData.email;
            this._user.Email = userData.email;
            this._user.FullName = userData.name;
            this._user.Password = userData.id;
            this._user.Avatar = userData.photoUrl;

            this._userController.signup(this._user).then(result => {
                console.log(result);
                this._userController.login(this.model.UserName, this.model.Password).then((response: any) => {
                    if (response.error) {
                        this.message = response.error;
                    } else {
                        if (!response.access_token) {
                            this.message = "Có lỗi hệ thống";
                        } else {
                            this._utilites.setCookie("SS_U_ID", "bearer " + response.access_token.toString(), 30);
                            window.location.href = "/";
                            return true;
                        }
                    }
                }).catch(error => {
                    this.message = error;
                })
            });
        });
    }

    ngAfterViewInit() {

    }

}