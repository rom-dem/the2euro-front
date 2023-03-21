import { screen, waitFor } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import DetailPage from "./DetailPage";

describe("Given DetailPage page", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with 'Coin details' as h1", async () => {
      const expectedHeadingText = /coin details/i;

      let heading;

      renderRouterWithProviders({}, <DetailPage />);

      await waitFor(
        () =>
          (heading = screen.getByRole("heading", {
            name: expectedHeadingText,
          }))
      );

      expect(heading).toBeInTheDocument();
    });
  });
});
