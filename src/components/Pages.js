import { Route } from "react-router-dom";
import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  ROUTINES_ROUTE,
  MY_ROUTINES_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "../constants";

import Login from "./Login";

const Pages = (props) => {
  const { setUserLogin } = props;
  return (
    <>
      <Route path={HOME_ROUTE}>
        <h1>Home Page</h1>
      </Route>
      <Route path={ROUTINES_ROUTE}>
        <h1>Routines Page</h1>
      </Route>
      <Route path={MY_ROUTINES_ROUTE}>
        <h1>My Routines Page</h1>
      </Route>
      <Route path={ACTIVITIES_ROUTE}>
        <h1>Activities Page</h1>
      </Route>
      <Route path={LOGIN_ROUTE}>
        <Login />
      </Route>
      <Route path={REGISTER_ROUTE}>
        <h1>Register</h1>
      </Route>
    </>
  );
};

export default Pages;
