import { useAppDispatch } from "../store/hooks";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
  UseUserStructure,
} from "./types";
import jwtDecode from "jwt-decode";
import { loginUserActionCreator } from "../store/features/users/userSlice";
import {
  setIsLoadingActionCreator,
  setModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const pathLogin = "/the2euro/login";
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(`${apiUrl}${pathLogin}`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-type": "application/json" },
      });
      dispatch(unsetIsLoadingActionCreator());

      if (!response.ok) {
        const errorMessage = "Wrong credentials";
        const errorLogin = new Error(errorMessage);

        throw errorLogin;
      }

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
    } catch (error) {
      const errorMessage = (error as Error).message;
      dispatch(
        setModalActionCreator({
          isError: true,
          message: errorMessage,
          isSuccess: false,
        })
      );
    }
  };

  return { loginUser };
};

export default useUser;
