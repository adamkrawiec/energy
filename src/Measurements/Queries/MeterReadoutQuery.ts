import { Meter, Readout } from "../Models";
import BaseQuery from "./BaseQuery";
import IReadoutQuery from "./interfaces/IReadoutQuery";
import { last } from 'lodash';

export default class MeterReadoutQuery extends BaseQuery implements IReadoutQuery {
  private meter: Meter;

  constructor(meter: Meter) {
    super()
    this.meter = meter;
  }

  public allReadouts(): Readout[] {
    return this.db.readouts.filter(readout => this.meter === readout.meter)
  }

  public todayReadout(): Readout {
    return this.readoutOnDate(new Date);
  }

  public lastReadout(): Readout {
    return last(this.allReadouts());
  }

  public readoutOnDate(date: Date): Readout | null {
    return this.allReadouts().find(readout => 
      readout.timestamp.getTime() == date.getTime()
    );
  }

  public readoutsInDateRange(dateFrom: Date, dateTo: Date): Readout[] {
    return this.allReadouts().filter(readout =>
      readout.timestamp.getTime() >= dateFrom.getTime() && 
        readout.timestamp.getTime() <= dateTo.getTime()
    );
  }
}