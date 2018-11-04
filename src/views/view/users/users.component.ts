import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { UserControllerServices } from 'src/controllers/users.controllers';
import { Utilities } from 'src/models/utilities';
import { Router, Params, ActivatedRoute } from '@angular/router';


@Component({
    selector: '.content',
    templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
    model: any = {};
    accounts: any;
    userId: any;
    user: any = {};
    notification: any;
    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent,
        private _userController: UserControllerServices,
        private _utilites: Utilities,
        private _router: Router,
        private router: ActivatedRoute,
    ) { }
    ngOnInit() {
        try {
            this.router.paramMap.subscribe(async (params: Params) => {
                const param = params.get('id');
                this.userId = param;
                var results = await this._userController.getUserById(this.userId);
                results ? this.user = results.data.data : this.user = {};
                console.log(this.user)
            });
        } catch (ex) {
            console.log("có lỗi sảy ra vui lòng thử lại !");
            // return this._router.navigate(['/don-hang']);
        }
    }
    async updateUser() {
        try {
            var results = await this._userController.updateUser(this.model, this.userId);
            results ? this.notification = "cập nhật thành công !" : this.notification = "có lỗi sảy ra vui lòng thử lại ";
        } catch (ex) {
            alert("có lỗi sảy ra vui lòng thử lại !");
            return console.log(ex);
        }
        console.log(this.model)
    }
    async cloneCode() {
        try {
            var results = await this._userController.codeConfirmed(this.userId);
            // if(results) res 

        } catch (ex) {

        }
    }
}