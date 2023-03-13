import { screen } from "@testing-library/react";
import { preloadedErrorUiState } from "../../mocks/preloadedUiState";
import { renderRouterWithProviders } from "../../testUtil/renderWithProviders";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show a Loading component when its status is set to true", () => {
      renderRouterWithProviders(<Layout />, { ui: preloadedErrorUiState });
      const loader = screen.getByRole("status");

      expect(loader).toBeInTheDocument();
    });
  });
});
