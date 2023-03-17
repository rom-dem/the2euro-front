import { useCallback } from "react";
import endpoints from "../../routers/endpoints";
import {
  createCoinActionCreator,
  deleteCoinByIdActionCreator,
  loadAllCoinsActionCreator,
} from "../../store/features/coins/coinsSlice";
import { CoinsState, CoinStructure } from "../../store/features/coins/types";
import {
  setIsLoadingActionCreator,
  setModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();

  const { token } = useAppSelector((state) => state.user);

  const loadAllCoins = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}${endpoints.coins}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );

      if (!response.ok) {
        const errorMessage = "Couldn't load coins";
        throw new Error(errorMessage);
      }

      const { coins } = (await response.json()) as CoinsState;

      dispatch(loadAllCoinsActionCreator(coins));
      dispatch(unsetIsLoadingActionCreator());
    } catch (error: unknown) {
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
  }, [dispatch]);

  const deleteCoinById = useCallback(
    async (coin: CoinStructure) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}${endpoints.coins}${endpoints.delete}/${coin.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorMessage = "Couldn't delete the coin";
          throw new Error(errorMessage);
        }

        dispatch(deleteCoinByIdActionCreator(coin));
        dispatch(unsetIsLoadingActionCreator());
        dispatch(
          setModalActionCreator({
            isSuccess: true,
            isError: false,
            message: "The coin was deleted",
          })
        );
      } catch (error: unknown) {
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
    },
    [dispatch, token]
  );

  const createCoin = useCallback(
    async (coin: CoinStructure) => {
      dispatch(setIsLoadingActionCreator());

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}${endpoints.coins}${endpoints.create}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorMessage = "Couldn't create the coin";
          throw new Error(errorMessage);
        }

        dispatch(createCoinActionCreator(coin));

        dispatch(unsetIsLoadingActionCreator());
        dispatch(
          setModalActionCreator({
            isSuccess: true,
            isError: false,
            message: "The coin was created",
          })
        );
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
    },
    [dispatch, token]
  );

  return { loadAllCoins, deleteCoinById, createCoin };
};

export default useApi;
