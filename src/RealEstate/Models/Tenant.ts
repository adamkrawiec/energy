import BaseModel from "./BaseModel";
import EstateUnit from "./EstateUnit";

export default class Tenant extends BaseModel {
  protected _name: string;
  protected _email: string;
  protected _estateUnit: EstateUnit | undefined;
  protected _dateFrom: Date;
  protected _dateTo: Date | undefined;

  constructor(id: number, name: string, email: string, estateUnit: EstateUnit, dateFrom: Date, dateTo: Date | undefined) {
    super(id);
    this._name = name;
    this._email = email;
    this._estateUnit = estateUnit;
    this._dateFrom = dateFrom;
    this._dateTo = dateTo;
  }

  public get name(): string {
    return this._name;
  }

  public get email(): string {
    return this._email;
  }
  public get dateFrom(): Date {
    return this._dateFrom;
  }

  public get dateTo(): Date {
    return this._dateTo;
  }

  public get estateUnit(): EstateUnit {
    return this._estateUnit;
  }
}
