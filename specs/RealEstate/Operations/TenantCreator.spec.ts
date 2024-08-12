import EstateUnitFactory from "../factories/EstateUnitFactory";
import DB from "../../../src/db";
import TenantCreator from '../../../src/RealEstate/Operations/TenantCreator';
import { Tenant } from "../../../src/RealEstate/Models";

describe("Operations.TenantCreator", () => {
  let estateUnit = EstateUnitFactory.create();

  beforeAll(() => {
    DB.getInstance().estateUnits.push(estateUnit);
  });

  describe("create", () => {
    test("it creates a new tenant record associated to the estate unit", () => {
      const tc: TenantCreator = new TenantCreator(estateUnit);

      const tenant: Tenant | null = tc.create(1, "Joe Doe", "jd@example.com", new Date(2024,1,1), new Date(2024, 3, 1));

      expect(DB.getInstance().tenants).toContain(tenant);
    });

    test("it does not create a new tenant if there is other tenant overlapping", () => {
      // const t: Tenant = new Tenant(1, "Joe Brian")
    })
  })
});