import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import endpoints from "../../routers/endpoints";
import { CoinStructure } from "../../store/features/coins/types";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CoinCardDetailStyled from "./CoinCardDetailStyled";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";

interface CoinProps {
  coin: CoinStructure;
  deleteButton?: JSX.Element;
  editButton?: JSX.Element;
  buttonName?: string;
  buttonText?: string;
}

const CoinCardDetail = ({ coin }: CoinProps): JSX.Element => {
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
        <h2 className="card__country">
          {coin.country}, {coin.year}
        </h2>
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
        <div className="card__buttons">
          <Link to={`${endpoints.slash}`}>
            <Button
              icon={<DeleteIcon />}
              text={"Delete coin"}
              isDisabled={false}
              onClick={handleDelete}
              buttonName={"delete coin"}
            />
          </Link>
          <Button
            icon={<EditIcon />}
            text={"Edit this coin"}
            isDisabled={false}
            buttonName={"edit coin"}
          />
        </div>
      )}
    </CoinCardDetailStyled>
  );
};

export default CoinCardDetail;
