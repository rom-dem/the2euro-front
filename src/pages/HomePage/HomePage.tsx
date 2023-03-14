import CoinCard from "../../components/CoinCard/CoinCard";
import { coinAndorra2018 } from "../../mocks/coinMocks";
import HomePageStyled from "./HomePageStyled";

const mockCoin = coinAndorra2018;

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <div className="page">
        <h1 className="page__title">The 2 Euro Collection</h1>
        <span className="page__filter">Filter</span>
        <div className="page__coins-list"></div>
        <CoinCard coin={mockCoin} />
      </div>
      <div className="pagination">Pagination</div>
    </HomePageStyled>
  );
};

export default HomePage;
