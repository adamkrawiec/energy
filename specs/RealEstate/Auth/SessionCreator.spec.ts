import UserFactory from "../factories/Auth/UserFactory";
import SessionCreator from "../../../src/RealEstate/Auth/SessionCreator";
import DB from "../../../src/db";

describe("SessionCreator", () => {
  let user = UserFactory.create();

  describe("create", () => {
    test("it creates a new session for the user", () => {
      let service = new SessionCreator(user);

      expect(service.create()).toMatchObject({ user });
    });

    test("it stores the session in db", () => {
      let db = DB.getInstance();
      let session = new SessionCreator(user).create();

      expect(db.sessions).toContain(session);
    })
  });
});
