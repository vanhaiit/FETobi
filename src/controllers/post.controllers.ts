import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { ApiClient } from "../models/api.client";
import { Utilities } from 'src/models/utilities';
import { PostModel } from 'src/models/post.model';

@Injectable()
export class PostControllerServices {
    constructor(
        private _http: Http,
        private _utilities: Utilities
    ) {

    }

    getPostByType(keyword,skip,limit,post_types){
        return this._http.get(ApiClient.url + `/post?keyword=${keyword}&types=&post_types=${post_types}&skip=${skip}&limit=${limit}`, this._utilities.jwt()).toPromise()
        .then(result => result.json());
    }

    getPostDetail(postId){
        return this._http.get(ApiClient.url + `/post/${postId}`, this._utilities.jwt()).toPromise()
        .then(result => result.json());
    }

    createSoloMatch(post : PostModel){
        return this._http.post(ApiClient.url + `/post`, post, this._utilities.jwt()).toPromise()
        .then(result => result.json());
    }

    createInviteMatch(){


    }

    updatePost(postId, post:PostModel){
        return this._http.put(ApiClient.url + `/post/${postId}`, post, this._utilities.jwt()).toPromise()
        .then(result => result.json());
    }


}


