import { MeasuringPointFactory } from "../../../Measurements/factories/MeterFactory";
import EstateUnitFactory from "../../factories/EstateUnitFactory";
import MeterInstallationFactory from "../../factories/MeterInstallationFactory";

import MeterInstallationStatusSummary from '../../../../src/RealEstate/Operations/EstateUnit/MeterInstallationStatusSummary'

describe("MeterInstallationStatusSummary", () => {
  let estateUnit = EstateUnitFactory.create();
  let measuringPoint = MeasuringPointFactory.createWithReadouts();
  let meterInstallation = MeterInstallationFactory.create(1, estateUnit, measuringPoint);

  describe("getSummary", () => {
    test("it returns a list of meters and their statuses", () => {
      expect(new MeterInstallationStatusSummary(estateUnit).getSummary()).toEqual(
        [
          {
            meter: measuringPoint.identifier,
            status: 'online'
          }
        ]
      );
    })
  });
})