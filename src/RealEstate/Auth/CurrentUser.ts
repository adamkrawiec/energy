import User from "../Models/Auth/User";

export default class CurrentUser {
  private static instance: CurrentUser;
  private _user: User;
  
  private constructor(user: User) {
    this._user = user;
  }

  // there should maybe be some error if tried to change stored user
  public static getInstance(user: User | undefined = undefined) {
    if(!CurrentUser.instance) {
      if(user) {
        CurrentUser.instance = new CurrentUser(user);
      }
    }

    return CurrentUser.instance;
  }

  public get user(): User { return this._user }
}