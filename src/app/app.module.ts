import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule }   from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    

    PageNotFoundComponent,
    // HomeComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule  
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }


