import { useState } from "react";
import { UserRegisterCredentials } from "../../hooks/useUser/types";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";
import useUser from "../../hooks/useUser/useUser";

const RegisterForm = (): JSX.Element => {
  const initialRegisterUserCredentials: UserRegisterCredentials = {
    email: "",
    password: "",
    username: "",
  };

  const [userRegisterCredentials, setUserRegisterCredentials] = useState(
    initialRegisterUserCredentials
  );

  const { registerUser } = useUser();

  const handleChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegisterCredentials({
      ...userRegisterCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userRegister: UserRegisterCredentials = {
      username: userRegisterCredentials.username,
      email: userRegisterCredentials.email,
      password: userRegisterCredentials.password,
    };

    await registerUser(userRegister);

    setUserRegisterCredentials({ ...initialRegisterUserCredentials });
  };

  const areFieldsEmpty =
    userRegisterCredentials.username === "" ||
    userRegisterCredentials.email === "" ||
    userRegisterCredentials.password === "";

  return (
    <RegisterFormStyled className="form" onSubmit={handleOnSubmit}>
      <div className="form__pill">
        <label className="form__label">
          Name
          <input
            className="form__input"
            type="text"
            aria-label="user name"
            name="username"
            placeholder="Type in your name"
            autoComplete="off"
            onChange={handleChangeUserData}
          />
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Email
          <input
            className="form__input"
            type="email"
            aria-label="email"
            name="email"
            placeholder="Type in your email"
            onChange={handleChangeUserData}
          />
        </label>
      </div>
      <div className="form__pill">
        <label className="form__label">
          Password
          <input
            className="form__input"
            type="password"
            aria-label="password"
            name="password"
            placeholder="Type in your new password"
            autoComplete="current-password"
            onChange={handleChangeUserData}
          />
        </label>
      </div>
      <Button text="Register" isDisabled={areFieldsEmpty} />
    </RegisterFormStyled>
  );
};

export default RegisterForm;
