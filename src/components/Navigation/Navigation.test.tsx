import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { preloadedLoggedinState } from "../../mocks/preloadedUiState";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import Navigation from "./Navigation";

const mockLogoutUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  logoutUser: mockLogoutUser,
}));

window.scrollTo = jest.fn();

describe("Given a Navigation component", () => {
  describe("When rendered", () => {
    test("Then it should show 3 buttons: home, create and login", async () => {
      const loginText = /user/i;
      const createText = /create/i;
      const homeText = /home/i;

      renderRouterWithProviders({}, <Navigation />);
      const loginButton = screen.getByRole("button", { name: loginText });
      const myCoinsButton = screen.getByRole("button", { name: createText });
      const homeButton = screen.getByRole("button", { name: homeText });

      expect(loginButton).toBeInTheDocument();
      expect(myCoinsButton).toBeInTheDocument();
      expect(homeButton).toBeInTheDocument();
    });
  });

  describe("When rendered while the user is logged in", () => {
    test("Then it should show the button to log out", async () => {
      const logoutText = /user/i;

      renderRouterWithProviders(
        { user: preloadedLoggedinState },
        <Navigation />
      );
      const logoutButton = screen.getByRole("button", { name: logoutText });
      await act(async () => await userEvent.click(logoutButton));

      expect(mockLogoutUser).toHaveBeenCalled();
    });
  });
});
