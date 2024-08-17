import DB from "../../db";
import { Session, User } from "../Models"
import { randomUUID } from "crypto";

export default class SessionCreator {
  private user: User;
  private db: DB;

  constructor(user: User) {
    this.user = user;
    this.db = DB.getInstance();
  }

  public create(): Session {
    const session = new Session(randomUUID(), this.user)
    this.db.sessions.push(session);
    return session;
  }
}