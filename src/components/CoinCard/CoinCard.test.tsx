import { screen } from "@testing-library/react";
import { coinAndorra2018 } from "../../mocks/coinMocks";
import { renderWithProviders } from "../../testUtil/renderWithProviders";
import CoinCard from "./CoinCard";

describe("Given CoinCard component", () => {
  describe("When rendered", () => {
    test("Then it should show an image with alternative text", () => {
      const mockCoin = coinAndorra2018;

      renderWithProviders(<CoinCard coin={mockCoin} />);
      const image = screen.getByAltText(mockCoin.description);

      expect(image).toBeInTheDocument();
    });
  });
});
