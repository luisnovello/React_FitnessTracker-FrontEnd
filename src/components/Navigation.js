import { Link } from "react-router-dom";

import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  MY_ROUTINES_ROUTE,
  ROUTINES_ROUTE,
} from "../constants";

const Navigation = () => {
  return (
    <>
      <Link to={HOME_ROUTE}>Home</Link>
      <Link to={ROUTINES_ROUTE}>Routines</Link>
      <Link to={MY_ROUTINES_ROUTE}>My Routines</Link>
      <Link to={ACTIVITIES_ROUTE}>Activities</Link>
    </>
  );
};

export default Navigation;
