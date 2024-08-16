import { Meter, Readout } from "../Models";
import BaseQuery from "./BaseQuery";
import IReadoutQuery from "./interfaces/IReadoutQuery";

export default class MeterReadoutQuery extends BaseQuery implements IReadoutQuery {
  private meter: Meter;
  private _meters: Meter[];

  constructor(meter: Meter) {
    super()
    this.meter = meter;
  }

  public allReadouts(): Readout[] {
    return this.db.readouts.filter(readout => this.meter === readout.meter)
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