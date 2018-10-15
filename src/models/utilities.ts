import { Injectable, Component } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";

@Injectable()
export class Utilities {

    constructor(
        private _router: Router,
        // private _systems: SystemsControllers
    ) { }

    setCookie(name: string, value: string, exdays: number) {
        var date = new Date();
        date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    getCookie(name) {
        var item = document.cookie.split(";").filter(x => x.includes(name));
        if (!item[0]) return null;
        const cookie = item[0].split("=")[1];
        return cookie;
    }

    verifyEmail(email: string) {
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    verifyPhone(phone: any) {
        var regex = /^(0[3|5|7|8|9])+([0-9]{8})|^(09|01[2|6|8|9])+([0-9]{8})$/;
        return regex.test(phone);
    }

    verifyDate(date: string) {
        var regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
        return regex.test(date);
    }

    formatDate(date: string) {
        const _date = date.split('/');
        return _date[1] + "/" + _date[0] + "/" + _date[2];
    }

    print(body: string, title?: string) {
        var frame = document.createElement('iframe');
        frame.name = "iframe";
        frame.style.position = "absolute";
        frame.style.top = "-1000000px";
        document.body.appendChild(frame);
        var frameDoc = frame.contentWindow;
        frameDoc.document.open();
        frameDoc.document.write('<html><head><title>Dunnio.com.vn</title>');
        frameDoc.document.write('</head><body>');
        frameDoc.document.write(body);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["iframe"].focus();
            window.frames["iframe"].print();
            document.body.removeChild(frame);
        }, 500);
        return true;
    }

  

    jwt(type?: string) {
        // create authorization header with jwt token
        const token = this.getCookie("SS_U_ID");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) headers.append("x-request-id", token);
        else headers.append("x-request-id", null);
        return new RequestOptions({ headers: headers });
    }

    
}