import BaseModel from "./BaseModel";

export default class RealEstate extends BaseModel{
  protected _name: string;
  protected city: string;
  protected street: string;
  protected number: string;

  constructor(id: number, name: string, city: string, street: string, number: string) {
    super(id);
    this._name = name;
    this.city = city;
    this.street = street;
    this.number = number;
  }

  public get name() { return this._name }
}
