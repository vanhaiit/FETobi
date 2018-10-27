import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from 'src/_services/script-loader.service';
import { Utilities } from 'src/models/utilities';

@Component({
    selector: '.content',
    templateUrl: './invite-to-play.component.html'
})

export class InviteToPlayComponent implements OnInit, AfterViewInit {
    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent,
        private _utilities: Utilities
    ) { }
    ngOnInit() {

    }
    ngAfterViewInit() {
        
    }
}