import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload, UiState } from "./types";

const initialUiState: UiState = {
  isError: false,
  message: "",
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setModal: (
      currentUiState,
      action: PayloadAction<ModalPayload>
    ): UiState => ({
      ...currentUiState,
      isError: action.payload.isError,
      message: action.payload.message,
    }),
    unsetModal: (currentUiState): UiState => ({
      ...currentUiState,
      isError: initialUiState.isError,
      message: initialUiState.message,
    }),
    setIsLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),
    unsetIsLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  setModal: setModalActionCreator,
  unsetModal: unsetModalActionCreator,
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
} = uiSlice.actions;
