import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingModule } from 'src/app/core/components/star-rating/star-rating.module';
// import { FirewallBandwidthComponent } from './firewall-bandwidth/firewallBandwidth.component';
// import { FirewallDurationComponent } from './firewall-duration/firewallDuration.component';
// import { FirewallProtectionComponent } from './firewall-protection/firewallProtection.component';

export function translateHttpLoaderFactory() {
}

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StarRatingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule { }
