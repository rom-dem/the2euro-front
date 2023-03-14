import { CoinStructure } from "../../store/features/coins/types";
import CoinCardStyled from "./CoinCardStyled";

interface CoinProps {
  coin: CoinStructure;
}

const CoinCard = ({ coin }: CoinProps): JSX.Element => {
  return (
    <CoinCardStyled>
      <img
        src={coin.image}
        alt={coin.description}
        height={120}
        width={120}
        className="card__image"
      />
      <div className="card__details">
        <span className="card__country">{coin.country}</span>
        <span className="card__year">Year: {coin.year}</span>
      </div>
    </CoinCardStyled>
  );
};

export default CoinCard;
