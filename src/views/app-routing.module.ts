import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	//{ path: 'login', loadChildren: '../_auth/auth.module#AuthModule' },
	//{ path: 'logout', component: LogoutComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '', redirectTo: 'playerdetail', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }