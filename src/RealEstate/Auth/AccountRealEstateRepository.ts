import DB from "../../db";
import Account from "../Models/Auth/Account";

export default class AccountRealEstateRepository {
  private account: Account;
  private db: DB;

  constructor(account: Account) {
    this.account = account;
    this.db = DB.getInstance();
  }

  public getRealEstates() {
    return this.db.realEstates.filter(realEstate => realEstate.account === this.account);
  }
}