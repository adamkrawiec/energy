import MeasuringPointConsumption from "../Consumptions/MeasuringPointConsumption";
import { IConsumpable } from "./interfaces";

export default class MeasuringPoint implements IConsumpable {
  public id: number;
  public identifier: string;
  public createdAt: Date;

  constructor(id: number, identifier: string, createdAt: Date) {
    this.id = id;
    this.identifier = identifier;
    this.createdAt = createdAt;
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
}