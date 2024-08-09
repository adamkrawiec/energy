import BaseRepository from "./BaseRepository";
import EstateUnit from "../Models/EstateUnit";

export default class EstateUnitRepository extends BaseRepository<EstateUnit> {
  constructor() {
    super();
    this.collectionName = "estateUnits";
    this.collection = this.db.estateUnits;
  }
}