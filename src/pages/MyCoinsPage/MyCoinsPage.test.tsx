import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtil/renderWithProviders";
import MyCoinsPage from "./MyCoinsPage";

describe("Given MyCoinsPage page", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with the text 'My Coins'", async () => {
      const linkText = /my coins/i;

      renderWithProviders(<MyCoinsPage />);
      const homeHeading = await screen.findByRole("heading", {
        name: linkText,
      });

      expect(homeHeading).toBeInTheDocument();
    });
  });
});
