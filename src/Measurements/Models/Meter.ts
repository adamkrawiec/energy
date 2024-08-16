import MeasuringPoint from "./MeasuringPoint";

export default class Meter {
  public id: number;
  public identifier: string;
  public installedAt: Date | null;
  public dismantledAt: Date | null;
  public measuringPoint: MeasuringPoint;
  public createdAt: Date;

  constructor(id: number, identifier: string, measuringPoint: MeasuringPoint, installedAt: Date | null, dismantledAt: Date | null, createdAt: Date | null) {
    this.id = id;
    this.identifier = identifier;
    this.measuringPoint = measuringPoint;
    this.installedAt = installedAt;
    this.dismantledAt = dismantledAt;
    this.createdAt = createdAt;
  }

  public online(): boolean {
    return !!this.installedAt && !this.dismantledAt
  }
}
