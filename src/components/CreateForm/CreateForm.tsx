import Button from "../Button/Button";
import CreateFormStyled from "./CreateFormStyled";

const CreateForm = (): JSX.Element => {
  return (
    <CreateFormStyled className="form">
      <div className="form__pill">
        <label className="form__label">
          Country
          <select className="form__input" name="country" aria-label="country">
            <option value="andorra">Andorra</option>
            <option value="austria">Austria</option>
            <option value="belgium">Belgium</option>
            <option value="cyprus">Cyprus</option>
            <option value="croatia">Croatia</option>
            <option value="estonia">Estonia</option>
            <option value="finland">Finland</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
            <option value="greece">Greece</option>
            <option value="ireland">Ireland</option>
            <option value="italy">Italy</option>
            <option value="latvia">Latvia</option>
            <option value="lithuania">Lithuania</option>
            <option value="malta">Malta</option>
            <option value="monaco">Monaco</option>
            <option value="netherlands">Netherlands</option>
            <option value="portugal">Portugal</option>
            <option value="san-marino">San Marino</option>
            <option value="slovakia">Slovakia</option>
            <option value="slovenia">Slovenia</option>
            <option value="spain">Spain</option>
            <option value="vatican-city">Vatican City</option>
          </select>
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Year
          <select className="form__input" name="year" aria-label="year">
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2525">2525</option>
          </select>
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Issuing volume
          <input
            className="form__input"
            type="number"
            name="issuing volume"
            aria-label="issuing volume"
          />
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Coin image
          <input
            className="form__input"
            type="url"
            name="url"
            aria-label="coin image url"
          />
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Feature
          <input
            className="form__input"
            type="text"
            name="short description"
            aria-label="short description"
          />
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Description
          <textarea
            className="form__input"
            name="short description"
            aria-label="short description"
          />
        </label>
      </div>

      <Button text={"Add new coin"} />
    </CreateFormStyled>
  );
};

export default CreateForm;
