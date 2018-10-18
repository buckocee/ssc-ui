import {Address} from './Address';

export class Carrier {
  private _dotNumber: string;
  private _mcNumber: string;
  private _mailingAddress: Address;
  private _physicalAddress: Address;
  private _phoneNumber: string;
  private _faxNumber: string;

  constructor(dotNumber: string, mcNumber: string, mailingAddress: Address, physicalAddress: Address, phoneNumber: string,
              faxNumber: string) {
    this._dotNumber = dotNumber;
    this._mcNumber = mcNumber;
    this._mailingAddress = mailingAddress;
    this._physicalAddress = physicalAddress;
    this._phoneNumber = phoneNumber;
    this._faxNumber = faxNumber;
  }

  get dotNumber(): string {
    return this._dotNumber;
  }

  set dotNumber(value: string) {
    this._dotNumber = value;
  }

  get mcNumber(): string {
    return this._mcNumber;
  }

  set mcNumber(value: string) {
    this._mcNumber = value;
  }

  get mailingAddress(): Address {
    return this._mailingAddress;
  }

  set mailingAddress(value: Address) {
    this._mailingAddress = value;
  }

  get physicalAddress(): Address {
    return this._physicalAddress;
  }

  set physicalAddress(value: Address) {
    this._physicalAddress = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get faxNumber(): string {
    return this._faxNumber;
  }

  set faxNumber(value: string) {
    this._faxNumber = value;
  }
}
