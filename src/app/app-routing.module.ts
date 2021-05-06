import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routesApp: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesApp)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
