import MeterInstallation from "../RealEstate/Models/MeterInstallation";
import DB from "../db";

export default class MeterInstallationSeeds {
  private db: DB;

  constructor() {
    this.db = DB.getInstance();
  }

  public seed() {
    var estateUnit = this.db.estateUnits[0];
    var measuringPoint = this.db.measuringPoints[0];

    var mp = new MeterInstallation(1, measuringPoint, estateUnit);
    this.db.meterInstallations.push(mp);
  }
}