import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatInputModule , MatButtonModule } from '@angular/material';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/employee/list/list.component';
import { DetailsComponent } from './component/employee/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// const appRoutes :Routes = [
// 	{ path : '/' , component : LoginComponent},
// 	{ path : 'employee' , component : ListComponent},
// ];

// export const appRouting :ModuleWithProviders = RouterModule.forRoot(appRoutes);

export class AppModule { }
