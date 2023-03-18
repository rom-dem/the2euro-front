import { renderHook } from "@testing-library/react";
import jwtDecode from "jwt-decode";
import { Wrapper } from "../../mocks/Wrapper";
import { store } from "../../store/store";
import { User } from "../../store/features/users/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/users/userSlice";
import { CustomTokenPayload, UserCredentials } from "./types";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import useUser from "./useUser";
import { ModalPayload } from "../../store/features/ui/types";
import { setModalActionCreator } from "../../store/features/ui/uiSlice";

beforeAll(() => {
  jest.clearAllMocks();
});

jest.mock("jwt-decode", () => jest.fn());
const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useUser custom hook", () => {
  const mockUserCredentials: UserCredentials = {
    email: "test@test.com",
    password: "password1234",
  };

  const mockTockenPayload: CustomTokenPayload = {
    id: "009",
    email: mockUserCredentials.email,
  };

  const mockTocken = "1234asdf";

  const {
    result: {
      current: { loginUser },
    },
  } = renderHook(() => useUser(), { wrapper: Wrapper });

  describe("When its loginUser function is called with user credentials", () => {
    beforeEach(() => {
      server.resetHandlers(...handlers);
    });

    test("Then it should call dispatch function with the user credentials", async () => {
      const mockLoggedinUser: User = {
        email: mockTockenPayload.email,
        id: mockTockenPayload.id,
        token: mockTocken,
      };

      (jwtDecode as jest.MockedFunction<typeof jwtDecode>).mockReturnValue(
        mockTockenPayload
      );

      await loginUser(mockUserCredentials);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(mockLoggedinUser)
      );
    });
  });

  describe("When its loginUser function is called and fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the dispatch method with setModalActionCreator with the message 'Wrong credentials'", async () => {
      const errorMessage = "Wrong credentials";

      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: errorMessage,
      };

      await loginUser(mockUserCredentials);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        setModalActionCreator(modal)
      );
    });
  });

  describe("When its logoutUser function is called", () => {
    const {
      result: {
        current: { logoutUser },
      },
    } = renderHook(() => useUser(), { wrapper: Wrapper });

    test("Then it should call the dispatch function to log out", async () => {
      await logoutUser();

      expect(dispatchSpy).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });
});
