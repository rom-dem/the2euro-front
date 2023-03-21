import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import endpoints from "../../routers/endpoints";
import { useAppSelector } from "../../store/hooks";
import useUser from "../../hooks/useUser/useUser";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as CreateIcon } from "../../assets/icons/create.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";
import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";
import Button from "../Button/Button";

const Navigation = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logoutUser } = useUser();

  window.scrollTo({ top: 0, behavior: "smooth" });

  return isLogged ? (
    <NavigationStyled>
      <NavLink to={endpoints.slash} title="home">
        <Button icon={<HomeIcon />} buttonName="home" />
      </NavLink>

      <NavLink to={endpoints.create} title="create">
        <Button icon={<CreateIcon />} buttonName="create" />
      </NavLink>

      <NavLink to={endpoints.login} onClick={() => logoutUser()} title="logout">
        <Button icon={<LogoutIcon />} buttonName="user" />
      </NavLink>
    </NavigationStyled>
  ) : (
    <NavigationStyled>
      <NavLink to={endpoints.slash} title="home">
        <Button icon={<HomeIcon />} buttonName="home" />
      </NavLink>

      <NavLink to={endpoints.create} title="create">
        <Button icon={<CreateIcon />} buttonName="create" />
      </NavLink>

      <NavLink to={endpoints.login} title="login">
        <Button icon={<LoginIcon />} buttonName="user" />
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
