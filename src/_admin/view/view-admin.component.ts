import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ScriptLoaderService } from '../../_services/script-loader.service';

declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;
@Component({
    selector: "main-admin",
    templateUrl: "./view-admin.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ViewAdminComponent implements OnInit {


    constructor(
        private _script: ScriptLoaderService,
        private _router: Router
    ) { }
    ngOnInit() {
       
    }
}