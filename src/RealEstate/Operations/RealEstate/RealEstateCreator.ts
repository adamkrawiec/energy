import RealEstate from "../../Models/RealEstate.js";
import { Account } from "../../Models/index.js";
import RealEstateRepository from "../../Repositories/RealEstateRepository.js";

export default class RealEstateCreator {
  private repository: RealEstateRepository

  constructor() {
    this.repository = new RealEstateRepository();
  }

  create(id: number, name: string, city: string, street: string, number: string, account: Account): RealEstate {
    const realEstate = new RealEstate(id, name, city, street, number, account, new Date());

    this.repository.addOne(realEstate);
    return realEstate
  }
}