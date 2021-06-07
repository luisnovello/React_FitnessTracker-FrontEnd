import axios from "axios";
import { useEffect, useState } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
} from "@material-ui/core";

const Routines = () => {
  const [allRoutines, setAllRoutines] = useState([]);

  const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

  const routinesFetch = async () => {
    const url = `${BASE_URL}/routines`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = response;

    console.log(data);
    setAllRoutines(data);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await routinesFetch();
  });

  return (
    <>
      {!allRoutines ? (
        <h1>No Routines Found</h1>
      ) : (
        allRoutines.map((routine) => {
          return (
            <Card className="card" key={routine.id}>
              <CardHeader>
                <div>ID:{routine.id}</div>
                <div>Name:{routine.name}</div>
                <div>Creator Name:{routine.creatorName}</div>
              </CardHeader>
              <CardContent>
                <div>Goal:{routine}</div>
              </CardContent>
              <div></div>
            </Card>
          );
        })
      )}
    </>
  );
};

export default Routines;
