import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import endpoints from "../../routers/endpoints";
import { CoinStructure } from "../../store/features/coins/types";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CoinCardDetailStyled from "./CoinCardDetailStyled";

interface CoinProps {
  coin: CoinStructure;
  deleteButton?: JSX.Element;
  buttonName?: string;
}

const CoinCardDetail = ({ coin, deleteButton }: CoinProps): JSX.Element => {
  const userId = useAppSelector((state) => state.user.id);

  const { deleteCoinById } = useApi();

  const handleDelete = () => {
    deleteCoinById(coin);
  };

  return (
    <CoinCardDetailStyled>
      <div className="card__image-container">
        <img
          src={coin.image}
          alt={coin.description}
          height={320}
          width={320}
          className="card__image"
        />
      </div>
      <div className="card__details">
        <span className="card__year">
          {" "}
          <span className="card__strong">Year: </span>
          {coin.year}
        </span>
        <h2 className="card__country">{coin.country}</h2>
        <span className="card__volume">
          <span className="card__strong">Issuing volume: </span>
          {coin.issuingVolume}
        </span>
        <span className="card__feature">
          <span className="card__strong">Feature: </span>
          {coin.feature}
        </span>
        <span className="card__description">{coin.description}</span>
      </div>
      {userId === coin.owner && (
        <Link to={`${endpoints.slash}`}>
          <div className="card__buttons">
            <Button
              icon={deleteButton}
              isDisabled={false}
              onClick={handleDelete}
              buttonName={"delete coin"}
            />
          </div>
        </Link>
      )}
    </CoinCardDetailStyled>
  );
};

export default CoinCardDetail;
