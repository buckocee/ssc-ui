import {Role} from './Role';

export interface RegisteredUser {
  id: bigint;
  email: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  createdDate: Date;
  updatedDate: Date;
  status: string;
  roles: Role[];
  active: boolean;
}
