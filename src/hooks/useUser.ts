import { useAppDispatch } from "../store/hooks";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
  UseUserStructure,
} from "./types";
import jwtDecode from "jwt-decode";
import { loginUserActionCreator } from "../store/features/userSlice/userSlice";

export const useUser = (): UseUserStructure => {
  const urlApi = process.env.REACT_APP_API_URL;
  const pathLogin = "users/login";
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${urlApi}${pathLogin}`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-type": "application/json" },
    });

    const { token }: LoginResponse = await response.json();

    const tokenPayload: CustomTokenPayload = jwtDecode(token);

    const { id, email } = tokenPayload;

    dispatch(
      loginUserActionCreator({
        id,
        email,
        token,
      })
    );

    localStorage.setItem("token", token);
  };

  return { loginUser };
};
