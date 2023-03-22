import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import CreatePage from "./CreatePage";
import {
  preloadedLoggedinState,
  preloadedLoggedoutState,
} from "../../mocks/preloadedUiState";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given CreatePage page", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with the text 'Add a new coin'", async () => {
      const headingText = /add a new coin/i;

      renderRouterWithProviders(
        { user: preloadedLoggedinState },
        <CreatePage />
      );
      const homeHeading = await screen.findByRole("heading", {
        name: headingText,
      });

      expect(homeHeading).toBeInTheDocument();
    });
  });

  describe("When the user is not logged in", () => {
    test("Then it should call 'Navigate'", () => {
      renderRouterWithProviders(
        { user: preloadedLoggedoutState },
        <CreatePage />
      );

      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
