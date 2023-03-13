import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil/renderWithProviders";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When rendered", () => {
    test("Then it should show 3 buttons: home, my coins and login", async () => {
      const loginText = /login/i;
      const myCoinsText = /my coins/i;
      const homeText = /home/i;

      renderRouterWithProviders(<Navigation />);
      const loginButton = screen.getByRole("link", { name: loginText });
      const myCoinsButton = screen.getByRole("link", { name: myCoinsText });
      const homeButton = screen.getByRole("link", { name: homeText });

      expect(loginButton).toBeInTheDocument();
      expect(myCoinsButton).toBeInTheDocument();
      expect(homeButton).toBeInTheDocument();
    });
  });
});
