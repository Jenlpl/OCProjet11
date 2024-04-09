import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import React from 'react';

export default function EditForm() {
    
  
    return (
      <div className="edit-form">
        <h2> Edit User Info</h2>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="newUserName"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">First Name</label>
            <input
              type="text"
              id="firstName"
              disabled
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Last Name</label>
            <input
              type="text"
              id="lastName"
              disabled
            />
          </div>
          <div className="buttons-form">
            <button className="edit-button">Save</button>
            <button className="edit-button">Cancel</button>
          </div>
        </form>
      </div>
    );
  }