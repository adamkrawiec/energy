import RealEstate from "../../../src/RealEstate/Models/RealEstate";
import { AccountFactory } from "../factories/Auth/AccountFactory";
import RealEstateFactory from "../factories/RealEstateFactory";

describe("Model.RealEstate", () => {
  test("it has a name", () => {
    let realEstate = RealEstateFactory.create();

    expect(realEstate.name).toEqual("RE1");
  });
});
