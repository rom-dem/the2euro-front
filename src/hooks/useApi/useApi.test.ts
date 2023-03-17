import { renderHook } from "@testing-library/react";
import { Wrapper } from "../../mocks/Wrapper";
import { store } from "../../store/store";
import useApi from "./useApi";
import { mockCoins } from "../../mocks/coinMocks";
import {
  createCoinActionCreator,
  deleteCoinByIdActionCreator,
  loadAllCoinsActionCreator,
} from "../../store/features/coins/coinsSlice";
import { ModalPayload } from "../../store/features/ui/types";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import { setModalActionCreator } from "../../store/features/ui/uiSlice";

afterEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

const [coinMalta2020] = mockCoins;

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
    beforeEach(() => {
      server.resetHandlers(...handlers);
    });
    test("Then it should call the dispatch method", async () => {
      const {
        result: {
          current: { createCoin },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await createCoin(coinMalta2020);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        createCoinActionCreator(coinMalta2020)
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
});
