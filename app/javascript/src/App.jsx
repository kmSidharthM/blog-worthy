import React from "react";

import { either, isEmpty, isNil } from "ramda";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Login from "components/Authentication/Login";
import Signup from "components/Authentication/Signup";
import PrivateRoute from "components/commons/PrivateRoute";
import Home from "components/Dashboard/Home";
import { getFromLocalStorage } from "components/utils/storage";

const App = () => {
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken);

  return (
    <Router>
      <Switch>
        {/* <Route exact component={Home} path="/" /> */}
        <Route exact component={Signup} path="/signup" />
        <Route exact component={Login} path="/login" />
        <PrivateRoute
          component={Home}
          condition={isLoggedIn}
          path="/"
          redirectRoute="/login"
        />
      </Switch>
    </Router>
  );
};

export default App;
