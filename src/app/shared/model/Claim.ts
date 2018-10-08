import {Carrier} from './Carrier';
import {Broker} from './Broker';

export class Claim {
  private readonly _userId: number;
  private _carrier: Carrier;
  private _broker: Broker;
  private _invoiceNumber: string;
  private _loadDate: Date;
  private _loadType: string;
  private _amount: string;
  private _invoicePayableDate: Date;
  private _distanceInMiles: number;

  constructor({
                userId, carrier, broker, invoiceNumber, loadDate, loadType, amount,
                invoicePayableDate, distanceInMiles
              }) {
    this._userId = userId;
    this._carrier = carrier;
    this._broker = broker;
    this._invoiceNumber = invoiceNumber;
    this._loadDate = loadDate;
    this._loadType = loadType;
    this._amount = amount;
    this._invoicePayableDate = invoicePayableDate;
    this._distanceInMiles = distanceInMiles;
  }

  get userId(): number {
    return this._userId;
  }

  get carrier(): Carrier {
    return this._carrier;
  }

  set carrier(value: Carrier) {
    this._carrier = value;
  }

  get broker(): Broker {
    return this._broker;
  }

  set broker(value: Broker) {
    this._broker = value;
  }

  get invoiceNumber(): string {
    return this._invoiceNumber;
  }

  set invoiceNumber(value: string) {
    this._invoiceNumber = value;
  }

  get loadDate(): Date {
    return this._loadDate;
  }

  set loadDate(value: Date) {
    this._loadDate = value;
  }

  get loadType(): string {
    return this._loadType;
  }

  set loadType(value: string) {
    this._loadType = value;
  }

  get amount(): string {
    return this._amount;
  }

  set amount(value: string) {
    this._amount = value;
  }

  get invoicePayableDate(): Date {
    return this._invoicePayableDate;
  }

  set invoicePayableDate(value: Date) {
    this._invoicePayableDate = value;
  }

  get distanceInMiles(): number {
    return this._distanceInMiles;
  }

  set distanceInMiles(value: number) {
    this._distanceInMiles = value;
  }
}
