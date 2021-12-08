import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Homepage from './Homepage';
import CompaniesList from './companies/CompaniesList';
import CompanyDetail from './companies/CompanyDetail';
import JobsList from './JobsList';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';
import EditProfileForm from './EditProfileForm';


function Routes({login, signup}) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/companies">
        <CompaniesList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobsList />
      </Route>
      <Route exact path="/login">
        <LoginForm login={login}/>
      </Route>
      <Route exact path="/signup">
        <SignupForm signup={signup}/>
      </Route>
      <Route exact path="/profile">
        <EditProfileForm />
      </Route>
    </Switch>
  );
}

export default Routes;