import { EstateUnit, MonthlyConsumptionReport } from "../../../Models";
import MonthlyConsumptionReportRepository from "../../../Repositories/MonthlyConsumptionReportRepository";
import MonthlyConsumptionSummary from "../MonthlyConsumptionSummary";

export default class CreateReport {
  private estateUnit: EstateUnit;
  private date: Date;
  private reportRepository: MonthlyConsumptionReportRepository;
  
  constructor(estateUnit: EstateUnit, date: Date) {
    this.estateUnit = estateUnit;
    this.date = date;
    this.reportRepository = new MonthlyConsumptionReportRepository();
  
  }

  public saveReport() {
    const report = this.buildReport()
    this.reportRepository.addOne(report);
  }


  private buildReport(): MonthlyConsumptionReport {
    let report = new MonthlyConsumptionReport(this.estateUnit, this.date);
    this.monthlyConsumptions().map(monthlyConsumption => {
      report.addConsumption(monthlyConsumption.category, monthlyConsumption.value, monthlyConsumption.unit);
    })
    return report;
  }

  private monthlyConsumptions() {
    return new MonthlyConsumptionSummary(this.estateUnit, this.date).getSummary();
  }
}