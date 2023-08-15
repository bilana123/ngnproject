import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AgencyComponent } from './agency/agency.component';
import { DeptComponent } from './dept/dept.component';
import { LoginformComponent } from './loginform/loginform.component';

const routes: Routes = [
  { path: '', component: LoginformComponent },
  { path: 'agency', component: AgencyComponent },
  { path: 'dept', component: DeptComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
