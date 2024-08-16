import { MeasuringPoint, Meter } from "../../Models";
import BaseQuery from "../BaseQuery";

export default class MeasuringPointMeters extends BaseQuery{
  private measuringPoint: MeasuringPoint;

  constructor(measuringPoint: MeasuringPoint) {
    super();
    this.measuringPoint = measuringPoint;
  }

  public meters(): Meter[] {
    return this.db.meters.filter(meter => meter.measuringPoint === this.measuringPoint);
  }

  public currentMeter(): Meter | undefined {
    return this.meters().find(meter => meter.online);
  }
}