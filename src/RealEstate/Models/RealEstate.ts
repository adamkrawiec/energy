import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import BaseModel from "./BaseModel";
import EstateUnit from "./EstateUnit";

@Entity()
export default class RealEstate extends BaseModel{
  @Column()
  public name: string;
  @Column()
  public city: string;
  @Column()
  public street: string;
  @Column()
  public number: string;

  @OneToMany(() => EstateUnit, estateUnit => estateUnit.realEstate)
  public estateUnits: EstateUnit;

  constructor(id: number, name: string, city: string, street: string, number: string) {
    super(id);
    this.name = name;
    this.city = city;
    this.street = street;
    this.number = number;
  }
}
