import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingModule } from 'src/app/core/components/star-rating/star-rating.module';
import { PdftoDocComponent } from './components/PdftoDoc.component';
import { PdftoDocRoutingModule } from './PdftoDoc-routing.module';

export function translateHttpLoaderFactory() {
}

@NgModule({
  declarations: [PdftoDocComponent],
  imports: [
    CommonModule,
    PdftoDocRoutingModule,
    StarRatingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
})
export class PdftoDocModule { }
