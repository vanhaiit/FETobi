import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

//declare let mLayout: any;

@Component({
    selector: "app-header-nav",
    templateUrl: "./header.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    accounts: any = {};
    constructor() {

    }
    ngOnInit() {
        const key = localStorage.getItem("user-submit");
        if (key) this.accounts = JSON.parse(key);

    }
    ngAfterViewInit() {

    }

}