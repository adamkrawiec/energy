import MeterReadoutQuery from "../Queries/MeterReadoutQuery";
import MeasuringPoint from "./MeasuringPoint";
import Readout from "./Readout";

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

  public get online(): boolean {
    return !!this.installedAt && !this.dismantledAt
  }

  public get installationRequired(): boolean {
    return !this.installedAt
  }

  public get lastReadout(): Readout {
    return new MeterReadoutQuery(this).lastReadout();
  }

  public get status(): string {
    if(this.lastReadout.error) {
      return "readout_error"
    }
    if(this.online) {
      return "online"
    }

    if(this.installationRequired) {
      return "installation_required"
    }

    if(this.dismantledAt) {
      return "dismantled"
    }

    return "out_of_service"
  }
}
