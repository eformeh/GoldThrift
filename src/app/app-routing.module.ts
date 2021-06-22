import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './home/landing/landing.component';
// import { ProductComponent } from './products/product.component';

const routesApp: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component:LandingComponent },

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
  },
  { path: '**',
    component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routesApp)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
