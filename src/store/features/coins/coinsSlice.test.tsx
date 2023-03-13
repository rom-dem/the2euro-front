import { mockCoins } from "../../../mocks/coinMocks";
import { coinsReducer, loadAllCoinsActionCreator } from "./coinsSlice";
import { CoinsFromApi } from "./types";

describe("Given a coinReducer reducer", () => {
  describe("When it receives a loadAllCoins action and a list of 1 coin", () => {
    test("Then it should overwrite its empty initial list with a list with 1 coin", () => {
      const initialCoins: CoinsFromApi = { coins: [] };
      const coinsFromApi = mockCoins;

      const loadCoinsAction = loadAllCoinsActionCreator(coinsFromApi);
      const result = coinsReducer(initialCoins, loadCoinsAction);
      const expectedCoins: CoinsFromApi = { coins: coinsFromApi };

      expect(expectedCoins).toStrictEqual(result);
    });
  });
});
