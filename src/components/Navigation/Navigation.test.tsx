import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When rendered", () => {
    test("Then it should show 3 buttons: home, create and login", async () => {
      const loginText = /login/i;
      const createText = /create/i;
      const homeText = /home/i;

      renderRouterWithProviders({}, <Navigation />);
      const loginButton = screen.getByRole("link", { name: loginText });
      const myCoinsButton = screen.getByRole("link", { name: createText });
      const homeButton = screen.getByRole("link", { name: homeText });

      expect(loginButton).toBeInTheDocument();
      expect(myCoinsButton).toBeInTheDocument();
      expect(homeButton).toBeInTheDocument();
    });
  });
});
