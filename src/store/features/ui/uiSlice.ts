import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload, UiState } from "./types";

const initialUiState: UiState = {
  isError: false,
  modal: "",
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
      modal: action.payload.modal,
    }),
    unsetModal: (currentUiState): UiState => ({
      ...currentUiState,
      isError: initialUiState.isError,
      modal: initialUiState.modal,
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
