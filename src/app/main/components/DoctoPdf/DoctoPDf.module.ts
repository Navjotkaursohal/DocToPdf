import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingModule } from 'src/app/core/components/star-rating/star-rating.module';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { HighchartsChartModule } from 'highcharts-angular';
import { DoctoPdfComponent } from './components/DoctoPdf.component';
import { DoctoPdfRoutingModule } from './DoctoPdf-routing.module';

export function translateHttpLoaderFactory() {
}

@NgModule({
  declarations: [DoctoPdfComponent],
  imports: [
    CommonModule,
    DoctoPdfRoutingModule,
    StarRatingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
})
export class DoctoPdfModule { }
