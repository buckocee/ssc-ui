import {Address} from './Address';

export interface Carrier {
  id: number;
  dotNumber: string;
  mcNumber: string;
  businessName: string;
  mailingAddress: Address;
  physicalAddress: Address;
  email: string;
  phoneNumber: string;
  faxNumber: string;
  status: string;
}
