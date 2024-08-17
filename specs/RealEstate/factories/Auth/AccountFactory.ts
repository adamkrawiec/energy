import { Account } from "../../../../src/RealEstate/Models/";

export class AccountFactory {
  public static create(id: number = 1, name: string = "Account 1", subdomain: string = "acc1"): Account {
    return new Account(id, name, subdomain)
  }
}