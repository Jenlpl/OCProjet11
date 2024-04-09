// Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header({ isUserConnected, firstName, updateHeaderState }) {
  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('jwtToken');
    updateHeaderState(); // Update the header state
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
          {isUserConnected ? (
            <div className='signout-nav'>
              <NavLink to="/user" className="nav-link">
                <FontAwesomeIcon icon={faUserCircle} />
                {firstName} {/* Display user's first name */}
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
