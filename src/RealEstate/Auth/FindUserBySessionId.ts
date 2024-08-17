import DB from "../../db"
import { User } from "../Models"

export const FindUserBySessionId = (sessionId: string): User | undefined => {
  const session =  DB.getInstance().sessions.find(session => session.sessionId === sessionId)
  
  return session ? session.user : undefined;
}