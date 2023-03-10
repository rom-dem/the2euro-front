import { renderHook } from "@testing-library/react";
import jwtDecode from "jwt-decode";
import { Wrapper } from "../mocks/Wrapper";
import { store } from "../store/store";
import { User } from "../store/features/users/types";
import { loginUserActionCreator } from "../store/features/users/userSlice";
import { CustomTokenPayload, UserCredentials } from "./types";
import useUser from "./useUser";

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

  describe("When its loginUser function is called with user credentials", () => {
    test("Then it should call dispatch function with the user credentials", async () => {
      const mockLoggedinUser: User = {
        email: mockTockenPayload.email,
        id: mockTockenPayload.id,
        token: mockTocken,
      };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (jwtDecode as jest.MockedFunction<typeof jwtDecode>).mockReturnValue(
        mockTockenPayload
      );

      await loginUser(mockUserCredentials);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(mockLoggedinUser)
      );
    });
  });
});
