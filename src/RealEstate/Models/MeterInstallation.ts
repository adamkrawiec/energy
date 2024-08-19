import { MeasuringPoint, MeasuringPointCategory } from "../../Measurements/Models";
import BaseModel from "./BaseModel";
import EstateUnit from "./EstateUnit";
import RealEstate from "./RealEstate";

export enum MeterInstallationCategory {
  ELECTRICITY = "ELECTRICITY",
  COLD_WATER = "COLD_WATER",
  WARM_WATER = "WARM_WATER",
  GAS = "GAS",
  HEAT = "HEAT"
}

export const measuringPointCategoryUnitMap = {
  [MeterInstallationCategory.ELECTRICITY]: 'Wh',
  [MeterInstallationCategory.COLD_WATER]: 'm3',
  [MeterInstallationCategory.WARM_WATER]: 'm3',
  [MeterInstallationCategory.GAS]: 'm3',
  [MeterInstallationCategory.HEAT]: ''
};

const CategoryMap = {
  [MeasuringPointCategory.ELECTRICITY]: MeterInstallationCategory.ELECTRICITY,
  [MeasuringPointCategory.COLD_WATER]: MeterInstallationCategory.COLD_WATER,
  [MeasuringPointCategory.GAS]: MeterInstallationCategory.GAS,
  [MeasuringPointCategory.HEAT]: MeterInstallationCategory.HEAT,
  [MeasuringPointCategory.WARM_WATER]: MeterInstallationCategory.WARM_WATER,
}

// this is the only class to be expected a connection between RealEstate and Measurments modules
export default class MeterInstallation extends BaseModel {
  estateUnit: EstateUnit | null;
  realEstate: RealEstate | EstateUnit | null;
  measuringPoint: MeasuringPoint;
  category: MeterInstallationCategory;

  constructor(id: number, measuringPoint: MeasuringPoint, installationPoint: EstateUnit | RealEstate | null) {
    super(id);
    this.measuringPoint = measuringPoint;
    this.category = CategoryMap[measuringPoint.category];

    if(installationPoint instanceof RealEstate) {
      this.realEstate = installationPoint;
    }
    if (installationPoint instanceof EstateUnit) {
      this.estateUnit = installationPoint;
      this.realEstate = installationPoint.realEstate;
    }
  }

  public get identifier(): string {
    return this.measuringPoint.identifier;
  }

  public consumption(): number {
    return this.measuringPoint.consumption()
  }

  public consumptionOnDate(date: Date): number {
    return this.measuringPoint.consumptionOnDate(date);
  }

  public consumptionBetweenDates(dateFrom: Date, dateTo: Date): number {
    return this.measuringPoint.consumptionBetweenDates(dateFrom, dateTo);
  }

  public meterStatus(): string {
    return this.measuringPoint.currentMeterStatus();
  }
}