import {Address} from './Address';

export interface Carrier {
  id: number;
  dotNumber: string;
  mcNumber: string;
  businessName: string;
  mailingAddress: Address;
  physicalAddress: Address;
  phoneNumber: string;
  faxNumber: string;
  status: string;
}
