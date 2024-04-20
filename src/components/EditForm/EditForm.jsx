import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../redux/actions/user.actions";

export default function EditForm({ setIsEditing }) {
    // Hook useDispatch pour envoyer des actions
  const dispatch = useDispatch();
    // Hook useSelector pour accéder à l'état user depuis le store redux
  const { userName, lastName, firstName } = useSelector((state) => state.user);
    // Hook useSelector pour accéder à l'état auth depuis le store redux
  const { token } = useSelector((state) => state.auth);
    // Hook useState pour gérer l'état local du nouveau nom d'utilisateur
  const [newUserName, setNewUserName] = useState("");

    // Hook useEffect pour initialiser le nouveau nom d'utilisateur avec le nom d'utilisateur actuel
  useEffect(() => {
    setNewUserName(userName || "");
  }, [userName]);

    // Fonction pour gérer l'annulation de l'édition
  const handleCancel = () => {
    setIsEditing(false);
    setNewUserName("");
  };

    // Fonction pour gérer la mise à jour du nom d'utilisateur
  const handleUpdateUserName = async () => {
    if (newUserName.trim() && newUserName.trim() !== userName) {
      dispatch(updateUsername({ token, userName: newUserName }));
      setIsEditing(false);
      setNewUserName("");
    }
  };

  return (
    <div className="edit-form">
      <h2> Edit User Name</h2>
      <form onSubmit={handleUpdateUserName}>
        <div className="input-wrapper">
          <label htmlFor="newUserName">User Name</label>
          <input
            type="text"
            id="newUserName"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName} disabled={true} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} disabled={true} />
        </div>
        <div className="buttons-form">
          <button
            type="submit"
            className="button"
            onClick={handleUpdateUserName}
          >
            Save
          </button>
          <button type="submit" className="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
