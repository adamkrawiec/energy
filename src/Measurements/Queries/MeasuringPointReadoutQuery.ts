import { MeasuringPoint, Meter, Readout } from "../Models"
import BaseQuery from "./BaseQuery";
import IReadoutQuery from "./interfaces/IReadoutQuery";
import { last } from 'lodash';

export default class MeasuringPointReadoutQuery extends BaseQuery implements IReadoutQuery {
  private measuringPoint: MeasuringPoint;

  constructor(measuringPoint: MeasuringPoint) {
    super()
    this.measuringPoint = measuringPoint;
  }

  public firstReadout(): Readout {
    return this.allReadouts()[0];
  }

  public lastReadout(): Readout {
    return last(this.allReadouts());
  }

  // maybe some memoization
  public allReadouts(): Readout[] {
    return this.db.readouts.filter(readout => this.meters.includes(readout.meter));
  }

  public readoutOnDate(date: Date): Readout | undefined {
    return this.allReadouts().find(readout => readout.timestamp.getTime() === date.getTime());
  }

  public readoutsBetweenDates(dateFrom: Date, dateTo: Date): Readout[] {
    return this.allReadouts().filter(readout =>
      readout.timestamp.getTime() >= dateFrom.getTime() && 
        readout.timestamp.getTime() <= dateTo.getTime()
    );
  }

  private get meters(): Meter[] {
    return this.db.meters.filter(meter => meter.measuringPoint === this.measuringPoint)
  }
}