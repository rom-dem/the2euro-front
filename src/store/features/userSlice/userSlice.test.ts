import { UserState } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer reducer", () => {
  const jairo: UserState = {
    id: "1",
    unsername: "Jairo",
    isLogged: false,
    email: "jairo@test.com",
    token: "12341234",
  };
  describe("When it receives a registered user Jairo and an loginUser action", () => {
    test("Then it should switch its isLogged property to true", () => {
      const loginUserAction = loginUserActionCreator(jairo);
      const expectedJairoState: UserState = {
        isLogged: true,
        unsername: "Jairo",
        email: "jairo@test.com",
        id: "1",
        token: "12341234",
      };

      const newJairoState = userReducer(jairo, loginUserAction);

      expect(newJairoState).toStrictEqual(expectedJairoState);
    });
  });
});
