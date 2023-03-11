export interface UiState {
  isError: boolean;
  modal: string;
  isLoading: boolean;
}

export interface ModalPayload {
  modal: string;
  isError: boolean;
}
