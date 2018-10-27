import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostControllerServices } from 'src/controllers/post.controllers';
import * as $ from 'jquery';

@Component({
    selector: '.content',
    templateUrl: './solo-create-match.component.html',
    providers:[PostControllerServices]
})

export class SoloCreateMatchComponent implements OnInit, AfterViewInit {
    display : boolean = true;
    model : any = {};
    account_games : any = [];
    account_login : any = {};
    list : any =[];

    constructor(
        private _postController : PostControllerServices
    ) { }
    ngOnInit() {
        const key = localStorage.getItem("user-submit");
        if (key) this.account_login = JSON.parse(key);
    }
    ngAfterViewInit() {
        
    }

    btnNextClick(){
        this.display = false;
        this.account_games = []; 
        var game : any = {
            nick_name:null,
            game_id:null,
            team_name:null
        };
        for(let i=0;i<this.model.type;i++){
            this.account_games.push(game);
        }
    }

    createSoloMatch(f){
        if(!f.valid){
            alert("Lỗi");
        }
        else{
            this.account_games.forEach((element,index) => {                                           
                element.nick_name = $('input[name="nick_name_'+index+'"]').val();
                element.game_id = $('input[name="game_id_'+index+'"]').val();
                element.team_name = $('input[name="team_name"]').val();
            });                   
            this.model.user_id = this.account_login._id
            this.model.status = 1;
            this.model.post_type = 1;
            this.model.account_game = this.account_games; 
            console.log(this.model);    
            this._postController.createSoloMatch(this.model).then(result => {
                console.log(result);
            }).catch(error => {
                console.log(error);
            });
        }
    }
}

