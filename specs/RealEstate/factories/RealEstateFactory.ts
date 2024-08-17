import { Account, RealEstate } from "../../../src/RealEstate/Models";
import { AccountFactory } from "./Auth/AccountFactory";

export default class RealEstateFactory {
  public static create(id: number = 1, name: string = "RE1"): RealEstate {
    return new RealEstate(id, name, "London", "Main Road",  "1", AccountFactory.create(), new Date());
  }
}