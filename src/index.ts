import "reflect-metadata"

import EstateUnit from "./RealEstate/Models/EstateUnit";
import RealEstate from "./RealEstate/Models/RealEstate";
import Tenant from "./RealEstate/Models/Tenant";
import EstateUnitTenantsRepository from "./RealEstate/Repositories/EstateUnitTenantsRepository";
import EstateUnitRepository from "./RealEstate/Repositories/EstateUnitRepository";
import RealEstateSeeds from "./Seeds/RealEstateSeeds";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => { console.log("DB started") })
    .catch((error) => console.log(error))

const realEstateSeeds = new RealEstateSeeds();
const [re1, re2]: RealEstate[] = realEstateSeeds.seed();
const eu1: EstateUnit = new EstateUnit(1, "EU0001", "1", re1);
const eu2: EstateUnit = new EstateUnit(2, "EU0002", "2", re2);

const t1: Tenant = new Tenant(1, "Adam Krawiec", "akra@example.com", eu1, new Date(2022, 0, 1, 1), new Date(2022, 11, 31, 1))
const t2: Tenant = new Tenant(2, "Adam Krawiec", "akra@example.com", eu1, new Date(2023, 0, 1, 1), new Date(2023, 8, 31, 1))
const t3: Tenant = new Tenant(3, "Joe Doe", "jd@example.com", eu1, new Date(2024, 0, 1, 1), undefined);

const estateUnitRepository = new EstateUnitRepository();
const tenantRepository = new EstateUnitTenantsRepository(eu1);

estateUnitRepository.addBatch([eu1, eu2]);
tenantRepository.addBatch([t1, t2, t3]);

console.log(eu1.availableBetween(new Date(2023, 9, 1, 2), new Date(2023, 9, 10, 2)));
console.log(eu1.availableBetween(new Date(2023, 7, 1, 2), new Date(2023, 7, 10, 2)));
// console.log(eu1.findTenantByDate(new Date(2023, 2, 1, 2)));
// console.log(eu1.currentTenant())