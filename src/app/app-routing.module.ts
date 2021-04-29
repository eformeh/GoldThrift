import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
const routesApp: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
];
=======
const routes: Routes = [];
>>>>>>> parent of 8bf08e09 (I created a auth routing module && auth module)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
