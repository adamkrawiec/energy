import { MeasuringPoint, Readout } from "../Models";
import MeasuringPointReadoutQuery from "../Queries/MeasuringPointReadoutQuery";
import { sumBy } from 'lodash';

export default class MeasuringPointConsumption {
  private measuringPointReadoutQuery: MeasuringPointReadoutQuery;

  constructor(measuringPoint: MeasuringPoint) {
    this.measuringPointReadoutQuery = new MeasuringPointReadoutQuery(measuringPoint);
  }

  public consumption(): number {
    return sumBy(this.measuringPointReadoutQuery.allReadouts(), 'value');
  }

  public consumptionOnDate(date: Date): number | undefined {
    let readout: Readout | undefined = this.measuringPointReadoutQuery.readoutOnDate(date);

    return readout ? readout.value : undefined;
  }

  public consumptionBetweenDates(dateFrom: Date, dateTo: Date): number | undefined {
    let readouts: Readout[] = this.measuringPointReadoutQuery.readoutsBetweenDates(dateFrom, dateTo);

    return sumBy(readouts, 'value');
  }
}