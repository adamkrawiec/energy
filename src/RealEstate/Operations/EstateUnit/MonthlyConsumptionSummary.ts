import { EstateUnit, MeterInstallationCategory, measuringPointCategoryUnitMap } from "../../Models";
import EstateUnitBase from "./Base";
import EstateUnitConsumption from "./EstateUnitConsumption";

type ConsumptionSummary = {
  category: string,
  value: string,
  unit: string
}

type Summary = {
  month: string,
  conumptions: ConsumptionSummary[]
}

export default class MonthlyConsumptionSummary extends EstateUnitBase {
  public date: Date;

  constructor(estateUnit: EstateUnit, date: Date) {
    super(estateUnit);
    this.date = date;
  }

  public getSummary(): Summary[] {
    let summary = [];

    for(let category in MeterInstallationCategory) {
      summary.push({
        category,
        value: new EstateUnitConsumption(this.estateUnit, category).consumptionBetween(this.firstDayOfMonth, this.lastDayOfMonth),
        unit: measuringPointCategoryUnitMap[category]
      })
    };

    return summary
  }

  private get firstDayOfMonth(): Date {
    return new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  }

  private get lastDayOfMonth(): Date {
    return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
  }
}