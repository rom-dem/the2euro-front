import { renderHook } from "@testing-library/react";
import jwtDecode from "jwt-decode";
import { Wrapper } from "../../mocks/Wrapper";
import { store } from "../../store/store";
import { User } from "../../store/features/users/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/users/userSlice";
import {
  CustomTokenPayload,
  UserCredentials,
  UserRegisterCredentials,
} from "./types";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import useUser from "./useUser";
import { ModalPayload } from "../../store/features/ui/types";
import { setModalActionCreator } from "../../store/features/ui/uiSlice";

beforeAll(() => {
  jest.clearAllMocks();
});

jest.mock("jwt-decode", () => jest.fn());
const dispatchSpy = jest.spyOn(store, "dispatch");

const mockedUserNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUserNavigate,
}));

const mockUserCredentials: UserCredentials = {
  email: "test@test.com",
  password: "password1234",
};

const mockRegisterUserCredentials: UserRegisterCredentials = {
  email: "new@test.com",
  password: "newPassword1234",
  username: "New User",
};

const mockWrongRegisterUserCredentials: UserRegisterCredentials = {
  email: "123",
  password: "123",
  username: "123",
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

const {
  result: {
    current: { logoutUser },
  },
} = renderHook(() => useUser(), { wrapper: Wrapper });

const {
  result: {
    current: { registerUser },
  },
} = renderHook(() => useUser(), { wrapper: Wrapper });

describe("Given the useUser custom hook", () => {
  describe("When its loginUser function is called with user credentials", () => {
    // beforeEach(() => {
    //   server.resetHandlers(...handlers);
    // });

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
    test("Then it should call the dispatch function to log out", async () => {
      await logoutUser();

      expect(dispatchSpy).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });

  describe("When its registerUser function is called with user credentials", () => {
    test("Then it should call its success modal action creator with the message 'You've been registered. Please log in.'", async () => {
      const expectedMessage = "You've been registered. Please log in.";
      const modal: ModalPayload = {
        isError: false,
        isSuccess: true,
        message: expectedMessage,
      };

      await registerUser(mockRegisterUserCredentials);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        setModalActionCreator(modal)
      );
    });
  });

  describe("When its registerUser function is called but fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call its error modal action creator with the message 'Something went wrong, please try again.'", async () => {
      const expectedMessage = "Something went wrong, please try again.";
      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: expectedMessage,
      };

      await registerUser(mockWrongRegisterUserCredentials);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        setModalActionCreator(modal)
      );
    });
  });
});
