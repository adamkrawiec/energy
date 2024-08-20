import { PrimaryGeneratedColumn } from "typeorm";

export default class BaseModel {
  // @PrimaryGeneratedColumn()
  public id: number = 0;


  constructor(id: number) {
    this.id = id
  }
}