import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to="/sign-in" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
