import RealEstate from "../../../src/RealEstate/Models/RealEstate";

describe("Model.RealEstate", () => {
  test("it has a name", () => {
    let realEstate = new RealEstate(1, "RE1", "Katowice", "Bocianow", "1");

    expect(realEstate.name).toEqual("RE1");
  });
});
