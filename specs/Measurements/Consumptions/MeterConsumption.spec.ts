import { MeterFactory, ReadoutFactory } from "../factories/MeterFactory";
import MeterConsumption from '../../../src/Measurements/Consumptions/MeterConsumption';

describe("MeterConsumption", () => {
  let meter = MeterFactory.create();
  let readouts = ReadoutFactory.createList(meter);

  describe('consumption', () => {
    test('it returns a sum of readout values', () => {
      const meterConsumption = new MeterConsumption(meter);

      expect(meterConsumption.consumption()).toEqual(550);
    })
  })
})