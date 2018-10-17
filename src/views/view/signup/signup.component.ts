import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { UserControllerServices } from 'src/controllers/users.controllers';
import { Utilities } from 'src/models/utilities';

declare let toastr: any;

@Component({
    selector: '.content',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {

    model : any = {};
    message = null;

    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent,
        private _userController: UserControllerServices,
        private _utilites: Utilities,
    ) { }
    ngOnInit() {

    }

    signup(f){
        if(!f.valid){
            alert("Dữ liệu nhập vào không đúng !");         
        }
        else{
            this._userController.signup(this.model).then(result => {
                console.log(result);
                this._userController.login(this.model.UserName, this.model.Password).then((response: any) => {
                    if (response.error) {
                        this.message = response.error;
                    } else {
                        if (!response.access_token) {
                            this.message = "Có lỗi hệ thống";
                        } else {
                            this._utilites.setCookie("SS_U_ID", "bearer "+ response.access_token.toString(), 30);
                            window.location.href = "/";
                            return true; 
                        }
                    }
        
                }).catch(error => {
                    this.message = error;
                })
            });
        }       
    }
}