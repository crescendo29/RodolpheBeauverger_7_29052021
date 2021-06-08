import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "../styles/StyledNav";
import AuthService from "../services/auth.service";

const Nav = () => {
  const logOut = () => {
    AuthService.logout();
  };

  return (
    <StyledNav>
      <h1>
        <Link to="/">Groupomania</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Connexion</Link>
        </li>
        <li>
          <Link to="/signup">Inscription</Link>
        </li>
        <li>
          <Link to="/" onClick={logOut}>
            Déconnexion
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
