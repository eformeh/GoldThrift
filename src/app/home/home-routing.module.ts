import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from '../home/home.component';
import { LandingComponent } from '../home/landing/landing.component';
import { ForgotPasswordComponent } from '../home/forgot-password/forgot-password.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
  path: '',
  component: HomeComponent,
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: LandingComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent }
  ]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
