import React, { useState } from "react"; // Import React and useState
import { useDispatch, useSelector } from "react-redux";
import { fetchupdateUserName } from "../../redux/actions/user.actions";

export default function EditForm({ setIsEditing }) {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  const authToken = useSelector((state) => state.auth.token);
  const [newUserName, setNewUserName] = useState("");

  const handleUpdateUserName = async () => {
    if (newUserName) {
      dispatch(
        fetchupdateUserName(
          authToken || localStorage.getItem("token"),
          newUserName
        )
      );
      setIsEditing(false);
      setNewUserName("");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewUserName("");
  };

  return (
    <div className="edit-form">
      <h2> Edit User Name</h2>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="newUserName"
            placeholder={userProfile.userName}
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">First Name</label>
          <input
            type="text"
            id="firstName"
            value={userProfile.firstName}
            disabled
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={userProfile.lastName}
            disabled
          />
        </div>
        <div className="buttons-form">
          <button className="button" onClick={handleUpdateUserName}>Save</button>
          <button className="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
