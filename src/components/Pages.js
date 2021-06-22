import { Route, Switch, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Pages.css";
import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  ROUTINES_ROUTE,
  MY_ROUTINES_ROUTE,
  // LOGIN_ROUTE,
  // REGISTER_ROUTE,
  CREATE_ROUTINE,
  CREATE_ACTIVITY,
} from "../constants";

import MyRoutines from "./MyRoutines";
import Routines from "./Routines";
import CreateRoutineForm from "./CreateRoutine";
import Activites from "./Activities";
import CreateActivityForm from "./CreateActivity";
import Home from "./Home";

const Pages = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <div className="pages">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return authenticated ? (
              <Redirect to={ROUTINES_ROUTE} />
            ) : (
              <Redirect to={HOME_ROUTE} />
            );
          }}
        />
        <Route exact path={HOME_ROUTE}>
          <Home />
        </Route>
        <Route exact path={ROUTINES_ROUTE}>
          <Routines />
        </Route>
        <Route exact path={MY_ROUTINES_ROUTE}>
          <MyRoutines />
        </Route>
        <Route exact path={ACTIVITIES_ROUTE}>
          <Activites />
        </Route>
        <Route exact path={CREATE_ROUTINE}>
          <CreateRoutineForm />
        </Route>
        <Route exact path={CREATE_ACTIVITY}>
          <CreateActivityForm />
        </Route>
      </Switch>
    </div>
  );
};

export default Pages;
