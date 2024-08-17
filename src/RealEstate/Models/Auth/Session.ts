import User from "./User";

export default class Session {
  public sessionId: string;
  public user: User;
  public createdAt: Date;

  constructor(sessionId, user, createdAt = new Date()) {
    this.sessionId = sessionId;
    this.user = user;
    this.createdAt = createdAt
  }
}