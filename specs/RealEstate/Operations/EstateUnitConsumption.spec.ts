import EstateUnitConsumption from '../../../src/RealEstate/Operations/EstateUnitConsumption';
import { MeasuringPointFactory, } from '../../Measurements/factories/MeterFactory';
import EstateUnitFactory from '../factories/EstateUnitFactory';
import MeterInstallationFactory from '../factories/MeterInstallationFactory';

describe("EstateUnitConsumption", () => {
  let estateUnit = EstateUnitFactory.create();
  let measuringPoint1 = MeasuringPointFactory.createWithReadouts();
  let measuringPoint2 = MeasuringPointFactory.createWithReadouts();
  let meterInstallation1 = MeterInstallationFactory.create(estateUnit, measuringPoint1);
  let meterInstallation2 = MeterInstallationFactory.create(estateUnit, measuringPoint2);

  let consumptionService = new EstateUnitConsumption(estateUnit);

  describe("consumption", () => {
    test("it returns a sum of all measuring point consumptions assigned to estate unit", () => {
      // 2 * (100 - 10) = 180
      expect(consumptionService.consumption()).toEqual(180);
    });
  });

  describe("consumptionOnDate", () => {
    describe("when there is no readout for the date", () => {
      test("it returns undefined", () => {
        expect(consumptionService.consumptionOnDate(new Date(2022, 0, 1))).toBeUndefined();
      });
    });

    describe("when there is a readout for the date", () => {
      test("it returns a sum of readout values for the date", () => {
        expect(consumptionService.consumptionOnDate(new Date(2020, 0, 1))).toEqual(20);
      });
    });
  });

  describe("consumptionBetweenDates", () => {
    describe("when there is a readout for first, and last date", () => {
      test("it retuns a difference of readout value for the last date, and first date", () => {
        expect(consumptionService.consumptionBetween(new Date(2020, 0, 3), new Date(2020, 0, 7))).toEqual(80);
      });
    })

    describe("when there is a readout for first, but no readout for last date", () => {
      test("it retuns a difference of readout value for the last readout available, and first date", () => {
        expect(consumptionService.consumptionBetween(new Date(2020, 0, 1), new Date(2020, 2, 1))).toEqual(180);
      });
    });

    describe("when there is no readout for first, but is readout for last date", () => {
      test("it retuns a difference of readout value for the first readout, and the last available", () => {
        expect(consumptionService.consumptionBetween(new Date(2019, 11, 31), new Date(2020, 0, 7))).toEqual(120);
      });
    });

    describe("when there are no readouts in the range", () => {
      test("it returns 0", () => {
        expect(consumptionService.consumptionBetween(new Date(2021, 0, 1), new Date(2021, 0, 10))).toEqual(0);
      });
    });
  });
});