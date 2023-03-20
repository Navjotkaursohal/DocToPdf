import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: () => import('@core/components/layout/layout.module').then(m => m.LayoutModule)},
  { path: '', loadChildren: () => import('./core/components/layout/layout.module').then(m => m.LayoutModule)},
  // { path: 'signin', loadChildren: () => import('./main/components/signin/signin.module').then(m => m.SigninModule)},
  { path: 'dashboard', loadChildren: () => import('./main/components/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
