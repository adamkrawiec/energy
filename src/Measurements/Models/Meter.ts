import MeasuringPointConsumption from "../Consumptions/MeasuringPointConsumption";
import { IConsumpable } from "./interfaces";

class MeasuringPoint implements IConsumpable {
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

class Meter {
  public id: number;
  public identifier: string;
  public installedAt: Date | null;
  public measuringPoint: MeasuringPoint;
  public createdAt: Date;

  constructor(id: number, identifier: string, measuringPoint: MeasuringPoint, installedAt: Date | null, createdAt: Date | null) {
    this.id = id;
    this.identifier = identifier;
    this.measuringPoint = measuringPoint;
    this.installedAt = installedAt;
    this.createdAt = createdAt;
  }
}

class Readout {
  public id: number;
  public value: number;
  public timestamp: Date;
  public meter: Meter; 

  constructor(id, value, timestamp, meter) {
    this.id = id;
    this.value = value;
    this.timestamp = timestamp;
    this.meter = meter;
  }
}

export {
  MeasuringPoint,
  Meter,
  Readout
}