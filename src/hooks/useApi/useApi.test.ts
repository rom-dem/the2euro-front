import { renderHook } from "@testing-library/react";
import { Wrapper } from "../../mocks/Wrapper";
import { store } from "../../store/store";
import useApi from "./useApi";
import { mockCoins } from "../../mocks/coinMocks";
import { loadAllCoinsActionCreator } from "../../store/features/coins/coinsSlice";
import { ModalPayload } from "../../store/features/ui/types";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { setModalActionCreator } from "../../store/features/ui/uiSlice";

afterEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useApi custom hook", () => {
  const {
    result: {
      current: { loadAllCoins },
    },
  } = renderHook(() => useApi(), { wrapper: Wrapper });

  describe("When its loadAllCoins functions is called", () => {
    test("Then it should call its dispatch method", async () => {
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
});
