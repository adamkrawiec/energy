import { EstateUnit, MeterInstallation, MeterInstallationCategory } from "../Models";
import BaseRepository from "./BaseRepository";

export default class MeterInstallationRepository extends BaseRepository<MeterInstallation> {
   constructor() {
      super();
      this.collectionName = "meterInstallations";
      this.collection = this.db.meterInstallations;
    }

   public findAllForEstateUnit(estateUnit: EstateUnit) {
     return this.findAll().filter(meterInstallation => meterInstallation.estateUnit === estateUnit);
   }

   public findAllForCategory(category: MeterInstallationCategory) {
      return this.findAll().filter(meterInstallation => meterInstallation.category === category);
   }

   public findAllForEstateUnitAndCategory(estateUnit: EstateUnit, category: string) {
      return this.findAll().
                  filter(meterInstallation => meterInstallation.estateUnit === estateUnit).
                  filter(meterInstallation => meterInstallation.category === category);
   }
}