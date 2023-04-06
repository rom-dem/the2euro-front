import { screen, waitFor } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import RegisterPage from "./RegisterPage";
import { UserState } from "../../store/features/users/types";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

window.scrollTo = jest.fn();

describe("Given a RegisterPage", () => {
  describe("When rendered", () => {
    test("Then it should show a submit button", async () => {
      const buttonText = /register/i;

      let button;

      renderRouterWithProviders({}, <RegisterPage />);
      await waitFor(
        () => (button = screen.getByRole("button", { name: buttonText }))
      );

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user is registered", () => {
    test("Then it should call 'Navigate'", () => {});
    const user: UserState = {
      email: "",
      id: "",
      token: "",
      isLogged: true,
    };

    renderRouterWithProviders({ user: user }, <RegisterPage />);
    expect(ReactRouterDom.Navigate).toHaveBeenCalled();
  });
});
