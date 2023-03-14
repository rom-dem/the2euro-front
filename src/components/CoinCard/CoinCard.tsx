import { CoinStructure } from "../../store/features/coins/types";
import CoinCardStyled from "./CoinCardStyled";

interface CoinProps {
  coin: CoinStructure;
}

const CoinCard = ({ coin }: CoinProps): JSX.Element => {
  return (
    <CoinCardStyled>
      <div className="card__image-container">
        <img
          src={coin.image}
          alt={coin.description}
          height={120}
          width={120}
          className="card__image"
        />
      </div>
      <div className="card__details">
        <h2 className="card__country">{coin.country}</h2>
        <span className="card__year">Year: {coin.year}</span>
      </div>
    </CoinCardStyled>
  );
};

export default CoinCard;
