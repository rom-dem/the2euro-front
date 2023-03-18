import CreateForm from "../../components/CreateForm/CreateForm";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = (): JSX.Element => {
  return (
    <CreatePageStyled>
      <h1 className="page__title">Add a new coin</h1>
      <CreateForm />
    </CreatePageStyled>
  );
};

export default CreatePage;
