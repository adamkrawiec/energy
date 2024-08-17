import { MeasuringPointCategory } from '../../../../src/Measurements/Models';
import { MeasuringPointFactory } from "../../../Measurements/factories/MeterFactory";
import EstateUnitFactory from "../../factories/EstateUnitFactory";
import MeterInstallationFactory from "../../factories/MeterInstallationFactory";
import MonthlyConsumptionSummary from "../../../../src/RealEstate/Operations/EstateUnit/MonthlyConsumptionSummary";

describe("EstaetUnit.MonthlyConsumptionSummary", () => {
  let estateUnit = EstateUnitFactory.create();
  let measuringPoint1 = MeasuringPointFactory.createWithReadouts(1, "MPE0001", MeasuringPointCategory.ELECTRICITY);
  let measuringPoint2 = MeasuringPointFactory.createWithReadouts(2, "MPG0001", MeasuringPointCategory.GAS);
  let meterInstallation1 = MeterInstallationFactory.create(1, estateUnit, measuringPoint1);
  let meterInstallation2 = MeterInstallationFactory.create(2, estateUnit, measuringPoint2);

  describe("getSummary", () => {
    test("it returns consumption value for selected month, for each category", () => {
      let service = new MonthlyConsumptionSummary(estateUnit, new Date(2020, 0, 1));
      expect(service.getSummary()).toEqual(
        [
            {
              "category": "ELECTRICITY",
              "unit": "Wh",
              "value": 90,
            },
            {
              "category": "COLD_WATER",
              "unit": "m3",
              "value": 0,
            },
            {
              "category": "WARM_WATER",
              "unit": "m3",
              "value": 0,
            },
            {
              "category": "GAS",
              "unit": "m3",
              "value": 90,
            },
            {
              "category": "HEAT",
              "unit": "",
              "value": 0,
            },
          ]
      );
    });
  });
});