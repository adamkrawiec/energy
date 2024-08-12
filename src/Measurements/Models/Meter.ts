class MeasuringPoint {
  public id: number;
  public identifier: string;
  public createdAt: Date;

  constructor(id: number, identifier: string, createdAt: Date) {
    this.id = id;
    this.identifier = identifier;
    this.createdAt = createdAt;
  }
}

class Meter {
  public id: number;
  public identifier: string;
  public installedAt: Date | null;
  public measuringPoint: MeasuringPoint;
  public createdAt: Date;

  constructor(id: number, identifier: string, measuringPint: MeasuringPoint, createdAt: Date) {
    this.id = id;
    this.identifier = identifier;
    this.measuringPoint = measuringPint;
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