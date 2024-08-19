import { MeasuringPoint, Meter } from '../../../src/Measurements/Models';
import { MeasuringPointFactory, MeterFactory } from '../factories/MeterFactory';

describe("MeasuringPoint", () => {
  let measuringPoint: MeasuringPoint = MeasuringPointFactory.create();
  let installedMeter: Meter = MeterFactory.createWithReadouts(1, "METER1", measuringPoint, new Date());
  let dismantledMeter: Meter = MeterFactory.create(1, "METER1", measuringPoint, new Date(), new Date());

  describe("meters", () => {
    test("it returns all meters assigned to the measuring point", () => {
      expect(measuringPoint.meters).toContain(installedMeter);
      expect(measuringPoint.meters.length).toEqual(2);
    });
  });

  describe("currentMeter", () => {
    test("it returns meter that is installed, but not dismantled", () => {
      expect(measuringPoint.currentMeter).toEqual(installedMeter);
    })
  });

  describe("currentMeterStatus", () => {
    test("it returns status of a current meter", () => {
      expect(measuringPoint.currentMeterStatus()).toEqual("online");
    })
  });

  describe("consumption", () => {
    test("it returns consumption value of the measuring point", () => {
      expect(measuringPoint.consumption()).toEqual(90);
    })
  })
});