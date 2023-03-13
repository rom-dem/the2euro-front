import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinsFromApi, CoinsStructure } from "./types";

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
  },
});

export const coinsReducer = coinsSlice.reducer;
export const { loadAllCoins: loadAllCoinsActionCreator } = coinsSlice.actions;
