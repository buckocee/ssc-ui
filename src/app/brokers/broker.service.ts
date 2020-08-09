import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Broker} from '../shared/model/Broker';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  private brokers: Array<string>;

  constructor(private http: HttpClient) {
  }

  public getBrokers(): Observable<Broker[]> {
    return this.http.get<Broker[]>('api/v1/brokers');
  }
}
