import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { ProductComponent } from './product.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
  path: '',
  component: ProductComponent,
  children: [

    { path: 'men', component: MenComponent },
    { path: 'women', component: WomenComponent },
  ]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
