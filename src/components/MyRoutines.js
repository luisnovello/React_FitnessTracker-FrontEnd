import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const myUsernameFetch = async (myToken) => {
  const url = `${BASE_URL}/users/me`;
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    });
    const {
      data: { username },
    } = response;
    return username;
  } catch (err) {
    console.error(err);
  }
};

const myRoutinesFetch = async (username, myToken) => {
  const url = `${BASE_URL}/users/${username}/routines`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    });
    const { data } = response;
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const MyRoutines = () => {
  let myUsername;
  const [myRoutines, setMyRoutines] = useState([]);
  const [editMode, setEditMode] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const myToken = JSON.parse(localStorage.getItem("token"));
    if (myToken) {
      myUsername = await myUsernameFetch(myToken);
      const routines = await myRoutinesFetch(myUsername, myToken);
      console.log(routines);
      setMyRoutines(routines);
    }
  }, []);

  const onEdit = () => {
    setEditMode(true);
  };

  const onSave = (id) => {
    setEditMode(false);
    console.log(id);
  };

  return (
    <>
      {!myRoutines ? (
        <h1>Create a Routine</h1>
      ) : (
        myRoutines.map((routine) => {
          return (
            <Card className="card" key={routine.id}>
              <CardHeader></CardHeader>
              <CardContent key={routine.id}>
                <div>ID:{routine.id}</div>
                <div>Name:{routine.name}</div>
                <div>Goal:{routine}</div>
                <div>Creator Name:{routine.creatorName}</div>
                <div>Is Public:{routine.isPublic}</div>
              </CardContent>
              <div>
                <CardActions>
                  <Button size="small">Edit</Button>
                  <Button size="small">Delete</Button>
                </CardActions>
              </div>
            </Card>
          );
        })
      )}
    </>
  );
};

export default MyRoutines;
