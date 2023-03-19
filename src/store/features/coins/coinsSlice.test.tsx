import {
  coinAndorra2018,
  coinMalta2020,
  mockCoins,
} from "../../../mocks/coinMocks";
import {
  coinsReducer,
  deleteCoinByIdActionCreator,
  initialState,
  loadAllCoinsActionCreator,
} from "./coinsSlice";
import { CoinsState } from "./types";

describe("Given a coinReducer reducer", () => {
  describe("When it receives a loadAllCoins action and a list of 1 coin", () => {
    test("Then it should overwrite its empty initial list with a list with 1 coin", () => {
      const coinsFromApi = mockCoins;

      const loadCoinsAction = loadAllCoinsActionCreator(coinsFromApi);
      const result = coinsReducer(initialState, loadCoinsAction);
      const expectedCoins: CoinsState = {
        ...initialState,
        coins: coinsFromApi,
      };

      expect(expectedCoins).toStrictEqual(result);
    });
  });

  describe("When it receives a deleteCoinById action and a coin to delete", () => {
    test("Then is should give a new state without that coin", () => {
      const initialCoinsList: CoinsState = {
        ...initialState,
        coins: [coinAndorra2018, coinMalta2020],
      };

      const deleteCoinByIdAction = deleteCoinByIdActionCreator(coinMalta2020);
      const newCoinList = coinsReducer(initialCoinsList, deleteCoinByIdAction);
      const expectedList: CoinsState = {
        ...initialState,
        coins: [coinAndorra2018],
      };

      expect(expectedList).toStrictEqual(newCoinList);
    });
  });
});
