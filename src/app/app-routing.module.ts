import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routesApp: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routesApp)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
