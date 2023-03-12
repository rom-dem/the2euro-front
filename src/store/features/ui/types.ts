export interface UiState {
  isError: boolean;
  message: string;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface ModalPayload {
  message: string;
  isError: boolean;
  isSuccess: boolean;
}
