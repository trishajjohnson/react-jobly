import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./Navbar";
import JoblyApi from "./api";
import './App.css';
import jwt from "jsonwebtoken";
import LoadingSpinner from "./LoadingSpinner";
import currentUserContext from "./currentUserContext";

const STORE_TOKEN_ID = "token-id";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const initialVal = localStorage.getItem(STORE_TOKEN_ID) || null;
  const [token, setToken] = useState(initialVal);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  console.log("app ids", applicationIds);
  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch(e) {
          console.log(e);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true)
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token])

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      localStorage.setItem(STORE_TOKEN_ID, token);
      setToken(localStorage.getItem(STORE_TOKEN_ID));
      return { success: true };
    } catch(e) {
      console.log("Errors: ", e);
      return { success: false, e }
    }
  }

  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      localStorage.setItem(STORE_TOKEN_ID, token);
      setToken(localStorage.getItem(STORE_TOKEN_ID));
      return { success: true };
    } catch(e) {
      console.log("Errors: ", e);
    }
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem(STORE_TOKEN_ID);
    setToken(null);
  }

  function hasApplied(jobId) {
    return applicationIds.has(jobId);
  }

  function applyToJob(jobId) {
    if(hasApplied(jobId)) return;
    JoblyApi.applyToJob(currentUser.username, jobId);
    setApplicationIds(new Set([...applicationIds, jobId]));
  }

  if(!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <currentUserContext.Provider value={{currentUser, setCurrentUser, applyToJob, hasApplied }}>
        <div className="App">
          <Navbar logout={logout} />
          <Routes signup={signup} login={login} /> 
        </div>
      </currentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
