import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from 'src/_services/script-loader.service';
import { Utilities } from 'src/models/utilities';

@Component({
    selector: '.content',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit, AfterViewInit {
    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent,
        private _utilities: Utilities
    ) { }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts(
            'body', [
                'assets/vendor/slick/slick.min.js',
                'assets/js/slick-custom.js',
            ]
        );
    }
}