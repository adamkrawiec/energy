import BaseModel from "./BaseModel";
import EstateUnit from "./EstateUnit";

export default class Tenant extends BaseModel {
  protected name: string;
  protected email: string;
  protected _estateUnit: EstateUnit | undefined;
  protected _dateFrom: Date;
  protected _dateTo: Date | undefined;

  constructor(id: number, name: string, email: string, estateUnit: EstateUnit, dateFrom: Date, dateTo: Date | undefined) {
    super(id);
    this.name = name;
    this.email = email;
    this._estateUnit = estateUnit;
    this._dateFrom = dateFrom;
    this._dateTo = dateTo;
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
