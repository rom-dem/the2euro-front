import { screen } from "@testing-library/react";
import { coinAndorra2018, mockCoinsFromApi } from "../../mocks/coinMocks";
import { renderRouterWithProviders } from "../../testUtil/renderWithProviders";
import CoinsList from "./CoinsList";

describe("Given CoinsList component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of coins and a heading with 'Andorra' as h2", () => {
      const mockCoin = coinAndorra2018;

      renderRouterWithProviders(<CoinsList />, { coins: mockCoinsFromApi });
      const expectedCoin = screen.getByRole("heading", {
        name: mockCoin.country,
      });

      expect(expectedCoin).toBeInTheDocument();
    });
  });
});
