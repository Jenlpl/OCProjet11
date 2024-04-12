import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from "../../redux/actions/user.actions";

export default function Header({ isUserConnected, updateHeaderState }) {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile); // Use useSelector to access userProfile state
  const userFirstName = userProfile?.firstName;
  const tokenSelector = useSelector((state) => state.auth.token);
  const [token, setToken] = useState(tokenSelector || "");

  useEffect(
    () => {
      setToken(tokenSelector || localStorage.getItem("token") || "");
    },
    [tokenSelector],
    []
  );
  useEffect(() => {
    if (token) {
      dispatch(fetchProfile(token));
    }
  }, [token],[dispatch],[]);

  

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
                {userFirstName}
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
