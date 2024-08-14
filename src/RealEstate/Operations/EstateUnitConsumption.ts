import DB from "../../db";
import { EstateUnit } from "../Models";
import { sum } from 'lodash';

export default class EstateUnitConsumption {
  private estateUnit: EstateUnit;
  private db: DB;

  constructor(estateUnit: EstateUnit) {
    this.estateUnit = estateUnit;
    this.db = DB.getInstance();
  }

  public consumption(): number {
    return sum(this.measuringPointConsumptions());
  }

  public consumptionOnDate(date: Date): number {
    return sum(this.measuringPointConsumptionsOnDate(date));
  }

  public consumptionBetween(dateFrom: Date, dateTo: Date): number {
    return sum(this.measuringPointConsumptionsBetweenDates(dateFrom, dateTo));
  }

  private measuringPointConsumptions(): number[] {
    return this.db.meterInstallationsForEstateUnit(this.estateUnit).
      map(meterInstallation => meterInstallation.measuringPoint.consumption())
  }

  private measuringPointConsumptionsOnDate(date: Date): number[] {
    return this.db.meterInstallationsForEstateUnit(this.estateUnit).
      map(meterInstallation => meterInstallation.measuringPoint.consumptionOnDate(date));
  }

  private measuringPointConsumptionsBetweenDates(dateFrom: Date, dateTo: Date): number[] {
    return this.db.meterInstallationsForEstateUnit(this.estateUnit).
      map(meterInstallation => meterInstallation.measuringPoint.consumptionBetweenDates(dateFrom, dateTo));
  }
}