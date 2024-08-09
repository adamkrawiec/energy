import Tenant from "../Models/Tenant";
import EstateUnit from "../Models/EstateUnit";
import TenantRepository from "./TenantRepository";

export default class EstateUnitTenantsRepository extends TenantRepository {
  private _estateUnit: EstateUnit;

  constructor(estateUnit: EstateUnit) {
    super();
    this._estateUnit = estateUnit;
    this.collection = this.db.tenants;
  }

  public findAll(): Tenant[] {
    return this.collection.filter(tenant => tenant.estateUnit === this._estateUnit)
  };

  public findCurrentTenant(): Tenant {
    return this.findAll().find(tenant => !tenant.dateTo);
  }

  public findTenantsBetween(dateFrom: Date, dateTo: Date): Tenant[] {
    return this.findAll().filter(tenant => dateTo >= tenant.dateFrom && dateFrom <= tenant.dateTo);
  }

  public findTenantByDate(date: Date): Tenant | null {
    return this.findAll().find(tenant => date >= tenant.dateFrom && date <= tenant.dateTo );
  }
}