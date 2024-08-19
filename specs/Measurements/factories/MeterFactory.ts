import { Meter, MeasuringPoint, Readout, MeasuringPointCategory } from '../../../src/Measurements/Models'
import DB from '../../../src/db';

class MeasuringPointFactory {
  public static create(id: number = 1, identifier: string = "MP00001", category = MeasuringPointCategory.ELECTRICITY, createdAt: Date = new Date()): MeasuringPoint {
    const mp =  new MeasuringPoint(id, identifier, category, createdAt);
    DB.getInstance().measuringPoints.push(mp);
    return mp
  }

  public static createWithReadouts(id: number = 1, identifier: string = "MP00001", category = MeasuringPointCategory.ELECTRICITY, createdAt: Date = new Date()): MeasuringPoint {
    const mp =  new MeasuringPoint(id, identifier, category, createdAt);
    DB.getInstance().measuringPoints.push(mp);
    MeterFactory.createWithReadouts(1, "MTR0001", mp, new Date());
    return mp
  }
}

class MeterFactory {
  public static create(id: number = 1,
                       identifier: string = "METER001",
                       measuringPoint: MeasuringPoint = MeasuringPointFactory.create(),
                       installedAt: Date | null = null,
                       dismantledAt: Date | null = null,
                       createdAt: Date = new Date()
                      ): Meter {
    const meter = new Meter(id, identifier, measuringPoint, installedAt, dismantledAt, createdAt)
    DB.getInstance().meters.push(meter);
    return meter;
  }

  public static createWithReadouts(id: number = 1,
                                   identifier: string = "METER001",
                                   measuringPoint: MeasuringPoint = MeasuringPointFactory.create(),
                                   installedAt: Date | null = null,
                                   dismantledAt: Date | null = null,
                                   createdAt: Date = new Date()
                                ): Meter {
    let meter = MeterFactory.create(id, identifier, measuringPoint, installedAt, dismantledAt, createdAt);
    ReadoutFactory.createList(meter);
    return meter
  }
}

class ReadoutFactory {
  public static create(id: number = 1, value: number = 10, timestamp: Date = new Date(), meter: Meter) {
    const readout = new Readout(id, value, timestamp, meter);
    DB.getInstance().readouts.push(readout);

    return readout
  }

  public static createList(meter: Meter) {
    return [
      { id: 1, value: 10, date: new Date(2020, 0, 1) },
      { id: 2, value: 20, date: new Date(2020, 0, 2) },
      { id: 3, value: 30, date: new Date(2020, 0, 3) },
      { id: 4, value: 40, date: new Date(2020, 0, 4) },
      { id: 5, value: 50, date: new Date(2020, 0, 5) },
      { id: 6, value: 60, date: new Date(2020, 0, 6) },
      { id: 7, value: 70, date: new Date(2020, 0, 7) },
      { id: 8, value: 80, date: new Date(2020, 0, 8) },
      { id: 9, value: 90, date: new Date(2020, 0, 9) },
      { id: 10, value: 100, date: new Date(2020, 0, 10) },
    ].map(readout => ReadoutFactory.create(
      readout.id,
      readout.value,
      readout.date,
      meter)
    )
  }
}

export {
  MeasuringPointFactory,
  MeterFactory,
  ReadoutFactory
}