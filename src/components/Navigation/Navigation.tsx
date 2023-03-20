import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import endpoints from "../../routers/endpoints";
import { useAppSelector } from "../../store/hooks";
import useUser from "../../hooks/useUser/useUser";

const Navigation = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logoutUser } = useUser();

  return isLogged ? (
    <NavigationStyled>
      <NavLink to={endpoints.slash} title="home">
        <FontAwesomeIcon aria-label="home" icon={regular("building")} />
      </NavLink>

      <NavLink to={endpoints.create} title="create">
        <FontAwesomeIcon aria-label="create" icon={solid("plus")} />
      </NavLink>

      <NavLink to={endpoints.login} onClick={() => logoutUser()} title="logout">
        <FontAwesomeIcon aria-label="user" icon={solid("user-slash")} />
      </NavLink>
    </NavigationStyled>
  ) : (
    <NavigationStyled>
      <NavLink to={endpoints.slash} title="home">
        <FontAwesomeIcon aria-label="home" icon={regular("building")} />
      </NavLink>

      <NavLink to={endpoints.create} title="create">
        <FontAwesomeIcon aria-label="create" icon={solid("plus")} />
      </NavLink>

      <NavLink to={endpoints.login} title="login">
        <FontAwesomeIcon aria-label="user" icon={regular("user")} />
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
