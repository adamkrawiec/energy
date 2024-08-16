import Meter from "./Meter";
import { MeasuringPointCategory } from "./MeasuringPoint";

const measuringPointCategoryUnitMap  = {
    [MeasuringPointCategory.ELECTRICITY]: 'Wh',
    [MeasuringPointCategory.COLD_WATER]: 'm3',
    [MeasuringPointCategory.GAS]: 'm3',
    [MeasuringPointCategory.HEAT]: ''
};

export default class Readout {
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

  public get unit(): string {
    return measuringPointCategoryUnitMap[this.meter.measuringPoint.category];
  }
}