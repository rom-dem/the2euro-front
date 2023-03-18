import { CoinsState } from "../store/features/coins/types";
import { UiState } from "../store/features/ui/types";
import { UserState } from "../store/features/users/types";
import { coinAndorra2018 } from "./coinMocks";

export const preloadedErrorUiState: UiState = {
  isError: true,
  message: "Wrong credentials",
  isLoading: true,
  isSuccess: false,
};

export const preloadedSucessUiState: UiState = {
  isError: false,
  message: "New coin added",
  isLoading: false,
  isSuccess: true,
};

export const preloadedLoggedinState: UserState = {
  email: "",
  id: "didi",
  isLogged: true,
  token: "",
};

export const preloadedLoggedoutState: UserState = {
  email: "",
  id: "",
  isLogged: false,
  token: "",
};

export const preloadedCoinsState: CoinsState = {
  coins: [coinAndorra2018],
};
