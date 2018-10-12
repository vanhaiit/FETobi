import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

@Component({
    selector: '.content',
    templateUrl: './player-detail.component.html'
})

export class PlayerDetailComponent implements OnInit {
    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent
    ) { }
    ngOnInit() {
        
     }
}