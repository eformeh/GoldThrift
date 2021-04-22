import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routesApp: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routesApp)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
