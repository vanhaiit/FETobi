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
        private _utilities : Utilities
    ) {

    }

    login(account: string, password: string) {
        var data = `grant_type=password&username=${account}&password=${password}&client_id=ngAuthApp`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(ApiClient.url + `oauth/token`, data, { headers }).toPromise().then(result => result.json());
    }

    signup(account : UserModel){
        return this._http.post(ApiClient.url + `api/account/signup`, account, this._utilities.jwt()).toPromise()
        .then(result => result.json());
    }

}


