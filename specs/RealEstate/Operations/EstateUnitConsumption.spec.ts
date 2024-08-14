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

  describe("consumption", () => {
    test("it returns a sum of all measuring point consumptions assigned to estate unit", () => {
      let consumptionService = new EstateUnitConsumption(estateUnit);

      expect(consumptionService.consumption()).toEqual(1100);
    });
  })
});