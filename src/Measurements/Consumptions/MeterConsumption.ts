import { Meter, Readout } from "../Models";
import MeterReadoutQuery from "../Queries/MeterReadoutQuery";
import { sumBy } from 'lodash';

export default class MeterConsumption {
  private meter: Meter;
  private meterReadoutQuery: MeterReadoutQuery;

  constructor(meter: Meter) {
    this.meter = meter;
    this.meterReadoutQuery = new MeterReadoutQuery(meter);
  }
  
  public consumption(): number {
    return sumBy(this.readouts, 'value');
  }

  private get readouts(): Readout[] {
    return this.meterReadoutQuery.allReadouts();
  }
}