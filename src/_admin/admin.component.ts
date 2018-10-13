import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoaderService } from '../_services/script-loader.service';

@Component({
    selector: 'main-admin .main',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: []
})

export class AdminComponent implements OnInit {
    model: any = {};
    loading = false;
    isFailed = false;
    message = null;
    returnUrl: string;
    constructor(
        private _router: Router,
        private _script: ScriptLoaderService,
        private _route: ActivatedRoute,
        private cfr: ComponentFactoryResolver) {
    }
    ngOnInit() {
    }
}