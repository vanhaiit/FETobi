import { NgModule } from '@angular/core';
import { HeaderNavComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/_auth/login/login.component';

@NgModule({
    declarations: [
        HeaderNavComponent,
        FooterComponent,
        LoginComponent
    ],
    exports: [
        HeaderNavComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}