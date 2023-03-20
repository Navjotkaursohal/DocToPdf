import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctoPdfComponent } from './components/DoctoPdf.component';

const routes: Routes = [
  { path: '', component: DoctoPdfComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctoPdfRoutingModule { }
