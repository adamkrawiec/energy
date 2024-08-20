import EstateUnit from "./EstateUnit";

export class MonthlyEnergyConsumption {
  public category: string;
  public value: number;
  public unit: string;

  constructor(category: string, value: number, unit: string){
    this.category = category;
    this.value = value;
    this.unit = unit;
  }
}

export default class MonthlyConsumptionReport {
  public id: number;
  public estateUnit: EstateUnit;
  public date: Date;
  public consumptions: MonthlyEnergyConsumption[];

  constructor(estateUnit: EstateUnit, date: Date) {
    this.estateUnit = estateUnit;
    this.date = date;
  }

  public addConsumption(category, value, unit) {
    let consumption = new MonthlyEnergyConsumption(category, value, unit);
    this.consumptions.push(consumption);
  }
}