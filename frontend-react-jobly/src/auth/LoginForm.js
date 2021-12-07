import React, { useState } from "react";

import { useHistory } from 'react-router-dom';

function LoginForm({login}) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    let res = await login(formData);

    if(res.success) {
        history.push('/companies');
    } else {
        setFormErrors(res.errors);
    }
  };

  return (
    <div>
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

        {/* {formErrors.length
            ? <Alert type="danger" messages={formErrors} />
            : null} */}

        <button id="loginBtn">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
