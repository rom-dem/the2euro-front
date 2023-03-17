import {
  coinAndorra2018,
  coinMalta2020,
  mockCoins,
} from "../../../mocks/coinMocks";
import {
  coinsReducer,
  createCoinActionCreator,
  deleteCoinByIdActionCreator,
  loadAllCoinsActionCreator,
} from "./coinsSlice";
import { CoinsState } from "./types";

describe("Given a coinReducer reducer", () => {
  describe("When it receives a loadAllCoins action and a list of 1 coin", () => {
    test("Then it should overwrite its empty initial list with a list with 1 coin", () => {
      const initialCoins: CoinsState = { coins: [] };
      const coinsFromApi = mockCoins;

      const loadCoinsAction = loadAllCoinsActionCreator(coinsFromApi);
      const result = coinsReducer(initialCoins, loadCoinsAction);
      const expectedCoins: CoinsState = { coins: coinsFromApi };

      expect(expectedCoins).toStrictEqual(result);
    });
  });

  describe("When it receives a deleteCoinById action and a coin to delete", () => {
    test("Then is should give a new state without that coin", () => {
      const initialCoinsList: CoinsState = {
        coins: [coinAndorra2018, coinMalta2020],
      };

      const deleteCoinByIdAction = deleteCoinByIdActionCreator(coinMalta2020);
      const newCoinList = coinsReducer(initialCoinsList, deleteCoinByIdAction);
      const expectedList: CoinsState = {
        coins: [coinAndorra2018],
      };

      expect(expectedList).toStrictEqual(newCoinList);
    });
  });

  describe("When it receives a createCoin action and a coin to create", () => {
    test("Then it should add this coin to the current state list", () => {
      const initialCoinsList: CoinsState = {
        coins: [coinAndorra2018],
      };

      const createNewCoin = createCoinActionCreator(coinMalta2020);
      const newCoinList = coinsReducer(initialCoinsList, createNewCoin);
      const expectedList: CoinsState = {
        coins: [coinAndorra2018, coinMalta2020],
      };

      expect(expectedList).toStrictEqual(newCoinList);
    });
  });
});
