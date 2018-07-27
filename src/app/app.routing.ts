import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/employee/list/list.component';
import { DetailsComponent } from './component/employee/details/details.component';

const appRoutes: Routes = [
	{
		path:'',
		component: LoginComponent
	},
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'employee',
		component:ListComponent
	},
	{
		path:'details',
		component:DetailsComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes
		)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule{}