import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: '.main .text-center',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: []
})

export class LoginAdminComponent implements OnInit {
    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private cfr: ComponentFactoryResolver) {
    }

    ngOnInit() {
    }
}