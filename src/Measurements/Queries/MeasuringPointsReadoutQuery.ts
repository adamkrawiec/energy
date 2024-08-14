import { MeasuringPoint, Readout, Meter } from "../Models"
import BaseQuery from "./BaseQuery";
import IReadoutQuery from "./interfaces/IReadoutQuery";

export default class MeasuringPointsReadoutQuery extends BaseQuery implements IReadoutQuery {
  private measuringPoints: MeasuringPoint[];

  constructor(measuringPoints: MeasuringPoint[] ) {
    super();
    this.measuringPoints = measuringPoints;
  }

  public allReadouts(): Readout[] {
    return this.db.readouts.filter(readout => this.getMeters().includes(readout.meter));
  }

  public getMeters(): Meter[] {
    return this.db.meters.filter(meter => this.measuringPoints.includes(meter.measuringPoint));
  }
}