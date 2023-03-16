import { useState } from "react";
import { UserCredentials } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const initialUserCredentials: UserCredentials = { email: "", password: "" };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );
  const { loginUser } = useUser();

  const handleChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userLogin: UserCredentials = {
      email: userCredentials.email,
      password: userCredentials.password,
    };

    await loginUser(userLogin);

    setUserCredentials({ ...initialUserCredentials });
  };

  const areFieldsEmpty =
    userCredentials.email === "" || userCredentials.password === "";

  return (
    <LoginFormStyled className="form" onSubmit={handleOnSubmit}>
      <div className="form__pill">
        <label className="form__label">
          Email
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Introduce your email adress"
            onChange={handleChangeUserData}
            className="form__input"
          />
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Password
          <input
            type="password"
            name="password"
            placeholder="Introduce your password"
            onChange={handleChangeUserData}
            autoComplete="current-password"
            className="form__input"
          />
        </label>
      </div>
      <Button text={"Log in"} isDisabled={areFieldsEmpty} />
    </LoginFormStyled>
  );
};

export default LoginForm;
