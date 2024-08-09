import RealEstate from "../../../src/RealEstate/Models/RealEstate";

export default class RealEstateFactory {
  public static create(): RealEstate {
    return new RealEstate(1, "RE1", "London", "Main Road", "1");
  }
}