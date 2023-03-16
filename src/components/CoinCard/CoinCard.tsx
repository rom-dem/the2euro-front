import useApi from "../../hooks/useApi/useApi";
import { CoinStructure } from "../../store/features/coins/types";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CoinCardStyled from "./CoinCardStyled";

interface CoinProps {
  coin: CoinStructure;
  editButton?: JSX.Element;
  deleteButton?: JSX.Element;
  buttonName?: string;
}

const CoinCard = ({
  coin,
  editButton,
  deleteButton,
}: CoinProps): JSX.Element => {
  const userId = useAppSelector((state) => state.user.id);

  const { deleteCoinById } = useApi();

  const handleDelete = () => {
    deleteCoinById(coin);
  };

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
      {userId === coin.owner && (
        <div className="card__buttons">
          <Button
            icon={deleteButton}
            isDisabled={false}
            onClick={handleDelete}
            buttonName={"delete coin"}
          />
          <Button
            icon={editButton}
            isDisabled={false}
            buttonName={"edit coin"}
          />
        </div>
      )}
    </CoinCardStyled>
  );
};

export default CoinCard;
