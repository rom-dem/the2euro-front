import { useAppDispatch } from "../../store/hooks";
import decodeToken from "jwt-decode";
import { CustomTokenPayload } from "../useUser/types";
import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { Wrapper } from "../../mocks/Wrapper";
import { loginUserActionCreator } from "../../store/features/users/userSlice";

jest.mock("../../store/hooks");

jest.mock("jwt-decode", () => jest.fn());

beforeAll(() => {
  jest.clearAllMocks();
});

const mockTokenPayload: CustomTokenPayload = {
  email: "fake@fake.com",
  id: "123",
};

describe("Given the useToken custom hook", () => {
  describe("When its saveToken function is called with a token", () => {
    test("Then its dispatch function should be called", () => {
      const mockToken = "abcToken123";
      localStorage.setItem("token", mockToken);
      const mockDispatch = jest.fn();
      (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const {
        result: {
          current: { saveToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });
      saveToken();

      expect(mockDispatch).toHaveBeenCalledWith(
        loginUserActionCreator({
          email: "fake@fake.com",
          id: "123",
          token: mockToken,
        })
      );
    });
  });
});
