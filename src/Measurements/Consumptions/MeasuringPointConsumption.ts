import { MeasuringPoint, Readout } from "../Models";
import MeasuringPointReadoutQuery from "../Queries/MeasuringPointReadoutQuery";
import { last } from "lodash";

export default class MeasuringPointConsumption {
  private measuringPointReadoutQuery: MeasuringPointReadoutQuery;

  constructor(measuringPoint: MeasuringPoint) {
    this.measuringPointReadoutQuery = new MeasuringPointReadoutQuery(measuringPoint);
  }

  public consumption(): number {
    return (this.measuringPointReadoutQuery.lastReadout().value) - 
           (this.measuringPointReadoutQuery.firstReadout().value);
  }

  public consumptionOnDate(date: Date): number | undefined {
    let readout: Readout | undefined = this.measuringPointReadoutQuery.readoutOnDate(date);

    return readout ? readout.value : undefined;
  }

  public consumptionBetweenDates(dateFrom: Date, dateTo: Date): number | undefined {
    let readouts = this.measuringPointReadoutQuery.readoutsBetweenDates(dateFrom, dateTo);

    return this.valueOnPeriodEnd(readouts) - (this.valueOnPeriodBegin(readouts))
  }

  private valueOnPeriodBegin(readouts: Readout[]): number {
    let readoutOnPeriodBegin = readouts[0];
    if(!readoutOnPeriodBegin) {
      readoutOnPeriodBegin = readouts.find(readout => readout.value);
    }
    return readoutOnPeriodBegin ? readoutOnPeriodBegin.value : 0;
  }

  private valueOnPeriodEnd(readouts: Readout[]): number {
    let readoutOnPeriodEnd = last(readouts);
    return readoutOnPeriodEnd ? readoutOnPeriodEnd.value : 0;
  }
}