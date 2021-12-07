import React, { useState } from "react";

import { useHistory } from 'react-router-dom';

function SignupForm({signup}) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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
    let res = await signup(formData);

    if(res.success) {
        history.push('/companies');
    } else {
        setFormErrors(res.errors);
    }
  };

  return (
    <div>
      <h1>Sign Up </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={formData.username}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            value={formData.password}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            type="firstName"
            name="firstName"
            id="firstName"
            value={formData.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleChange}
            type="lastName"
            name="lastName"
            id="lastName"
            value={formData.lastName}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={formData.email}
          />
        </div>

        {/* {formErrors.length
            ? <Alert type="danger" messages={formErrors} />
            : null} */}

        <button id="signupBtn">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;