import RealEstateCreator from "../RealEstate/Operations/RealEstateCreator";
import RealEstate from "../RealEstate/Models/RealEstate";

export default class RealEstateSeeds {
  private realEstateCreator: RealEstateCreator;
  constructor() {
    this.realEstateCreator = new RealEstateCreator();
  }

  seed(): RealEstate[] {
    const re1: RealEstate = this.realEstateCreator.create(1, "RE0001", "Warszawa", "Puławska", "1");
    const re2: RealEstate = this.realEstateCreator.create(2, "RE0001", "Warszawa", "Odolańska", "3");
  
    return [re1, re2];
  }
}