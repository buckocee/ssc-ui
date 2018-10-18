import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddBrokerComponent} from './add-broker/add-broker.component';
import {EditBrokerComponent} from './edit-broker/edit-broker.component';
import {ListBrokersComponent} from './list-brokers/list-brokers.component';
import {BrokerDetailsComponent} from './broker-details/broker-details.component';
import {BrokersRoutingModule} from './brokers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrokersRoutingModule
  ],
  declarations: [AddBrokerComponent, EditBrokerComponent, ListBrokersComponent, BrokerDetailsComponent]
})
export class BrokersModule {
}
