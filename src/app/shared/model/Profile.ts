import {Carrier} from './Carrier';
import {Role} from './Role';

export interface Profile {
  id: number;
  email: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  isActive: boolean;
  createdDate: string;
  updatedDate: string;
  status: string;
  carrier: Carrier;
  roles: Role[];
}
