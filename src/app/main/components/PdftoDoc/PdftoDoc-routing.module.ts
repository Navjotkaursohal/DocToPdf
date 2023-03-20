import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdftoDocComponent } from './components/PdftoDoc.component';

const routes: Routes = [
  { path: '', component: PdftoDocComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdftoDocRoutingModule { }
