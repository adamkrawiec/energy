import { MeasuringPoint } from "../../Measurements/Models/Meter";
import EstateUnit from "./EstateUnit";
import RealEstate from "./RealEstate";

// this is the only class to be expected a connection between RealEstate and Measurments modules
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