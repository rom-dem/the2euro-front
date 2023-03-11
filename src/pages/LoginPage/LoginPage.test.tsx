import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtil/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When rendered", () => {
    test("Then it should show a submit button", () => {
      const buttonText = /log in/i;

      renderWithProviders(<LoginPage />);
      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
