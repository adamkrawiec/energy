import MeasuringPointConsumption from "../Consumptions/MeasuringPointConsumption";
import MeasuringPointMeters from "../Queries/Meters/MeasuringPointMeters";
import Meter from "./Meter";
import { IConsumpable } from "./interfaces";

export enum MeasuringPointCategory {
  ELECTRICITY,
  COLD_WATER,
  WARM_WATER,
  GAS,
  HEAT
}

export default class MeasuringPoint implements IConsumpable {
  public id: number;
  public identifier: string;
  public category: MeasuringPointCategory;
  public createdAt: Date;

  constructor(id: number, identifier: string, category: MeasuringPointCategory, createdAt: Date) {
    this.id = id;
    this.identifier = identifier;
    this.category = category;
    this.createdAt = createdAt;
  }

  public get meters(): Meter[] {
    return new MeasuringPointMeters(this).meters();
  }

  public get currentMeter(): Meter {
    return new MeasuringPointMeters(this).currentMeter();
  }

  public consumption(): number {
    return new MeasuringPointConsumption(this).consumption();
  }

  public consumptionOnDate(date: Date): number | undefined {
    return new MeasuringPointConsumption(this).consumptionOnDate(date);
  }

  public consumptionBetweenDates(dateFrom: Date, dateTo: Date): number | undefined {
    return new MeasuringPointConsumption(this).consumptionBetweenDates(dateFrom, dateTo);
  }

  public currentMeterStatus() {
    return this.currentMeter.status;
  }
}