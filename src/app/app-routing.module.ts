import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'assets',
    loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: "",
    pathMatch:"full",
    redirectTo:"assets"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
