import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";

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

  return (
    <div className="card-container">
      {!myRoutines ? (
        <h1>Create a Routine</h1>
      ) : (
        myRoutines.map((routine) => {
          return (
            <div className="card" key={routine.id}>
              <div>
                <div>Routine: {routine.name}</div>
                <div>Goal: {routine.goal}</div>
                <div>Creator: {routine.creatorName}</div>
                <div>Is Public:{routine.isPublic}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyRoutines;
