import { useCallback } from "react";
import endpoints from "../../routers/endpoints";
import { loadAllCoinsActionCreator } from "../../store/features/coins/coinsSlice";
import { CoinsFromApi } from "../../store/features/coins/types";
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
        `${process.env.REACT_APP_API_URL}${endpoints.the2euro}${endpoints.coins}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
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
  return { loadAllCoins };
};

export default useApi;
