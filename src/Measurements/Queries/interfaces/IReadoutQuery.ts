import { Readout } from "../../Models";

export default interface IReadoutQuery {
  allReadouts(): Readout[]
}