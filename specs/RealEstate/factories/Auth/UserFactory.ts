import { User } from "../../../../src/RealEstate/Models/";

export default class UserFactory {
  public static create(id: number = 1, email: string = "user1@example.com"): User {
    return new User(id, email)
  }
}