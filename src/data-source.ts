import { DataSource } from "typeorm";
import { EstateUnit, RealEstate, Tenant } from "./RealEstate/Models";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "restate_admin",
  password: "admin",
  database: "learning_dev",
  synchronize: true,
  logging: true,
  entities: [RealEstate, EstateUnit, Tenant],
  subscribers: [],
  migrations: [],
});