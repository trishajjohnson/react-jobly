import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Homepage from './Homepage';
import CompaniesList from './CompaniesList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobsList';


function Routes() {
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
    </Switch>
  );
}

export default Routes;