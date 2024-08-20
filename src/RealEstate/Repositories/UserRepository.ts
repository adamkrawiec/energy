import { User } from "../Models";
import BaseRepository from "./BaseRepository";
import SessionRepository from "./SessionRepository";

export default class UserRepository extends BaseRepository<User> {
  constructor() {
    super();
    this.collection = this.db.users;
    this.collectionName = "users";
  }

  public findByEmail(email: string): User {
    return this.collection.find(user => user.email === email);
  }

  public findBySessionId(sessionId: string): User {
    const sessionRepository = new SessionRepository();
    const session = sessionRepository.findBySessionId(sessionId);
    return session ? session.user : undefined
  }
}