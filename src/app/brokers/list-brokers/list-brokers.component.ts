import {Component, OnInit} from '@angular/core';
import {BrokerService} from '../broker.service';
import {Broker} from '../../shared/model/Broker';

@Component({
  selector: 'app-list-brokers',
  templateUrl: './list-brokers.component.html',
  styleUrls: ['./list-brokers.component.css']
})
export class ListBrokersComponent implements OnInit {

  private brokers: Broker[] = [];

  constructor(private brokerService: BrokerService) {
  }

  ngOnInit() {
    this.brokerService.getBrokers()
      .subscribe(data => this.brokers = data,
        err => console.log(err));
  }

  getBrokers(): Broker[] {
    return this.brokers;
  }
}
