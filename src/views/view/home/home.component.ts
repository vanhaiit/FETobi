import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from 'src/_services/script-loader.service';

@Component({
    selector: '.content',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent
    ) { }
    ngOnInit() {
        this._script.loadScripts(
            'body', [
                // 'assets/vendor/jquery/jquery-3.2.1.min.js',
                // 'assets/vendor/animsition/js/animsition.min.js',
                // 'assets/vendor/bootstrap/js/popper.js',
                // 'assets/vendor/bootstrap/js/bootstrap.min.js',
                // 'assets/vendor/select2/select2.min.js',
                // 'assets/vendor/daterangepicker/moment.min.js',
                // 'assets/vendor/daterangepicker/daterangepicker.js',
                'assets/vendor/slick/slick.min.js',
                'assets/js/slick-custom.js',
                // 'assets/vendor/parallax100/parallax100.js',
                // 'assets/vendor/MagnificPopup/jquery.magnific-popup.min.js',
                // 'assets/vendor/isotope/isotope.pkgd.min.js',
                // 'assets/vendor/sweetalert/sweetalert.min.js',
                // 'assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js',
                // 'assets/js/main.js',
                // 'assets/js/index.js'
            ]
        );
    }
}