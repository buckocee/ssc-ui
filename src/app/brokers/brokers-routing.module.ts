import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddBrokerComponent} from './add-broker/add-broker.component';
import {ListBrokersComponent} from './list-brokers/list-brokers.component';

const routes: Routes = [
  {
    path: '',
    component: ListBrokersComponent
  },
  {
    path: 'create',
    component: AddBrokerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokersRoutingModule {
}
