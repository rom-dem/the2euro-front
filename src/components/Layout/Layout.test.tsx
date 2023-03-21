import { screen } from "@testing-library/react";
import { preloadedErrorUiState } from "../../mocks/preloadedUiState";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import Layout from "./Layout";

window.scrollTo = jest.fn();

describe("Given the Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show a Loading component when its status is set to true", () => {
      renderRouterWithProviders({ ui: preloadedErrorUiState }, <Layout />);
      const loader = screen.getByRole("status");

      expect(loader).toBeInTheDocument();
    });
  });
});
