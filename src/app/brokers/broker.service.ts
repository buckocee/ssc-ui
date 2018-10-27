import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  private brokers: Array<string>;

  constructor() {
  }
}
