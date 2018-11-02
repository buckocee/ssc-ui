import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddBrokerComponent} from './add-broker/add-broker.component';
import {EditBrokerComponent} from './edit-broker/edit-broker.component';
import {ListBrokersComponent} from './list-brokers/list-brokers.component';
import {BrokerDetailsComponent} from './broker-details/broker-details.component';
import {BrokersRoutingModule} from './brokers-routing.module';
import {BrokerService} from './broker.service';
import {httpInterceptorProviders} from '../shared/http-interceptors';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrokersRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AddBrokerComponent,
    EditBrokerComponent,
    ListBrokersComponent,
    BrokerDetailsComponent
  ],
  providers: [
    BrokerService,
    httpInterceptorProviders
  ]
})
export class BrokersModule {
}
