import { screen } from "@testing-library/react";
import { preloadedErrorUiState } from "../../mocks/preloadedUiState";
import { renderRouterWithProviders } from "../../testUtil/renderWithProviders";
import App from "./App";

describe("Given the App component", () => {
  describe("When rendered", () => {
    test("Then it should show a Loading component when its status is set to true", () => {
      renderRouterWithProviders(<App />, { ui: preloadedErrorUiState });
      const loader = screen.getByRole("status");

      expect(loader).toBeInTheDocument();
    });
  });
});
