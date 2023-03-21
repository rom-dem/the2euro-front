import { lazy, useEffect } from "react";
import { useParams } from "react-router";
import CoinCardDetail from "../../components/CoinCardDetail/CoinCardDetail";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";

const DetailPageStyled = lazy(() => import("./DetailPageStyled"));

const DetailPage = (): JSX.Element => {
  const { id } = useParams();
  const { getCoinById } = useApi();
  const { coin } = useAppSelector((state) => state.coins);

  useEffect(() => {
    getCoinById(id!);
  }, [id, getCoinById]);

  return (
    <DetailPageStyled>
      <h1 className="page__title">Coin details</h1>
      <CoinCardDetail coin={coin} />
    </DetailPageStyled>
  );
};

export default DetailPage;
