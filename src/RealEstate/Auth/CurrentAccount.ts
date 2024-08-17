import Account from "../Models/Auth/Account";

export default class CurrentAccount {
  private static instance: CurrentAccount;
  private account: Account;
  
  private constructor(account) {
    this.account = account;
  }

  public static getInstance(account: Account | undefined = undefined) {
    if(!CurrentAccount.instance) {
      if(account) {
        CurrentAccount.instance = new CurrentAccount(account);
      }
    }

    return CurrentAccount.instance;
  }
}