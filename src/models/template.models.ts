import { Injectable, Component } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";

import { forEach } from "@angular/router/src/utils/collection";
import { CurrencyPipe, DatePipe } from "@angular/common";

// import { SystemsControllers } from "../controllers";

@Injectable()
export class Template {
    constructor(
        private _currencyPipe: CurrencyPipe,
        private _datepipe: DatePipe,
    ) { }

   
    templatePrintOrder(orders:any, userinfor?: any) {
        let items = "";
        let note = "";
        let nodetetail = "";
        let main = this;
        orders.items.forEach((item, index) => {
            items += `<tr>
            <td style="border:0.5px solid;border-top:none;border-right:none ;padding:1.5% 0">${item.productid}</td>
            <td style="border:0.5px solid;border-top:none;border-right:none ; text-align: center;padding:1.5% 0">${item.name}</td>
            <td style="border:0.5px solid;border-top:none;border-right:none ; text-align: center;padding:1.5% 0">${item.price ? main._currencyPipe.transform(item.price, 'VND') : "0đ"}</td>
            <td style="border:0.5px solid;border-top:none;border-right:none ; text-align: center;padding:1.5% 0">${item.discount ? item.discount : "0"}%</td>
            <td style="border:0.5px solid;border-top:none; text-align: right;padding:1.5% 0">${item.price ? main._currencyPipe.transform(item.price * item.quantity, 'VND') : "0đ"}</td>
        </tr>`;
            item.design_parameters.forEach((p) => {
                p.value.forEach((v, i) => {
                    if (i === p.value.length - 1) {
                        nodetetail += v.name + " " + v.value + "  ";
                    }
                    else nodetetail += v.name + " " + v.value + " , ";

                });
            });
            note += ` <tr>
        <td style="padding:1% 0">♦ ${item.productid}: ${nodetetail}</td>
        </tr>`
        });

        let template = `<div style="padding: 1%; font-size:0.8em;font-family:tahoma;">
        <div cellpadding="0" cellspacing="0" style="width:100%;border-bottom: 5px solid;">
            <div cellpadding="0" cellspacing="0" style="width: 70%;margin: 0 auto;margin-bottom: 15px;">
                <img width="250" style="width: 100%;margin: 0 auto" height="50" src="../../../../assets/app/media/img/files/imgpsh_fullsize.png"
                    alt="Responsive image">
    
            </div>
        </div>
    
        <div style="width: 100%; text-align: center;padding:10px 0 0  0;font-size:1.5em"><strong>ĐƠN HÀNG BÁN LẺ</strong></div>
    
        <table cellpadding="0" cellspacing="0" style="width:100%;font-size:0.8em; border-bottom-width: 2px;">
            <tbody>
                <tr>
                    <td style="width: 55%;font-weight: bold">Số: ${orders.orderid}</td>
                    <td style="text-align: right;font-weight: bold">Ngày: ${main._datepipe.transform(orders.date_created, 'dd/MM/yyy')}</td>
                </tr>
                <tr>
                    <td style="width: 55%;font-weight: bold">${orders.customer_info.customer_name}</td>
                    <td style="text-align: right;font-weight: bold">${orders.customer_info.phone}</td>
                </tr>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
            </tbody>
        </table>
    
        <table cellpadding="0" cellspacing="0" style="width:100%;font-size:0.7em">
            <tbody>
                <tr>
                    <td style="width: 20%; text-align: center; border:0.8px solid ;border-right:none; padding:1.5% 0;"><strong>ID</strong></td>
                    <td style="width: 20%; border:0.8px solid ;border-right:none; text-align: center;padding:1.5% 0"><strong>Sản phẩm</strong></td>
                    <td style="width: 20%; border:0.8px solid ;border-right:none; text-align: center;padding:1.5% 0"><strong>Đơn giá</strong></td>
                    <td style="width: 15%; border:0.8px solid ;border-right:none; text-align: center;padding:1.5% 0"><strong>CK</strong></td>
                    <td style="border:0.8px solid;text-align: center;padding:1.5% 0"><strong>Thành tiền</strong></td>
                </tr>
               ${items}
            </tbody>
        </table>
    
        <div>&nbsp;</div>
    
        <table cellpadding="0" cellspacing="0" style="width:100%;font-size:0.9em ;border-bottom-style: dotted">
            <tbody>
                <tr>
                    <td style="width: 50%;font-weight: bold;padding:1% 0">Tổng tiền hàng:</td>
                    <td style="font-weight: bold;text-align: right;padding:1% 0">${main._currencyPipe.transform(orders.total_cost, 'VND')}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;padding:1% 0">Giảm giá:</td>
                    <td style="text-align: right;padding:1% 0">${main._currencyPipe.transform(orders.discount, 'VND')}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;padding:1% 0"><strong>Đã thanh toán:</strong></td>
                    <td style="text-align: right;padding:1% 0">${main._currencyPipe.transform(orders.paid, 'VND')}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;padding:1% 0">Còn lại:</td>
                    <td style="font-weight: bold;text-align: right;padding:1% 0">${main._currencyPipe.transform(orders.unpaid, 'VND')}</td>
                </tr>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
    
            </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" style="width:100%;font-size:0.9em ;border-bottom-style: dotted">
            <tbody>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
                <tr>
                    <td style="font-size:1em ;width: 100%;font-weight: bold;padding:1% 0">Chú thích sản phẩm:</td>
    
                </tr>
                ${note}
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
            </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" style="width:100%;font-size:0.8em ;border-bottom-style: dotted">
            <tbody>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
                <tr>
                    <td style="font-size:1em ;width: 100%;font-weight: bold;padding:1% 0">Ngày hẹn:</td>
    
                </tr>
                <tr>
                    <td style="font-weight: bold;padding:1% 0">Thử 1: ${main._datepipe.transform(orders.try_date.one, 'dd/MM/yyyy')}</td>
                    <td style="font-weight: bold;text-align: right;padding:1% 0">Thử 2: ${main._datepipe.transform(orders.try_date.two, 'dd/MM/yyyy')}</td>
                </tr>
               
                <tr>
                    <td style="font-size:1em ;width: 55%;font-weight: bold;padding:1% 0">Ghi chú đơn hàng :</td>
                </tr>
                <tr>
                <td style="font-size:1em ;width: 55%;padding:1% 0">${orders.description}</td>
                </tr>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
            </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" style="width:100%;font-size:0.8em;border-bottom: 8px solid;">
            <tbody>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
                <tr>
                    <td style="width: 50%;font-weight: bold;padding:1% 0">Đia chỉ: ${orders.store_info.address}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;padding:1% 0" style="display: ${!orders.store_info.phone ? "none" : "flex"}" >Điện thoại : ${!orders.store_info.phone ? "....................." : orders.store_info.phone}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;padding:1% 0">Tư vấn : ${userinfor.display_name}</td>
                </tr>
    
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
            </tbody>
        </table>
        <div style="width: 100%;font-size:1em; text-align: center;padding:10px 0 0  10px;"><em>Cám ơn quý khách. Hẹn gặp
                lại!</em></div>
    </div>
    
    <footer style="page-break-after: always">.</footer>`;
        return template;

    }
}