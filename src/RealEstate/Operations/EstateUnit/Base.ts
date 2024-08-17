import { EstateUnit } from "../../Models";

export default class EstateUnitBase {
  protected estateUnit: EstateUnit;

  constructor(estateUnit: EstateUnit) {
    this.estateUnit = estateUnit;
  }
}