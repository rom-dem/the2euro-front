import {
  preloadedLoggedinState,
  preloadedLoggedoutState,
} from "../../../mocks/preloadedUiState";
import { UserState } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer reducer", () => {
  const jairo: UserState = {
    id: "1",
    isLogged: false,
    email: "jairo@test.com",
    token: "12341234",
  };
  describe("When it receives a registered user Jairo and a loginUser action", () => {
    test("Then it should switch its isLogged property to true", () => {
      const loginUserAction = loginUserActionCreator(jairo);
      const expectedJairoState: UserState = {
        isLogged: true,
        email: "jairo@test.com",
        id: "1",
        token: "12341234",
      };

      const newJairoState = userReducer(jairo, loginUserAction);

      expect(newJairoState).toStrictEqual(expectedJairoState);
    });
  });

  describe("When it receives a logoutUser action", () => {
    test("Then it should set the logged state to false", () => {
      const logoutUserAction = logoutUserActionCreator();
      const expectedState = preloadedLoggedoutState;

      const newState = userReducer(preloadedLoggedinState, logoutUserAction);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
