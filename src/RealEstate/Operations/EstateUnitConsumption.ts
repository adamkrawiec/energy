import DB from "../../db";
import { EstateUnit, MeterInstallation, MeterInstallationCategory } from "../Models";
import { sum } from 'lodash';

export default class EstateUnitConsumption {
  private estateUnit: EstateUnit;
  private category: MeterInstallationCategory;
  private db: DB;

  constructor(estateUnit: EstateUnit, category: MeterInstallationCategory = MeterInstallationCategory.ELECTRICITY) {
    this.estateUnit = estateUnit;
    this.category = category;
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

  private meterInstallations(): MeterInstallation[] {
    return this.db.meterInstallationsForEstateUnit(this.estateUnit).filter(meterInstallation => meterInstallation.category === this.category);
  }

  private measuringPointConsumptions(): number[] {
    return this.meterInstallations().
      map(meterInstallation => meterInstallation.consumption())
  }

  private measuringPointConsumptionsOnDate(date: Date): number[] {
    return this.meterInstallations().map(meterInstallation => meterInstallation.consumptionOnDate(date));
  }

  private measuringPointConsumptionsBetweenDates(dateFrom: Date, dateTo: Date): number[] {
    return this.meterInstallations().
      map(meterInstallation => meterInstallation.measuringPoint.consumptionBetweenDates(dateFrom, dateTo));
  }
}