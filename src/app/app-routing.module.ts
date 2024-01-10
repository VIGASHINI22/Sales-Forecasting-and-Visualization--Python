import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
 {
  path:'login', title:'Login', component:LoginComponent
 },
 {
  path:'register',title:'register',component:RegisterComponent
 },
 {
  path:'dashboard',title:'prediction',component:DashboardComponent
 },
 {
  path:'', redirectTo:'login',pathMatch:"full"
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
