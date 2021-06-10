import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    WomenComponent,
    MenComponent,
    ProductComponent,
    // HeaderComponent,
    // FooterComponent,
    
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CoreModule,
    // HeaderComponent,
    // FooterComponent,
  ],
  exports: [
    WomenComponent,
    MenComponent,
    ProductComponent,
   
    
  ]
})
export class ProductModule { }
