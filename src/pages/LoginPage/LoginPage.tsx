import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import endpoints from "../../routers/endpoints";
import { useAppSelector } from "../../store/hooks";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return isLogged ? (
    <Navigate to={endpoints.home} replace={true} />
  ) : (
    <LoginPageStyled>
      <div className="login-page__logo">
        <svg
          width="33"
          height="46"
          viewBox="0 0 33 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.3393 38.4758C31.2073 37.8098 30.5523 37.3837 29.8905 37.5347C28.8165 37.7797 27.136 38.0784 25.3276 38.0784C19.626 38.0784 15.0892 34.5839 13.1273 29.4954H24.5469C24.8207 29.4954 25.0863 29.4022 25.3 29.2311C25.5138 29.0601 25.6629 28.8214 25.7229 28.5543L26.3631 25.7056C26.5324 24.9521 25.9594 24.236 25.1871 24.236H11.7034C11.5819 22.7968 11.5614 21.3947 11.7172 19.9926H26.4419C26.7169 19.9926 26.9835 19.8987 27.1977 19.7263C27.4119 19.554 27.5607 19.3136 27.6195 19.045L28.2736 16.0562C28.4381 15.3045 27.8657 14.5931 27.0961 14.5931H13.2065C15.279 10.0739 19.5035 7.05664 25.0209 7.05664C26.476 7.05664 27.8901 7.28264 28.8229 7.47299C29.4473 7.60035 30.0631 7.22207 30.2294 6.60684L31.4338 2.15023C31.6168 1.47312 31.1862 0.782551 30.4971 0.65187C29.2813 0.421345 27.3219 0.128845 25.2049 0.128845C15.4432 0.128845 7.56605 6.18094 4.65763 14.5931H1.33536C0.669704 14.5931 0.130005 15.1328 0.130005 15.7985V18.7873C0.130005 19.4529 0.669704 19.9926 1.33536 19.9926H3.50189C3.40054 21.3594 3.38326 22.9344 3.48371 24.236H1.33536C0.669704 24.236 0.130005 24.7757 0.130005 25.4413V28.29C0.130005 28.9557 0.669704 29.4954 1.33536 29.4954H4.36021C6.87388 38.5689 14.7213 45.1288 25.2049 45.1288C27.8468 45.1288 30.0828 44.6724 31.3423 44.3466C31.9618 44.1864 32.3495 43.5723 32.225 42.9446L31.3393 38.4758Z"
            fill="#303030"
          />
        </svg>
      </div>

      <h2 className="login-page__title">Welcome back</h2>
      <LoginForm />
      <div className="login-page__register register">
        <span className="login-page__register register__question">
          Need an account?
        </span>
        <a
          className="login-page__register register__link"
          href={endpoints.home}
        >
          Register
        </a>
      </div>
    </LoginPageStyled>
  );
};

export default LoginPage;
