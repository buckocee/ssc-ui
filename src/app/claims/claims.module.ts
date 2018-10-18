import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddClaimComponent} from './add-claim/add-claim.component';
import {EditClaimComponent} from './edit-claim/edit-claim.component';
import {DeleteClaimComponent} from './delete-claim/delete-claim.component';
import {ListClaimsComponent} from './list-claims/list-claims.component';
import {ClaimDetailsComponent} from './claim-details/claim-details.component';
import {MaterialModule} from '../shared/material/material.module';
import {FormsModule} from '@angular/forms';
import {ClaimsRoutingModule} from './claims-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ClaimsRoutingModule
  ],
  declarations: [
    AddClaimComponent,
    EditClaimComponent,
    DeleteClaimComponent,
    ListClaimsComponent,
    ClaimDetailsComponent
  ]
})
export class ClaimsModule {
}
