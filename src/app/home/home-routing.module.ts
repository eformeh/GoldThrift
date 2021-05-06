import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
  children: [
  { path: 'login', component: LoginComponent, },
  { path: 'signup', component: SignupComponent },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
