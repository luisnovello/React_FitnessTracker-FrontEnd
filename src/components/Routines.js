import axios from "axios";
import { useEffect, useState } from "react";
import "./Card.css";

const Routines = () => {
  const [allRoutines, setAllRoutines] = useState([]);

  const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

  const routinesFetch = async () => {
    const url = `${BASE_URL}/routines`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = response;
      setAllRoutines(data);
    } catch (error) {
      console.error(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await routinesFetch();
  }, []);

  return (
    <div className="card-container">
      {!allRoutines ? (
        <h1>No Routines Found</h1>
      ) : (
        allRoutines.map((routine) => {
          return (
            <div className="card" key={routine.id}>
              <div>
                <div>ID:{routine.id}</div>
                <div>Name:{routine.name}</div>
                <div>Creator Name:{routine.creatorName}</div>
                <div>Goal:{routine.goal}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Routines;
