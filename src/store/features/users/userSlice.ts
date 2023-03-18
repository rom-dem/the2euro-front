import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<User>) => ({
      ...currentUserState,
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (): UserState => ({ ...initialState }),
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
