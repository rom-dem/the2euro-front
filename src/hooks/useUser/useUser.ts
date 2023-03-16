import { useAppDispatch } from "../../store/hooks";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
  UseUserStructure,
} from "./types";
import jwtDecode from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/users/userSlice";
import {
  setIsLoadingActionCreator,
  setModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import endpoints from "../../routers/endpoints";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const pathLogin = `${endpoints.users}${endpoints.login}`;
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(`${apiUrl}${pathLogin}`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-type": "application/json" },
      });

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
      dispatch(unsetIsLoadingActionCreator());

      localStorage.setItem("token", token);
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());

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
