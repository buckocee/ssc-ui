import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListClaimsComponent} from './list-claims/list-claims.component';
import {EditClaimComponent} from './edit-claim/edit-claim.component';
import {AddClaimComponent} from './add-claim/add-claim.component';
import {DeleteClaimComponent} from './delete-claim/delete-claim.component';

const routes: Routes = [
  {
    path: '',
    component: ListClaimsComponent
  },
  {
    path: ':id',
    component: EditClaimComponent
  },
  {
    path: 'edit/:id',
    component: EditClaimComponent
  },
  {
    path: 'create',
    component: AddClaimComponent
  },
  {
    path: 'delete/:id',
    component: DeleteClaimComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule {
}
