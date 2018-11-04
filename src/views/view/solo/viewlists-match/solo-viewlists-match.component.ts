import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostControllerServices } from 'src/controllers/post.controllers';
import { Router } from '@angular/router';

@Component({
    selector: '.content',
    templateUrl: './solo-viewlists-match.component.html',
    providers:[PostControllerServices]
})

export class SoloViewListMatchComponent implements OnInit, AfterViewInit {
    account_login : any = {};
    login_status = false;
    soloMatchs : any = [];
    title = "Tham gia";

    constructor(
        private _router: Router,
        private _postController : PostControllerServices
    ) { }
    ngOnInit() {
        const key = localStorage.getItem("user-submit");
        if (key){
            this.account_login = JSON.parse(key);
            this.login_status = true;
        } 
        this.getListSoloMatch();
    }
    ngAfterViewInit() {
        
    }

    viewDetailMatch(matchId){       
        if(this.login_status === false){
            alert("Bạn chưa đăng nhập");
            return null;
        } 
        this._router.navigate(['/solo/solo-detail-match',matchId]);
    }

    getListSoloMatch(){
        this._postController.getPostByType("",0,100,1).then(result =>{
            this.soloMatchs = result.data;                     
        }).catch(error => {
            console.log(error);
        });
    }


}