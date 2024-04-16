import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../redux/actions/user.actions";

export default function EditForm({ setIsEditing }) {
  const dispatch = useDispatch();
  const { userName, lastName, firstName } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    setNewUserName(userName || "");
  }, [userName]);

  const handleCancel = () => {
    setIsEditing(false);
    setNewUserName("");
  };

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
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="newUserName"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">First Name</label>
          <input type="text" id="firstName" value={firstName} disabled={true} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Last Name</label>
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
