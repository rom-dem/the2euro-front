import useApi from "../../hooks/useApi/useApi";
import { CoinStructure } from "../../store/features/coins/types";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";

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
    <div>
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
        <span className="card__year">Year: {coin.year}</span>
        <h2 className="card__country">{coin.country}</h2>
        <span className="card__volume">
          Issuing volume: {coin.issuingVolume}
        </span>
        <span className="card__feature">Feature: {coin.feature}</span>
        <span className="card__description">{coin.description}</span>
      </div>
      {userId === coin.owner && (
        <div className="card__buttons">
          <Button
            icon={deleteButton}
            isDisabled={false}
            onClick={handleDelete}
            buttonName={"delete coin"}
          />
        </div>
      )}
    </div>
  );
};

export default CoinCardDetail;
