import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtil/renderWithProviders";
import CreatePage from "./CreatePage";

describe("Given CreatePage page", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with the text 'Add a new coin'", async () => {
      const linkText = /add a new coin/i;

      renderWithProviders(<CreatePage />);
      const homeHeading = await screen.findByRole("heading", {
        name: linkText,
      });

      expect(homeHeading).toBeInTheDocument();
    });
  });
});
