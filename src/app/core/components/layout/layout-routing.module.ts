import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { LayoutComponent } from './components/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: () => import('../../../main/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'DoctoPdf', loadChildren: () => import('../../../main/components/DoctoPdf/DoctoPDf.module').then(m => m.DoctoPdfModule) },
      { path: 'PdftoDoc', loadChildren: () => import('../../../main/components/PdftoDoc/PdftoDoc.module').then(m => m.PdftoDocModule) },
    ],
    // canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
