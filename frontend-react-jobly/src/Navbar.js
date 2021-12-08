import React, { useContext } from "react";
import currentUserContext from "./currentUserContext";
// import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar({logout}) {
  const { currentUser } = useContext(currentUserContext);
  console.log("currentUser in navbar", currentUser);
  
  function loggedIn() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/companies">Companies</NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>  
        <li className="nav-item mr-4">
          <Link className="nav-link" to="/" onClick={logout}>Logout {currentUser.firstName}</Link>
        </li>    
      </ul>
    );
  }

  function loggedOut() {  
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </li>        
      </ul>
    );
  }


  return (

    <div className="navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">Jobly</Link>
      {currentUser ? loggedIn() : loggedOut()}
    </div>
  );
}

export default Navbar;