import CoinsList from "../../components/CoinsList/CoinsList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <div className="page">
        <h1 className="page__title">The 2 Euro Collection</h1>
        <CoinsList />
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
