import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

@Component({
    selector: '.content',
    templateUrl: './sigup.component.html'
})

export class SigupComponent implements OnInit {
    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent
    ) { }
    ngOnInit() {
        
     }
}