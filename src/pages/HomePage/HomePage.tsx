import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <div className="page">
        <h1 className="page__title">The 2 Euro Collection</h1>
        <span className="page__filter">Filter</span>
        <div className="page__coins-list">Coins list</div>
      </div>
      <div className="pagination">Pagination</div>
    </HomePageStyled>
  );
};

export default HomePage;
