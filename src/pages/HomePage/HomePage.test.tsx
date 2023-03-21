import { screen, waitFor } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import HomePage from "./HomePage";

describe("Given HomePage component", () => {
  describe("When renderes", () => {
    test("Then it should show the heading 'The 2 Euro Collection'", async () => {
      const headingText = /the 2 euro collection/i;

      let heading;

      renderRouterWithProviders({}, <HomePage />);
      await waitFor(
        () => (heading = screen.getByRole("heading", { name: headingText }))
      );

      expect(heading).toBeInTheDocument();
    });
  });
});
