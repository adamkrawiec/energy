import { RealEstate } from "../../Models";

export default class RealEstateConsumption {
  private realEstate: RealEstate;
  private month: Date;
  
  constructor(realEstate: RealEstate, month: Date) {
    this.realEstate = realEstate;
    this.month = month;
  }
}