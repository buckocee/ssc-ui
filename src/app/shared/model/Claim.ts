import {Carrier} from './Carrier';
import {Broker} from './Broker';

export interface Claim {
  claimId: number;
  submitDate: string;
  updateDate: string;
  description: string;
  userId: number;
  carrier: Carrier;
  broker: Broker;
  invoiceNumber: string;
  loadDate: Date;
  loadType: string;
  amount: string;
  invoicePayableDate: Date;
  haulageDistance: number;
  status: string;
}
