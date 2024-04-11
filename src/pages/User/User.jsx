import React, { useState } from 'react';
import EditForm from '../../components/EditForm/EditForm.jsx';

export default function User() {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isDivHeaderVisible, setIsDivHeaderVisible] = useState(true);

  const handleEditButtonClick = () => {
    setIsEditFormVisible(true);
    setIsDivHeaderVisible(false); // Hide the div header when the edit button is clicked
  };

  return (
    <>
      {isEditFormVisible && <EditForm />}
      <main className="main bg-dark">
        {isDivHeaderVisible && ( // Show the div header only if it's visible
          <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button" onClick={handleEditButtonClick}>Edit Name</button>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  );
}
