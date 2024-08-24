
import { LoginNewComponent } from './login-new/login-new.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
// {
//     path:'',component:AppComponent, canActivate:[] ,children:[
//         { path: 'login', component: LoginNewComponent },
    
  { path: '', redirectTo: '/login', pathMatch: 'full' },
//     ]
{ path: 'login', component: LoginNewComponent },
{ path: 'layout', component: LayoutComponent }, 

];
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './login/login.component';
// import { MailComponent } from './mail/mail.component';
// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'mail', component: MailComponent },
//   { path: '', redirectTo: '/mail', pathMatch: 'full' },
//   { path: 'mail', component: MailComponent },
//   { path: 'mail/:id', component: MailComponent },
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
 


