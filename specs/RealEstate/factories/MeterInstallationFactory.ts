import { MeasuringPoint } from "../../../src/Measurements/Models";
import { EstateUnit } from "../../../src/RealEstate/Models";
import MeterInstallation from "../../../src/RealEstate/Models/MeterInstallation";
import DB from "../../../src/db";
import { MeasuringPointFactory } from "../../Measurements/factories/MeterFactory";
import EstateUnitFactory from "./EstateUnitFactory";

export default class MeterInstallationFactory {
  public static create(estateUnit: EstateUnit = EstateUnitFactory.create(),
                       measuringPoint: MeasuringPoint = MeasuringPointFactory.create()): MeterInstallation {
    let mi = new MeterInstallation(measuringPoint, estateUnit);
    DB.getInstance().meterInstallations.push(mi);
    return mi;
  }
}