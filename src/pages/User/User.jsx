import React, { useState, useEffect } from 'react';
import EditForm from '../../components/EditForm/EditForm.jsx';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import AccountSection from '../../components/AccountSection/AccountSection.jsx';

export default function User() {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isDivHeaderVisible, setIsDivHeaderVisible] = useState(true);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    // Fonction pour gérer le clic sur le bouton d'édition
  const handleEditButtonClick = () => {
    setIsEditFormVisible(true);
    setIsDivHeaderVisible(false); // Hide the div header when the edit button is clicked
  };

    // Hook useSelector pour accéder au prénom de l'utilisateur depuis le store redux
  const { firstName } = useSelector((state) => state.user);
    // Hook useState pour gérer l'état d'édition
  const [isEditing, setEditing] = useState(false);
  const navigate = useNavigate();

  // Hook useEffect pour rediriger l'utilisateur sur la page de connexion s'il n'est pas authentifié
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in');
    }
  }, [isAuthenticated, navigate]);


  return (
    <>
      {isEditFormVisible && <EditForm setIsEditing={setEditing} />}
      <main className="main bg-dark">
        {isDivHeaderVisible && ( // Show the div header only if it's visible
          <div className="header">
            <h1>Welcome back<br /> {firstName}!</h1>
            <button className="edit-button" onClick={handleEditButtonClick}>Edit Name</button>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <AccountSection
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <AccountSection
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <AccountSection
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </>
  );
}
