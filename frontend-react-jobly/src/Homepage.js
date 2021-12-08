import React, { useContext } from "react";
import currentUserContext from "./currentUserContext";

function Homepage() {
  const { currentUser } = useContext(currentUserContext);

  function loggedIn() {
    if(currentUser) {
      return (
        <div>
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          <h2>Welcome Back, {currentUser.firstName}!</h2>
        </div>
      );
    }
  }

  function loggedOut() {
    return (
      <div>
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          <div>
            <button>Log in</button>
            <button>Sign up</button>
          </div>
        </div>
    )
  }


  return (
    <div>
        <h1>Welcome to Jobly!</h1>
    </div>
  );
}

export default Homepage;