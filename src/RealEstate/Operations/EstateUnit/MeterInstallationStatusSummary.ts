import { EstateUnit, MeterInstallation } from "../../Models";
import MeterInstallationRepository from "../../Repositories/MeterInstallationRepository";

export default class MeterInstallationStatusSummary {
  private estateUnit: EstateUnit;

  constructor(estateUnit: EstateUnit) {
    this.estateUnit = estateUnit;
  }

  public getSummary() {
    return this.meterInstallations.map(meterInstallation => {
      return {
        meter: meterInstallation.identifier,
        status: meterInstallation.meterStatus()
      }
    });
  }

  private get meterInstallations(): MeterInstallation[] {
    return new MeterInstallationRepository().findAllForEstateUnit(this.estateUnit);
  }
}