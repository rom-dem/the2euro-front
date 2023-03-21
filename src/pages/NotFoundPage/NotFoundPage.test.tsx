import { screen, waitFor } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage page", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with 'Page not found' text in it", async () => {
      const expectedText = /page not found/i;

      let heading;

      renderRouterWithProviders({}, <NotFoundPage />);
      await waitFor(
        () => (heading = screen.getByRole("heading", { name: expectedText }))
      );

      expect(heading).toBeInTheDocument();
    });
  });
});
