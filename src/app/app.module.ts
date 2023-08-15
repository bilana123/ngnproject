import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//mport { ComponentNameComponent } from './component-name/component-name.component';
import { SignupformComponent } from './signupform/signupform.component';
import { MenuComponent } from './menu/menu.component';
import { AgencyComponent } from './agency/agency.component';
import { DeptComponent } from './dept/dept.component';
import { UserComponent } from './user/user.component';
//import { FormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent,
    MenuComponent,
    AgencyComponent,
    DeptComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
