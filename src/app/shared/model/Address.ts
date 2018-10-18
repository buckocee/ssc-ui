export class Address {
  private _street: string;
  private _unit: string;
  private _city: string;
  private _state: string;
  private _zipCode: string;

  constructor(street: string, unit: string, city: string, state: string, zipCode: string) {
    this._street = street;
    this._unit = unit;
    this._city = city;
    this._state = state;
    this._zipCode = zipCode;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get unit(): string {
    return this._unit;
  }

  set unit(value: string) {
    this._unit = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    this._zipCode = value;
  }
}
