import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil/renderWithProviders";
import HomePage from "./HomePage";

describe("Given HomePage component", () => {
  describe("When renderes", () => {
    test("Then it should show the heading 'The 2 Euro Collection'", () => {
      const headingText = /the 2 euro collection/i;

      renderRouterWithProviders(<HomePage />);
      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
