import Tenant from "../../../src/RealEstate/Models/Tenant";
import EstateUnitTenantsRepository from "../../../src/RealEstate/Repositories/EstateUnitTenantsRepository";
import DB from "../../../src/db";
import EstateUnitFactory from "../factories/EstateUnitFactory";

describe("Repositories.EstateUnitTenantsRepository", () => {
  let estate = EstateUnitFactory.create();
  let tenant = new Tenant(1, "Tenant One", "te@example.com", estate, new Date(2022, 0, 1), new Date(2022, 10, 30));
  let tenant2 = new Tenant(2, "Tenant One", "te@example.com", estate, new Date(2024, 0, 1), undefined);
  let repository = new EstateUnitTenantsRepository(estate);
  
  beforeAll(() => {
    DB.getInstance().tenants.push(tenant);
    DB.getInstance().tenants.push(tenant2);
  });

  describe("findAll", () => {
    test("it returns a list of all tenants assigned to Estate Unit", () => {
      expect(repository.findAll()).toEqual(expect.arrayContaining([tenant, tenant2]));
    })
  });

  describe("findCurrentTenant", () => {
    test("it returns tenant who currently rents estate unit", () => {
      expect(repository.findCurrentTenant()).toEqual(tenant2);
    })

    test("it returns null if there is no current tenant", () => {
      DB.getInstance().tenants.pop();
      DB.getInstance().tenants.push(new Tenant(2, "Tenant One", "te@example.com", estate, new Date(2024, 0, 1), new Date(2024, 1, 1)));

      expect(repository.findCurrentTenant()).toBeUndefined();
    })
  });

  describe("findTenantByDate", () => {
    test("it returns a tenant on date", () => {
      expect(repository.findTenantByDate(new Date(2022, 2, 2))).toEqual(tenant);
    });

    test("it returns a tenant on date", () => {
      expect(repository.findTenantByDate(new Date(2010, 2, 2))).toBeUndefined();
    });
  });
});
