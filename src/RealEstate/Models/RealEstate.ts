import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import BaseModel from "./BaseModel";
import EstateUnit from "./EstateUnit";
import Account from "./Auth/Account";

export default class RealEstate extends BaseModel {

  public name: string;

  public city: string;

  public street: string;

  public number: string;

  public createdAt: Date;

  public account: Account;

  // @OneToMany(() => EstateUnit, estateUnit => estateUnit.realEstate)
  // public estateUnits: EstateUnit;

  constructor(id: number, name: string, city: string, street: string, number: string, account: Account, createdAt: Date) {
    super(id);
    this.name = name;
    this.city = city;
    this.street = street;
    this.number = number;
    this.account = account;
    this.createdAt = createdAt;
  }
}
