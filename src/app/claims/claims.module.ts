import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddClaimComponent} from './add-claim/add-claim.component';
import {EditClaimComponent} from './edit-claim/edit-claim.component';
import {DeleteClaimComponent} from './delete-claim/delete-claim.component';
import {ListClaimsComponent} from './list-claims/list-claims.component';
import {ClaimDetailsComponent} from './claim-details/claim-details.component';
import {MaterialModule} from '../shared/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClaimsRoutingModule} from './claims-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ClaimService} from './claim.service';
import {httpInterceptorProviders} from '../shared/http-interceptors';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClaimsRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    AddClaimComponent,
    EditClaimComponent,
    DeleteClaimComponent,
    ListClaimsComponent,
    ClaimDetailsComponent
  ],
  providers: [
    ClaimService,
    httpInterceptorProviders
  ]
})
export class ClaimsModule {
}
