import EstateUnit from "../../../src/RealEstate/Models/EstateUnit";
import RealEstateFactory from "./RealEstateFactory";

export default class EstateUnitFactory {
  public static create(): EstateUnit {
    return new EstateUnit(1, "Estate 1", "1", RealEstateFactory.create());
  }
}