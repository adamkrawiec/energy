import UserFactory from "../factories/Auth/UserFactory"
import CurrentUser from "../../../src/RealEstate/Auth/CurrentUser"

describe("CurrentUser", () => {
  let user = UserFactory.create();

  describe("user", () => {
    test("it returns undefined if user is not set", () => {
      expect(CurrentUser.getInstance()).toBeUndefined();
    });

    test("it allows you to set user", () => {
      expect(CurrentUser.getInstance(user).user).toEqual(user);
    });

    test("when user is set once, it does not let you override user", () => {
      let otherUser = UserFactory.create(1, "user10@example.com");

      CurrentUser.getInstance(user)

      expect(CurrentUser.getInstance(otherUser).user).toEqual(user)
    });
  })
})