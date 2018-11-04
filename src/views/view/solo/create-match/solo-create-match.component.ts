import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostControllerServices } from 'src/controllers/post.controllers';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
    selector: '.content',
    templateUrl: './solo-create-match.component.html',
    providers: [PostControllerServices]
})

export class SoloCreateMatchComponent implements OnInit, AfterViewInit {
    display: boolean = true;
    model: any = {};
    account_games: any = [];
    account_login: any = {};
    list: any = [];

    constructor(
        private _router: Router,
        private _postController: PostControllerServices
    ) { }
    ngOnInit() {
        const key = localStorage.getItem("user-submit");
        if (key) this.account_login = JSON.parse(key);
    }
    ngAfterViewInit() {

    }

    btnNextClick() {
        this.display = false;
        this.account_games = [];
        var game: any = {
            nick_name: null,
            game_id: null,
        };
        for (let i = 0; i < this.model.type; i++) {
            this.account_games.push(game);
        }
    }

    createSoloMatch(f) {
        if (!f.valid) {
            alert("Lỗi");
        }
        else {
            var account_game = [];
            this.account_games.forEach((element, index) => {
                element = {};
                element.nick_name = $('input[name="nick_name_' + index + '"]').val();
                element.game_id = $('input[name="game_id_' + index + '"]').val();
                account_game.push(element);
            });
           
            this.model.user_id = this.account_login._id
            this.model.status = 1;
            this.model.post_type = 1;
            this.model.account_game = account_game;
            this._postController.createSoloMatch(this.model).then(result => {               
                this._router.navigate(['/solo/solo-detail-match',result.data.ops[0]._id]);
            }).catch(error => {
                console.log(error);
            });
        }
    }
}

