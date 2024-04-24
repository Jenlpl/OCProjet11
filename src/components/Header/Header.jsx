import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from "../../redux/actions/user.actions";
import { logoutUser } from '../../redux/reducers/auth.reducers';

export default function Header() {
   const dispatch = useDispatch();       // Hook useDispatch pour envoyer des actions
  const { userName } = useSelector((state) => state.user);       // Hook useSelector pour accéder à l'état user depuis le store redux
  const { token, isAuthenticated } = useSelector((state) => state.auth);          // Hook useSelector pour accéder à l'état auth depuis le store redux


    // Hook useEffect pour récupérer le profil de l'utilisateur lorsque token ou isAuthenticated change
  useEffect(() => {
        // Dispatch fetchProfile lorsqu'un changement est détecté dans token ou isAuthenticated
    if (isAuthenticated)
    dispatch(fetchProfile(token));
  }, [token, isAuthenticated]);

    // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    dispatch(logoutUser())
  };

  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" className='nav-link'>
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          {isAuthenticated ? (
            <div className='signout-nav'>
              <NavLink to="/user" className="nav-link">
                <FontAwesomeIcon icon={faUserCircle} />
                {userName}
              </NavLink>
              <NavLink to="/sign-in" onClick={handleLogout} className="nav-link">
                <FontAwesomeIcon icon={faRightFromBracket} />
                Sign Out
              </NavLink>
            </div>
          ) : (
            <NavLink to="/sign-in" className="nav-link">
              <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
