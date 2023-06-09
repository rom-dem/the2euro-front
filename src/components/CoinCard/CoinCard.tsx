import * as React from "react";
import AfterImage from "afterimage";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import endpoints from "../../routers/endpoints";
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
        <Link to={`${endpoints.coin}${endpoints.slash}${coin.id}`}>
          <AfterImage
            src={coin.image}
            alt={coin.description}
            height={120}
            width={120}
            aspectHeight={1}
            aspectWidth={1}
            className="card__image"
          />
        </Link>
      </div>
      <div className="card__details">
        <Link to={`${endpoints.coin}${endpoints.slash}${coin.id}`}>
          <h2 className="card__country">{coin.country}</h2>
          <span className="card__year">Year: {coin.year}</span>
        </Link>
      </div>
      {userId === coin.owner && (
        <div className="card__buttons">
          <span>
            <Button
              icon={deleteButton}
              isDisabled={false}
              onClick={handleDelete}
              buttonName={"delete coin"}
            />
          </span>
          <span>
            <Button
              icon={editButton}
              isDisabled={true}
              buttonName={"edit coin"}
            />
          </span>
        </div>
      )}
    </CoinCardStyled>
  );
};

export default CoinCard;
