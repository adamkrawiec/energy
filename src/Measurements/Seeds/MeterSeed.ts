import DB from "../../db";
import { MeasuringPoint, Meter, Readout } from "../Models/Meter";

export default class MeterSeed {
  private db: DB;

  constructor() {
    this.db = DB.getInstance();
  }

  public seedMeasuringPoints() {
    const mp1 = new MeasuringPoint(1, "MP0001", new Date(2020, 1, 1));
    const mp2 = new MeasuringPoint(2, "MP0002", new Date(2020, 1, 1));
    const mp3 = new MeasuringPoint(3, "MP0003", new Date(2020, 1, 1));
    const mp4 = new MeasuringPoint(4, "MP0004", new Date(2020, 1, 1));
    const m1 = new Meter(1, "MTR00001", mp1, new Date(2020, 1, 1));
    const m2 = new Meter(2, "MTR00002", mp2, new Date(2020, 1, 4));
    const m3 = new Meter(3, "MTR00003", mp3, new Date(2020, 6, 10));
    const m4 = new Meter(4, "MTR00004", mp4, new Date(2022, 6, 10));
    this.db.measuringPoints.push(mp1);
    this.db.measuringPoints.push(mp2);
    this.db.measuringPoints.push(mp1);
    this.db.measuringPoints.push(mp4);
    this.db.meters.push(m1);
    this.db.meters.push(m2);
    this.db.meters.push(m3);
    this.db.meters.push(m4);

    [{ value: 10.543, date: new Date(2020, 1, 1) },
     { value: 14.549, date: new Date(2020, 1, 2) },
     { value: 16.349, date: new Date(2020, 1, 3) }, 
     { value: 16.831, date: new Date(2020, 1, 4) },
     { value: 20.441, date: new Date(2020, 1, 5) }].forEach((value, i) => {
      let readout = new Readout(i, value.value, value.date, m1);
      this.db.readouts.push(readout);
    });

    [{ value: 8.674, date: new Date(2020, 1, 4) },
      { value: 11.593, date: new Date(2020, 1, 5) },
      { value: 14.683, date: new Date(2020, 1, 6) }, 
      { value: 15.991, date: new Date(2020, 1, 7) },
      { value: 17.932, date: new Date(2020, 1, 8) }].forEach((value, i) => {
       let readout = new Readout(i, value.value, value.date, m2);
       this.db.readouts.push(readout);
     })
  }
}