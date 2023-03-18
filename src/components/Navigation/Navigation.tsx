import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import endpoints from "../../routers/endpoints";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled>
      <NavLink to={endpoints.home} title="home">
        <FontAwesomeIcon name="home" icon={regular("building")} />
      </NavLink>

      <NavLink to={endpoints.create} title="create">
        <FontAwesomeIcon aria-label="" name="create" icon={solid("plus")} />
      </NavLink>

      <NavLink to={endpoints.login} title="login">
        <FontAwesomeIcon icon={regular("user")} />
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
