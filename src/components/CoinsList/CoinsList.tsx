import { useEffect } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";
import CoinCard from "../CoinCard/CoinCard";
import CoinsListStyled from "./CoinsListStyled";

const CoinsList = (): JSX.Element => {
  const { loadAllCoins } = useApi();

  useEffect(() => {
    loadAllCoins();
  }, [loadAllCoins]);

  const coins = useAppSelector((state) => state.coins.coins);
  return (
    <CoinsListStyled>
      {coins.map((coin) => (
        <li className="list__item" key={coin.id}>
          <CoinCard coin={coin} />
          <div className="list__border" />
        </li>
      ))}
    </CoinsListStyled>
  );
};

export default CoinsList;
