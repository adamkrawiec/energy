import BaseRepository from "./BaseRepository.js";
import RealEstate from "../Models/RealEstate.js";

export default class RealEstateRepository extends BaseRepository<RealEstate> {
  constructor() {
    super();
    this.collectionName = "realEstates";
    this.collection = this.db.realEstates;
  }
}