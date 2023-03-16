import { screen } from "@testing-library/react";
import { coinAndorra2018 } from "../../mocks/coinMocks";
import { renderWithProviders } from "../../testUtil/renderWithProviders";
import CoinCard from "./CoinCard";
import { renderRouterWithProviders } from "../../testUtil/renderRouterWithProviders";
import {
  preloadedCoinsState,
  preloadedLoggedinState,
  preloadedSucessUiState,
} from "../../mocks/preloadedUiState";
import userEvent from "@testing-library/user-event";

const mockDeleteCoinById = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => () => ({
  deleteCoinById: mockDeleteCoinById,
}));

describe("Given CoinCard component", () => {
  describe("When rendered", () => {
    test("Then it should show an image with alternative text", () => {
      const mockCoin = coinAndorra2018;

      renderWithProviders(<CoinCard coin={mockCoin} />);
      const image = screen.getByAltText(mockCoin.description);

      expect(image).toBeInTheDocument();
    });

    test("Then it should call the deleteCoinById when a user clicks on the delete button", async () => {
      renderRouterWithProviders(
        {
          ui: preloadedSucessUiState,
          user: preloadedLoggedinState,
          coins: preloadedCoinsState,
        },
        <CoinCard coin={coinAndorra2018} />
      );

      const deleteButton = screen.getByRole("button", { name: "delete coin" });

      await userEvent.click(deleteButton);

      expect(mockDeleteCoinById).toHaveBeenCalledWith(coinAndorra2018);
    });
  });
});
