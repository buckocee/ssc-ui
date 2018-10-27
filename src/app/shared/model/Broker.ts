import {Address} from './Address';

export interface Broker {
  id: number;
  businessName: String;
  dotNumber: string;
  mcNumber: string;
  phoneNumber: string;
  faxNumber: string;
  state: String;
  city: String;
  status: String;
}
