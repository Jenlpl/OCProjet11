import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/auth.actions";
import { useNavigate } from "react-router-dom";

export default function SignIn({ updateHeaderState }) {
  const [credentials, setCredentials] = useState({ email: "", password: "", remember: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector(store => store.auth);

    // Fonction pour gérer le changement des champs du formulaire
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

    // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

    // Hook useEffect pour rediriger l'utilisateur lorsqu'il est authentifié
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user");
    }
  }, [isAuthenticated])

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={credentials.remember} onChange={() => { 
              setCredentials(previous => ({ ...previous, remember: !previous.remember})) 
              }}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <p className="bad-email">Invalid email or password.</p>}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
