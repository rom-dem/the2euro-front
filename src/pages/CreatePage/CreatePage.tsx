import { Navigate } from "react-router-dom";
import CreateForm from "../../components/CreateForm/CreateForm";
import endpoints from "../../routers/endpoints";
import { useAppSelector } from "../../store/hooks";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return !isLogged ? (
    <Navigate to={endpoints.login} replace={true} />
  ) : (
    <CreatePageStyled>
      <h1 className="page__title">Add a new coin</h1>
      <CreateForm />
    </CreatePageStyled>
  );
};

export default CreatePage;
