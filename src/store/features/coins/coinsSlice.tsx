import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinsFromApi, CoinsStructure, CoinStructure } from "./types";

const initialState: CoinsFromApi = {
  coins: [],
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    loadAllCoins: (
      currentCoinState,
      action: PayloadAction<CoinsStructure>
    ) => ({
      ...currentCoinState,
      coins: [...action.payload],
    }),
    deleteCoinById: (
      currentCoinState,
      action: PayloadAction<CoinStructure>
    ) => {
      const updatedList = currentCoinState.coins.filter(
        (coin) => coin.id !== action.payload.id
      );
      return { coins: updatedList };
    },
  },
});

export const coinsReducer = coinsSlice.reducer;
export const {
  loadAllCoins: loadAllCoinsActionCreator,
  deleteCoinById: deleteCoinByIdActionCreator,
} = coinsSlice.actions;
