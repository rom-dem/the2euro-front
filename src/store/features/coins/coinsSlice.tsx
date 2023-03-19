import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinsState, CoinsStructure, CoinStructure } from "./types";

export const initialState: CoinsState = {
  coins: [],
  coinDetail: {
    country: "",
    year: 0,
    feature: "",
    description: "",
    image: "",
    issuingVolume: 0,
    owner: "",
    id: "",
  },
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
    ): CoinsState => ({
      ...currentCoinState,
      coins: currentCoinState.coins.filter(
        (coin) => coin.id !== action.payload.id
      ),
    }),
  },
});

export const coinsReducer = coinsSlice.reducer;
export const {
  loadAllCoins: loadAllCoinsActionCreator,
  deleteCoinById: deleteCoinByIdActionCreator,
} = coinsSlice.actions;
