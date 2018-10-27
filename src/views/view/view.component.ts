import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ScriptLoaderService } from '../../_services/script-loader.service';

declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;
@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: "./view.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ViewComponent implements OnInit {


    constructor(
        private _script: ScriptLoaderService,
        private _router: Router
    ) { }
    ngOnInit() {
        this._script.loadScripts(
            'body', [
                'assets/vendor/jquery/jquery-3.2.1.min.js',
                'assets/vendor/animsition/js/animsition.min.js',
                // 'assets/vendor/bootstrap/js/popper.js',
                 //'assets/vendor/bootstrap/js/bootstrap.min.js',
                 'assets/vendor/select2/select2.min.js',
                // 'assets/vendor/daterangepicker/moment.min.js',
                // 'assets/vendor/daterangepicker/daterangepicker.js',
                // 'assets/vendor/slick/slick.min.js',
                // 'assets/js/slick-custom.js',
                 'assets/vendor/parallax100/parallax100.js',
                 'assets/vendor/MagnificPopup/jquery.magnific-popup.min.js',
                 'assets/vendor/isotope/isotope.pkgd.min.js',
                 'assets/vendor/sweetalert/sweetalert.min.js',
                 'assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js',
                'assets/js/main.js',
                'assets/js/index.js'
            ],
        );
    }
}