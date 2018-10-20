import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { ApiClient } from "../models/api.client";
import { UserModel } from 'src/models/user.model';
import { Utilities } from 'src/models/utilities';

@Injectable()
export class UserControllerServices {
    constructor(
        private _http: Http,
        private _utilities: Utilities
    ) {

    }

    login(account: string, password: string) {
        var user = {
            email: account,
            password: password
        }
        return this._http.post(ApiClient.url + `/users/signin`, user, this._utilities.jwt()).toPromise()
            .then(result => result.json());
    }

    signup(account: UserModel) {
        return this._http.post(ApiClient.url + `/users/signup`, account, this._utilities.jwt()).toPromise()
            .then(result => result.json());
    }

    getUser(key: string) {
        return this._http.get(ApiClient.url + `/users/getuser?keyword=${key}&skip=0&limit=1`, this._utilities.jwt()).toPromise()
            .then(result => result.json());
    }


}


