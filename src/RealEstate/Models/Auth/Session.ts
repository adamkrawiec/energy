import BaseModel from "../BaseModel";
import User from "./User";

export default class Session extends BaseModel {
  public sessionId: string;
  public user: User;
  public createdAt: Date;

  constructor(id, sessionId, user, createdAt = new Date()) {
    super(id)
    this.sessionId = sessionId;
    this.user = user;
    this.createdAt = createdAt
  }
}