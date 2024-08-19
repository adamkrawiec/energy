import Meter from "./Meter";

export default class Readout {
  public id: number;
  public value: number;
  public timestamp: Date;
  public meter: Meter;
  public error: string | undefined;

  constructor(id, value, timestamp, meter) {
    this.id = id;
    this.value = value;
    this.timestamp = timestamp;
    this.meter = meter;
  }
}