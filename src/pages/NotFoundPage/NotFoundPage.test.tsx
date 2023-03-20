import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage page", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with 'Page not found' text in it", () => {
      const expectedText = /page not found/i;

      renderRouterWithProviders({}, <NotFoundPage />);
      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
