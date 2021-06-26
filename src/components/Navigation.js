import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Navigation.css";

import {
  ACTIVITIES_ROUTE,
  MY_ROUTINES_ROUTE,
  ROUTINES_ROUTE,
  CREATE_ROUTINE,
  CREATE_ACTIVITY,
} from "../constants";

const Navigation = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  // console.log(authenticated);

  return (
    <>
      {authenticated ? (
        <div className="toolbar">
          <Link to={ROUTINES_ROUTE}>Routines</Link>
          <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
          <Link to={ACTIVITIES_ROUTE}>Activities</Link>
          <Link to={CREATE_ROUTINE}>Create Routine</Link>
          <Link to={CREATE_ACTIVITY}>Create Activity</Link>
        </div>
      ) : (
        <div className="toolbar">Login to Continue</div>
      )}
    </>
  );
};

export default Navigation;
