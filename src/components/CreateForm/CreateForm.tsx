import { useState } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CreateFormStyled from "./CreateFormStyled";

const CreateForm = (): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const { createCoin } = useApi();
  const [createCoinData, setCreateCoinData] = useState({
    country: "",
    year: 0,
    issuingVolume: 0,
    feature: "",
    description: "",
    image: "",
    owner: id,
  });

  const handleCreateCoinData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateCoinData({
      ...createCoinData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createCoin(createCoinData);
  };

  const areFieldsEmpty =
    createCoinData.country === "" ||
    createCoinData.description === "" ||
    createCoinData.feature === "" ||
    createCoinData.image === "" ||
    createCoinData.issuingVolume === 0 ||
    createCoinData.year === 0;

  return (
    <CreateFormStyled className="form" onSubmit={onSubmitHandler}>
      <div className="form__pill">
        <label className="form__label">
          Country
          <select
            className="form__input"
            name="country"
            aria-label="country"
            onChange={handleCreateCoinData}
          >
            <option value="">Please choose the issuing country</option>
            <option value="Andorra">Andorra</option>
            <option value="Austria">Austria</option>
            <option value="Belgium">Belgium</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Croatia">Croatia</option>
            <option value="Estonia">Estonia</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="Ireland">Ireland</option>
            <option value="Italy">Italy</option>
            <option value="Latvia">Latvia</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Malta">Malta</option>
            <option value="Monaco">Monaco</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Portugal">Portugal</option>
            <option value="San Marino">San Marino</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Spain">Spain</option>
            <option value="Vatican City">Vatican City</option>
          </select>
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Year
          <select
            className="form__input"
            name="year"
            aria-label="year"
            onChange={handleCreateCoinData}
          >
            <option value="">Please choose the issuing year</option>
            <option value={2004}>2004</option>
            <option value={2005}>2005</option>
            <option value={2006}>2006</option>
            <option value={2007}>2007</option>
            <option value={2008}>2008</option>
            <option value={2009}>2009</option>
            <option value={2010}>2010</option>
            <option value={2011}>2011</option>
            <option value={2012}>2012</option>
            <option value={2013}>2013</option>
            <option value={2014}>2014</option>
            <option value={2015}>2015</option>
            <option value={2016}>2016</option>
            <option value={2017}>2017</option>
            <option value={2018}>2018</option>
            <option value={2019}>2019</option>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
            <option value={2525}>2525</option>
          </select>
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Issuing volume
          <input
            className="form__input"
            type="number"
            name="issuingVolume"
            aria-label="issuing volume"
            placeholder="Type the number of issued coins"
            onChange={handleCreateCoinData}
          />
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Coin image
          <input
            className="form__input"
            type="url"
            name="image"
            aria-label="coin image url"
            placeholder="Type the url of the image"
            onChange={handleCreateCoinData}
          />
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Feature
          <input
            className="form__input"
            type="text"
            name="feature"
            aria-label="short description"
            placeholder="Type a short description"
            onChange={handleCreateCoinData}
          />
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Description
          <textarea
            className="form__input"
            name="description"
            aria-label="short description"
            placeholder="Type a complete description"
            onChange={handleCreateCoinData}
          />
        </label>
      </div>

      <Button text={"Add new coin"} isDisabled={areFieldsEmpty} />
    </CreateFormStyled>
  );
};

export default CreateForm;
