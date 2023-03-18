import { screen } from "@testing-library/react";
import { preloadedErrorUiState } from "../../mocks/preloadedUiState";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import App from "./App";

describe("Given the App component", () => {
  describe("When rendered", () => {
    test("Then it should show a Loading component when its status is set to true", () => {
      renderRouterWithProviders({ ui: preloadedErrorUiState }, <App />);
      const loader = screen.getByRole("status");

      expect(loader).toBeInTheDocument();
    });
  });
  describe("When fails to render", () => {
    test("Then it should show 3 buttons: home, create and login", () => {
      const loginText = /login/i;
      const createText = /create/i;
      const homeText = /home/i;

      renderRouterWithProviders({});
      const loginButton = screen.getByRole("link", { name: loginText });
      const myCoinsButton = screen.getByRole("link", { name: createText });
      const homeButton = screen.getByRole("link", { name: homeText });

      expect(loginButton).toBeInTheDocument();
      expect(myCoinsButton).toBeInTheDocument();
      expect(homeButton).toBeInTheDocument();
    });
  });
});
