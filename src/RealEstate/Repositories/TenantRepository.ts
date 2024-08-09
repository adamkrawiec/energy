import BaseRepository from "./BaseRepository";
import Tenant from "../Models/Tenant";

export default class TenantRepository extends BaseRepository<Tenant> {
  constructor() {
    super();
    this.collectionName = "tenants";
    this.collection = this.db.tenants;
  }

  public findTenantsBetween(dateFrom: Date, dateTo: Date): Tenant[] {
    return this.findAll().filter(tenant => dateTo >= tenant.dateFrom && dateFrom <= tenant.dateTo);
  }

  public findTenantByDate(date: Date): Tenant | null {
    return this.findAll().find(tenant => date >= tenant.dateFrom && date <= tenant.dateTo );
  }
}