import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { AuthGuard } from '@core/guards/auth.guard';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from '../../guards/auth.guard';
// import { HelpComponent } from './help/help.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function translateHttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    LayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
    // HelpComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
    ToastrModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [
    AuthGuard
  ]
})
export class LayoutModule { }
