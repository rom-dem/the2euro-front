import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinsState, CoinsStructure, CoinStructure } from "./types";

const initialState: CoinsState = {
  coins: [],
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    loadAllCoins: (
      currentCoinState,
      action: PayloadAction<CoinsStructure>
    ): CoinsState => ({
      ...currentCoinState,
      coins: [...action.payload],
    }),
    deleteCoinById: (
      currentCoinState,
      action: PayloadAction<CoinStructure>
    ): CoinsState => {
      const updatedList = currentCoinState.coins.filter(
        (coin) => coin.id !== action.payload.id
      );
      return { coins: updatedList };
    },
    createCoin: (
      currentCoinState,
      action: PayloadAction<CoinStructure>
    ): CoinsState => ({
      coins: [...currentCoinState.coins, action.payload],
    }),
  },
});

export const coinsReducer = coinsSlice.reducer;
export const {
  loadAllCoins: loadAllCoinsActionCreator,
  deleteCoinById: deleteCoinByIdActionCreator,
  createCoin: createCoinActionCreator,
} = coinsSlice.actions;
