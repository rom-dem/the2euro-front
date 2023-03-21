import { lazy } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CincDuros } from "../../assets/icons/cincDuros.svg";
import Button from "../../components/Button/Button";
import endpoints from "../../routers/endpoints";

const NotFoundPageStyled = lazy(() => import("./NotFoundPageStyled"));

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <h1 className="title">Page not found</h1>
      <CincDuros />
      <Link to={endpoints.slash}>
        <Button buttonName="home" text="Back to home" />
      </Link>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
