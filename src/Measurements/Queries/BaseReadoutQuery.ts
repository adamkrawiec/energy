// import { Readout } from "../Models";
// import BaseQuery from "./BaseQuery";

// export default class BaseReadoutQuery extends BaseQuery {
//   public allReadouts() {
//     return [];
//   }

//   public readoutOnDate(date: Date): Readout | null {
//     return this.allReadouts().find(readout => 
//       readout.timestamp.getTime() == date.getTime()
//     );
//   }

//   public readoutsInDateRange(dateFrom: Date, dateTo: Date): Readout[] {
//     return this.allReadouts().filter(readout =>
//       readout.timestamp.getTime() >= dateFrom.getTime() && 
//         readout.timestamp.getTime() <= dateTo.getTime()
//     );
//   }

// }