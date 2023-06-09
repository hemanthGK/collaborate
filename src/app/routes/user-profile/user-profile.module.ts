import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module'; 

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuotationHistoryComponent } from './partials/quotation-history/quotation-history.component';
import { ROUTED_COMPONENTS, UserProfileRoutingModule } from './user-profile-routing.module';



@NgModule({
  declarations: [
    ROUTED_COMPONENTS,
    QuotationHistoryComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    UserProfileRoutingModule
  ],
  exports: [
    RouterModule,
    SharedModule
  ]
})
export class UserProfileModule { }
