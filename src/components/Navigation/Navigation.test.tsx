import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  preloadedLoggedinState,
  preloadedLoggedoutState,
} from "../../mocks/preloadedUiState";
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
      const loginText = /login/i;
      const createText = /create/i;
      const homeText = /home/i;

      renderRouterWithProviders(
        { user: preloadedLoggedoutState },
        <Navigation />
      );
      const loginLink = screen.getByRole("link", { name: loginText });
      const createLink = screen.getByRole("link", { name: createText });
      const homeLink = screen.getByRole("link", { name: homeText });

      expect(loginLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
      expect(homeLink).toBeInTheDocument();
    });
  });

  describe("When rendered while the user is logged in", () => {
    test("Then it should show the button to log out", async () => {
      const logoutText = /logout/i;

      renderRouterWithProviders(
        { user: preloadedLoggedinState },
        <Navigation />
      );
      const logoutLink = screen.getByRole("link", { name: logoutText });
      await act(async () => await userEvent.click(logoutLink));

      expect(mockLogoutUser).toHaveBeenCalled();
    });
  });
});
