import MonthlyConsumptionReport from "../Models/ConsumptionReport";
import BaseRepository from "./BaseRepository"

export default class MonthlyConsumptionReportRepository extends BaseRepository<MonthlyConsumptionReport> {
  constructor() {
    super();
    this.collectionName = "monthlyConsumptionReports";
    this.collection = this.db.monthlyConsumptionReports;
  }
}