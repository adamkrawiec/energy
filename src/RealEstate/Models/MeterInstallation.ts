import { MeasuringPoint } from "../../Measurements/Models/Meter";
import EstateUnit from "./EstateUnit";
import RealEstate from "./RealEstate";

export default class MeterInstallation {
  estateUnit: EstateUnit | null;
  realEstate: RealEstate | EstateUnit | null;
  measuringPoint: MeasuringPoint;

  constructor(measuringPoint: MeasuringPoint, installationPoint: EstateUnit | RealEstate | null) {
    this.measuringPoint = measuringPoint;
    if(installationPoint instanceof RealEstate) {
      this.realEstate = installationPoint;
    }
    if (installationPoint instanceof EstateUnit) {
      this.estateUnit = installationPoint;
      this.realEstate = installationPoint.realEstate;
    }
  }
}