import { EstateUnit, Tenant } from "../Models";
import EstateUnitTenantsRepository from "../Repositories/EstateUnitTenantsRepository";

export default class TenantCreator {
  private _estateUnit: EstateUnit
  private _repository: EstateUnitTenantsRepository

  constructor(estateUnit: EstateUnit) {
    this._estateUnit = estateUnit;
    this._repository = new EstateUnitTenantsRepository(estateUnit);
  }

  create(id: number, name: string, email: string, dateFrom: Date, dateTo: Date): Tenant | null {
    const tenant = new Tenant(id, name, email, this._estateUnit, dateFrom, dateTo);

    if(this._repository.findTenantsBetween(dateFrom, dateTo).length > 0) {
      return null; // replace with error object
    }
    this._repository.addOne(tenant);
    return tenant;
  }
}