interface IConsumpable {
  consumption(): number
  consumptionOnDate(date: Date): number | undefined
  consumptionBetweenDates(dateFrom: Date, dateTo: Date): number | undefined
}

export {
  IConsumpable
}