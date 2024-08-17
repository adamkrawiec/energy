import RealEstateCreator from "../RealEstate/Operations/RealEstateCreator";
import RealEstate from "../RealEstate/Models/RealEstate";
import { Account } from "../RealEstate/Models";

export default class RealEstateSeeds {
  private realEstateCreator: RealEstateCreator;
  private account: Account;

  constructor() {
    this.realEstateCreator = new RealEstateCreator();
    this.account = new Account(1, "ACC1", "acc");
  }

  seed(): RealEstate[] {
    const re1: RealEstate = this.realEstateCreator.create(1, "RE0001", "Warszawa", "Puławska", "1", this.account);
    const re2: RealEstate = this.realEstateCreator.create(2, "RE0001", "Warszawa", "Odolańska", "3", this.account);
  
    return [re1, re2];
  }
}