import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "../styles/StyledNav";
import AuthService from "../services/auth.service";
import logo from "../images/icon.svg";
const Nav = () => {
  const logOut = () => {
    AuthService.logout();
  };

  /* const [Connexion, setConnexion] = usestate(false)
const [profile, setProfile] = usestate(false)
const [accueil, setAccueil] = usestate(false)
const [publication, setPublication] = usestate(false)
const [inscription, setInscription] = usestate(false)
const [deconnexion, setDeconnexion] = usestate(false) */

  return (
    <StyledNav>
      <div className="logo">
        <img src={logo} alt="logo groupomania" />
        <h1>
          <Link to="/">Groupomania</Link>
        </h1>
      </div>

      <ul>
        <li>
          <Link to="/">Connexion</Link>
        </li>
        <li>
          <Link to="/manageprofile">Profil</Link>
        </li>
        <li>
          <Link to="/dashboard">Accueil</Link>
        </li>
        <li>
          <Link to="/createpost">Publication</Link>
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
