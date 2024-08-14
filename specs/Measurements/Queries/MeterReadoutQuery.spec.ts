import { MeterFactory, ReadoutFactory } from "../factories/MeterFactory";
import MeterReadoutQuery from "../../../src/Measurements/Queries/MeterReadoutQuery";
import DB from "../../../src/db";

describe("MeterReadoutQuery", () => {
  let meter = MeterFactory.create();
  let readouts = ReadoutFactory.createList(meter);

   describe("allReadouts", () => {
    test("it returns all readouts assigned to the meter", () => {
      const meterReadoutQuery = new MeterReadoutQuery(meter);
      expect(meterReadoutQuery.allReadouts().length).toEqual(10);
    })
   });
});