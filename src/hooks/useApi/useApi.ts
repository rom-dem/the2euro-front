import { useCallback } from "react";
import endpoints from "../../routers/endpoints";
import {
  deleteCoinByIdActionCreator,
  loadAllCoinsActionCreator,
} from "../../store/features/coins/coinsSlice";
import { CoinsFromApi, CoinStructure } from "../../store/features/coins/types";
import {
  setIsLoadingActionCreator,
  setModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();

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

      const { coins } = (await response.json()) as CoinsFromApi;

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
          `${process.env.REACT_APP_API_URL}${endpoints.coins}${endpoints.delete}${endpoints.id}`,
          { method: "DELETE", headers: { "Content-Type": "application/json" } }
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
    [dispatch]
  );
  return { loadAllCoins, deleteCoinById };
};

export default useApi;
