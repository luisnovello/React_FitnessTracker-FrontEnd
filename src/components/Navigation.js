import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  MY_ROUTINES_ROUTE,
  ROUTINES_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
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

  return (
    <>
      <AppBar>
        <Toolbar>
          {authenticated && (
            <>
              <Link to={HOME_ROUTE}>Home</Link>
              <Link to={ROUTINES_ROUTE}>Routines</Link>
              <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
              <Link to={ACTIVITIES_ROUTE}>Activities</Link>
              <Link to={CREATE_ACTIVITY}>
                <button>Create Activity</button>
              </Link>
            </>
          )}
          <div>
            <Link to={LOGIN_ROUTE}>
              <button>Login</button>
            </Link>
            <Link to={REGISTER_ROUTE}>
              <button>Register</button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
