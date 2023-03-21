import { act, screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";

window.scrollTo = jest.fn();

describe("Given the App component", () => {
  describe("When fails to render", () => {
    test("Then it should show a Loading component", () => {
      renderRouterWithProviders({});

      let loader;

      act(() => (loader = screen.getByRole("status")));

      expect(loader).toBeInTheDocument();
    });
  });
});
