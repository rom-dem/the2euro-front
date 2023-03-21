import { screen, waitFor } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import { UserState } from "../../store/features/users/types";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import LoginPage from "./LoginPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a LoginPage page", () => {
  describe("When rendered", () => {
    test("Then it should show a submit button", async () => {
      const buttonText = /log in/i;

      let button;

      renderRouterWithProviders({}, <LoginPage />);
      await waitFor(
        () => (button = screen.getByRole("button", { name: buttonText }))
      );

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user is logged in", () => {
    test("Then it should call 'Navigate'", () => {
      const user: UserState = {
        email: "",
        id: "",
        token: "",
        isLogged: true,
      };

      renderRouterWithProviders({ user: user }, <LoginPage />);
      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
