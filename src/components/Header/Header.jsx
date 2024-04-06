import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const { isAuthenticated } = useSelector(state => state.auth);

  console.log('isAuthenticated:', isAuthenticated);

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
          {isAuthenticated ? (
            <button className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              Sign Out
            </button>
          ) : (
            <NavLink to="/sign-in" className="main-nav-item">
              <button className="main-nav-item">
                <FontAwesomeIcon icon={faUserCircle} />
                Sign In
              </button>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
