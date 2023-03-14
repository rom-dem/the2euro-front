import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import { UserState } from "../../store/features/users/types";
import { renderRouterWithProviders } from "../../testUtil/renderWithProviders";
import LoginPage from "./LoginPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a LoginPage page", () => {
  describe("When rendered", () => {
    test("Then it should show a submit button", () => {
      const buttonText = /log in/i;

      renderRouterWithProviders(<LoginPage />);
      const button = screen.getByRole("button", { name: buttonText });

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

      renderRouterWithProviders(<LoginPage />, { user: user });
      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
