import DB from "../../db"
import { User } from "../Models"
import UserRepository from "../Repositories/UserRepository"

export const FindUserBySessionId = (sessionId: string): User => {
  return new UserRepository().findBySessionId(sessionId);
}