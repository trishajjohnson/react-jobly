import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./Navbar";
import JoblyApi from "./api";
import './App.css';
import jwt from "jsonwebtoken";
import LoadingSpinner from "./LoadingSpinner";
import currentUserContext from "./currentUserContext";

export const STORE_TOKEN_ID = "token-id";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(JoblyApi.token);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          console.log("currentUser", currentUser);
        } catch(e) {
          console.log(e);
        }
      }
    }
    setInfoLoaded(true)
    getCurrentUser();
  }, [token])

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { sucess: true };
    } catch(e) {
      console.log("Errors: ", e);
    }
  }

  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { sucess: true };
    } catch(e) {
      console.log("Errors: ", e);
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  // if(!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
        <currentUserContext.Provider value={currentUser}>
          <div className="App">
            <Navbar logout={logout} />
            <Routes signup={signup} login={login} /> 
          </div>
        </currentUserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
