import React, { useContext } from "react";
import currentUserContext from "./currentUserContext";
// import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar({logout}) {
  const { currentUser } = useContext(currentUserContext);
  console.log("currentUser", currentUser);
  
  return (
    
    <div className="navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">Jobly</Link>
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
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </li>    
        <li className="nav-item mr-4">
          <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
        </li>    
      </ul>
    </div>
  );
}

export default Navbar;