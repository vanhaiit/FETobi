import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostControllerServices } from 'src/controllers/post.controllers';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: '.content',
    templateUrl: './solo-match-detail.component.html',
    providers:[PostControllerServices]
})

export class SoloMatchDetailComponent implements OnInit, AfterViewInit {
    account_login : any = {};
    postDetail : any = {};

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _postController : PostControllerServices
    ) { }
    ngOnInit() {
        const key = localStorage.getItem("user-submit");
        if (key) this.account_login = JSON.parse(key);
        this.getSoloMatchDetail();
    }
    ngAfterViewInit() {
        
    }

    getSoloMatchDetail(){
        this._activatedRoute.paramMap.subscribe((params: Params) => {
            const postId = params.get('id');
            if (!postId) this._router.navigate(['/']);
            this._postController.getPostDetail(postId).then(result => {
                this.postDetail = result.data;

                const user_create = this.postDetail.post_user.find(x=>x._id == this.postDetail.user_id);
                const user_confirmed = this.postDetail.post_user.find(x=>x._id == this.postDetail.user_confirmed);
                const user_win = this.postDetail.post_user.find(x=>x._id == this.postDetail.user_win);
                
                this.postDetail.user_create = user_create ? user_create.username : null;
                this.postDetail.user_confirmed = user_confirmed ? user_confirmed.username : null;
                this.postDetail.user_win = user_win ? user_win.username : null;

                const team1 = this.postDetail.post_detail.find(x=>x.user_id == this.postDetail.user_id);
                const team2 = this.postDetail.post_detail.find(x=>x.user_id == this.postDetail.user_confirmed);

                if(team1){
                    this.postDetail.team1 = team1;
                }else {
                    this.postDetail.team1 = {};
                }
                if(team2){
                    this.postDetail.team2 = team2;
                }else{
                    this.postDetail.team2 = {};
                }

            }).catch(error => {
                console.log(error);
            });
        });   
        
    }


}