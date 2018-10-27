import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostControllerServices } from 'src/controllers/post.controllers';

@Component({
    selector: '.content',
    templateUrl: './solo-viewlists-match.component.html',
    providers:[PostControllerServices]
})

export class SoloViewListMatchComponent implements OnInit, AfterViewInit {
    account_login : any = {};
    soloMatchs : any = [];
    title = "Tham gia";

    constructor(
        private _postController : PostControllerServices
    ) { }
    ngOnInit() {
        const key = localStorage.getItem("user-submit");
        if (key) this.account_login = JSON.parse(key);
        this.getListSoloMatch();
    }
    ngAfterViewInit() {
        
    }

    getListSoloMatch(){
        this._postController.getPostByType("",0,100,1).then(result =>{
            this.soloMatchs = result.data;
            for(let i=0; i<this.soloMatchs.length;i++){
                if(this.soloMatchs[i].status === 1) this.title = "Tham gia";
                else this.title = "Bắt đầu";
            }
            

        }).catch(error => {
            console.log(error);
        });
    }

    updateMatch(post){
        var status;
        if(post.status === 1) status = 2;
        else{
            if(post.status === 2) status = 3;
        }
        post.status = status;
        this._postController.updatePost(post._id,post).then(result =>{
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
    }


}