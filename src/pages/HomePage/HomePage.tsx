import { useEffect } from "react";
import CoinCardsList from "../../components/CoinCardsList/CoinCardsList";
import useApi from "../../hooks/useApi/useApi";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { loadAllCoins } = useApi();

  useEffect(() => {
    loadAllCoins();
  }, [loadAllCoins]);

  return (
    <HomePageStyled>
      <div className="page">
        <h1 className="page__title">The 2 Euro Collection</h1>
        <CoinCardsList />
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
