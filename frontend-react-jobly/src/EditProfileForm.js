import React, { useState, useContext } from "react";
import currentUserContext from "./currentUserContext";
import JoblyApi from './api';

function EditProfileForm() {
  const { currentUser, setCurrentUser } = useContext(currentUserContext);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: ""
  });

  const [formErrors, setFormErrors] = useState([]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
    };

    let username = formData.username;
    let updateUser;

    try {
        updateUser = await JoblyApi.updateProfile(username, profileData);
    } catch(e) {
        console.log(e);
        setFormErrors(e);
    }
    // setFormData(formData => ({...formData, password: ""}));
    setCurrentUser(updateUser);
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <p>{formData.username}</p>
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            value={formData.firstName}
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={formData.lastName}
            id="lastName"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={formData.email}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Confirm password to make changes:</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            value={formData.password}
          />
        </div>

        {/* {formErrors.length
            ? <Alert type="danger" messages={formErrors} />
            : null} */}

        <button id="UpdateProfileBtn">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfileForm;
