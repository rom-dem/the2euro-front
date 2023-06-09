import { renderHook } from "@testing-library/react";
import { Wrapper } from "../../mocks/Wrapper";
import { store } from "../../store/store";
import useApi from "./useApi";
import { mockCoins } from "../../mocks/coinMocks";
import {
  deleteCoinByIdActionCreator,
  getCoinByIdActionCreator,
  loadAllCoinsActionCreator,
} from "../../store/features/coins/coinsSlice";
import { ModalPayload } from "../../store/features/ui/types";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { setModalActionCreator } from "../../store/features/ui/uiSlice";

afterEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

const [coinMalta2020] = mockCoins;

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given the useApi custom hook", () => {
  describe("When its loadAllCoins function is called", () => {
    test("Then it should call its dispatch method", async () => {
      const {
        result: {
          current: { loadAllCoins },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await loadAllCoins();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadAllCoinsActionCreator(mockCoins)
      );
    });
  });

  describe("When its loadAllCoins function is called and fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the dispatch method with setModalActionCreator with the message 'Couldn't load coins'", async () => {
      const {
        result: {
          current: { loadAllCoins },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      const errorMessage = "Couldn't load coins";

      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: errorMessage,
      };

      await loadAllCoins();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        setModalActionCreator(modal)
      );
    });
  });

  describe("When its deleteCoinById function is called", () => {
    test("Then it should call its dispatch method", async () => {
      const {
        result: {
          current: { deleteCoinById },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await deleteCoinById(coinMalta2020);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        deleteCoinByIdActionCreator(coinMalta2020)
      );
    });
  });

  describe("When its deleteCoinById function is called but fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the dispatch method with setModalActionCreator with the message 'Couldn't delete coin'", async () => {
      const {
        result: {
          current: { deleteCoinById },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      const errorMessage = "Couldn't delete the coin";

      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: errorMessage,
      };

      await deleteCoinById(coinMalta2020);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        setModalActionCreator(modal)
      );
    });
  });

  describe("When its createCoin function is called", () => {
    test("Then it should call the dispatch method with setModalActionCreator with the message 'The coin was created'", async () => {
      const {
        result: {
          current: { createCoin },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      const successMessage = "The coin was created";

      const modal: ModalPayload = {
        isError: false,
        isSuccess: true,
        message: successMessage,
      };

      await createCoin(coinMalta2020);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        setModalActionCreator(modal)
      );
    });
  });

  describe("When its createCoin function is called but fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call its dispatch method with setModalActionCreator with the message 'Couldn't create the coin'", async () => {
      const {
        result: {
          current: { createCoin },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      const errorMessage = "Couldn't create the coin";

      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: errorMessage,
      };

      await createCoin(coinMalta2020);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        setModalActionCreator(modal)
      );
    });
  });

  describe("When its getCoinById function is called", () => {
    test("Then it should call its dispatch method", async () => {
      const {
        result: {
          current: { getCoinById },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await getCoinById(coinMalta2020.id);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        getCoinByIdActionCreator(coinMalta2020)
      );
    });
  });

  describe("When its getCoinById function is called but fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call its dispatch method with setModalActionCreator with the message 'Couldn't load the coin'", async () => {
      const {
        result: {
          current: { getCoinById },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      const errorMessage = "Couldn't load the coin";

      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: errorMessage,
      };

      await getCoinById(coinMalta2020.id);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        setModalActionCreator(modal)
      );
    });
  });
});
