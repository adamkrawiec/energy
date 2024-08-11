import BaseRepository from "./BaseRepository";
import EstateUnit from "../Models/EstateUnit";
import RealEstate from "../Models/RealEstate";

export default class EstateUnitRepository extends BaseRepository<EstateUnit> {
  constructor() {
    super();
    this.collectionName = "estateUnits";
    this.collection = this.db.estateUnits;
  }

  public findAllForRealEstate(realEstate: RealEstate): EstateUnit[] {
    return this.collection.filter(estateUnit => estateUnit.realEstate === realEstate);
  }
}