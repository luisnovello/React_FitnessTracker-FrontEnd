import { Link } from "react-router-dom";

import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  MY_ROUTINES_ROUTE,
  ROUTINES_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "../constants";

const Navigation = () => {
  return (
    <>
      <Link to={HOME_ROUTE}>Home</Link>
      <Link to={ROUTINES_ROUTE}>Routines</Link>
      <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
      <Link to={ACTIVITIES_ROUTE}>Activities</Link>
      <div>
        <Link to={LOGIN_ROUTE}>
          <button>Login</button>
        </Link>
        <Link to={REGISTER_ROUTE}>
          <button>Register</button>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
