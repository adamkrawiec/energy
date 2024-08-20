import { Session } from "../Models"
import BaseRepository from "./BaseRepository"

export default class SessionRepository extends BaseRepository<Session> {
  constructor() {
    super();
    this.collection = this.db.sessions;
  }

  public findBySessionId(sessionId: string): Session {
    return this.collection.find(session => session.sessionId === sessionId);
  }
}