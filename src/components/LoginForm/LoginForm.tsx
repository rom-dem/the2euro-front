const LoginForm = (): JSX.Element => {
  return (
    <form className="form">
      <div className="form__pill">
        <label className="form__label">
          Email
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Introduce your email adress"
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
            className="form__input"
          />
        </label>
      </div>
      <button>Log in</button>
    </form>
  );
};

export default LoginForm;
