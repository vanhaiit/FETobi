import { NgModule } from '@angular/core';
import { HeaderNavComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/_auth/login/login.component';
import { UserControllerServices } from 'src/controllers/users.controllers';
import { FormsModule } from '@angular/forms';

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
        FormsModule
    ],
    providers: [
        UserControllerServices 
      ],
})
export class LayoutModule {
}