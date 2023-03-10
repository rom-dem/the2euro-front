import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload, UiState } from "./types";

const initialUiState: UiState = {
  isError: false,
  modal: "",
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
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  setModal: setModalActionCreator,
  unsetModal: unsetModalActionCreator,
} = uiSlice.actions;
