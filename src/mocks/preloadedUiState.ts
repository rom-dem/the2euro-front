import { UiState } from "../store/features/ui/types";

export const preloadedErrorUiState: UiState = {
  isError: true,
  message: "Wrong credentials",
  isLoading: false,
  isSuccess: false,
};

export const preloadedSucessUiState: UiState = {
  isError: false,
  message: "New coin added",
  isLoading: false,
  isSuccess: false,
};
