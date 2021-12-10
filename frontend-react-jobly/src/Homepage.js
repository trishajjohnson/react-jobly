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
            <a className="btn btn-primary m-2" href="/login">Log in</a>
            <a className="btn btn-primary m-2" href="/signup">Sign up</a>
            
          </div>
        </div>
    )
  }


  return (
    <div>
        {currentUser ? loggedIn() : loggedOut()}
    </div>
  );
}

export default Homepage;