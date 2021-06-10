import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent,
    LandingComponent,
    ForgotPasswordComponent,
    AboutUsComponent,
    // HeaderComponent,
    // FooterComponent,
    
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,

  ],
  exports: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    // HeaderComponent,
    // FooterComponent,
  ]
})
export class HomeModule { }
