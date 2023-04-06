import decodeToken from "jwt-decode";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { UseTokenStructure } from "./types";
import { CustomTokenPayload } from "../useUser/types";
import { loginUserActionCreator } from "../../store/features/users/userSlice";

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const saveToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { id, email } = decodeToken<CustomTokenPayload>(token);
      dispatch(loginUserActionCreator({ id, email, token }));
    }
  }, [dispatch]);

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  return { saveToken, deleteToken };
};

export default useToken;
