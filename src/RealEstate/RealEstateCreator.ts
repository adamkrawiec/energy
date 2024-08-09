import RealEstate from "./Models/RealEstate.js";
import RealEstateRepository from "./Repositories/RealEstateRepository.js";

export default class RealEstateCreator {
  private repository: RealEstateRepository

  constructor() {
    this.repository = new RealEstateRepository();
  }

  create(id: number, name: string, city: string, street: string, number: string): RealEstate {
    const realEstate = new RealEstate(id, name, city, street, number);

    this.repository.addOne(realEstate);
    return realEstate
  }
}