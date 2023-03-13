import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled>
      <NavLink to="/" title="home">
        <FontAwesomeIcon name="home" icon={regular("building")} />
      </NavLink>

      <NavLink to="/my-coins" title="my coins">
        <FontAwesomeIcon
          aria-label=""
          name="my-coins"
          icon={regular("bookmark")}
        />
      </NavLink>

      <NavLink to="/login" title="login">
        <FontAwesomeIcon icon={regular("user")} />
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
