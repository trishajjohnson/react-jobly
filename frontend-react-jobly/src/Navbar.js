import React, { useContext } from "react";
import currentUserContext from "./currentUserContext";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar({logout}) {
  const { currentUser } = useContext(currentUserContext);
  console.log("currentUser in navbar", currentUser);
  
  function loggedIn() {
    return (
      <>
        {/* <li className="nav-item mr-4"> */}
          <NavLink className="nav-item nav-link" to="/companies">Companies</NavLink>
        {/* </li> */}
        {/* <li className="nav-item mr-4"> */}
          <NavLink className="nav-item nav-link" to="/jobs">Jobs</NavLink>
        {/* </li> */}
        {/* <li className="nav-item mr-4"> */}
          <NavLink className="nave-item nav-link" to="/profile">Profile</NavLink>
        {/* </li>   */}
        {/* <li className="nav-item mr-4"> */}
          <Link className="nav-item nav-link" to="/" onClick={logout}>Logout {currentUser.firstName}</Link>
        {/* </li>     */}
      </>
    );
  }

  function loggedOut() {  
    return (
      <>
        <div className="nav-item mr-4">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </div>
        <div className="nav-item mr-4">
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </div>        
      </>
    );
  }


  return (

    <div className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
      <Link className="navbar-brand  m-3 h1" to="/">Jobly</Link>
      <div className="navbar-nav xtra-margin">
        {currentUser ? loggedIn() : loggedOut()}
      </div>
    </div>
  );
}

export default Navbar;