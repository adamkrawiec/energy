import { Meter } from ".";

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
}