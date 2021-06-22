import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";

const Activites = () => {
  const [allActivies, setAllActivites] = useState([]);

  const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

  const activitiesFetch = async () => {
    const url = `${BASE_URL}/activities`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = response;
      console.log(data);
      setAllActivites(data);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await activitiesFetch();
  }, []);

  return (
    <div className="card-container">
      {allActivies.map((activity) => {
        return (
          <div className="card" key={activity.id}>
            <div>ID:{activity.id}</div>
            <div>Name:{activity.name}</div>
            <div>Description:{activity.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Activites;
