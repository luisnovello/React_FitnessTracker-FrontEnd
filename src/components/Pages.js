import { Route } from "react-router-dom";
import "./Pages.css";
import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  ROUTINES_ROUTE,
  MY_ROUTINES_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  CREATE_ACTIVITY,
} from "../constants";

import Login from "./Login";
import Register from "./Register";
import MyRoutines from "./MyRoutines";
import Routines from "./Routines";
import CreateActivityForm from "./CreateActivity";

const Pages = () => {
  return (
    <div className="pages">
      <Route path={HOME_ROUTE}>
        <h1>Home Page</h1>
      </Route>
      <Route path={ROUTINES_ROUTE}>
        <Routines />
      </Route>
      <Route path={MY_ROUTINES_ROUTE}>
        <MyRoutines />
      </Route>
      <Route path={ACTIVITIES_ROUTE}>
        <h1>Activities Page</h1>
      </Route>
      <Route path={CREATE_ACTIVITY}>
        <CreateActivityForm />
        {/* <h1> Create Activity</h1> */}
      </Route>

      <Route path={LOGIN_ROUTE}>
        <Login />
        {/* {JSON.parse(localStorage.getItem("token")) ? (
          <Redirect to={<MyRoutines />} />
        ) : (
          <Login />
        )} */}
      </Route>
      <Route path={REGISTER_ROUTE}>
        <Register />
        {/* {JSON.parse(localStorage.getItem("token")) ? (
          <Redirect to={<MyRoutines />} />
        ) : (
          <Register />
        )} */}
      </Route>
    </div>
  );
};

export default Pages;
