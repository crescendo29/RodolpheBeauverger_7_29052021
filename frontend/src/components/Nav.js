import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledNav from "../styles/StyledNav";
const Nav = () => {
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
          <Link to="/post">Déconnexion</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
