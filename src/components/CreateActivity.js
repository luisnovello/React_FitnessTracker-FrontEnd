import axios from "axios";
import { useState } from "react";
import "./Home.css";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const CreateActivityForm = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const createActivity = async () => {
    const myToken = JSON.parse(localStorage.getItem("token"));

    const activitiesBody = {
      name,
      description,
    };

    const url = `${BASE_URL}/activities`;

    try {
      const response = await axios.post(url, activitiesBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myToken}`,
        },
        data: {
          name,
          description,
        },
      });
      if (response) {
        alert("Activity Created");
      } else {
        alert("Activity Not Created, Try Again");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    createActivity();
    window.location.reload();
  };

  return (
    <div className="create-activity">
      <div className="activity">
        <form className="form-container" onSubmit={onFormSubmit}>
          <label for="act-name">Activity Name:</label>
          <input
            type="text"
            id="act-name"
            placeholder="Activity"
            onInput={(event) => {
              setName(event.target.value);
            }}
            required
          />{" "}
          <br />
          <label for="act-desc">Activity Description</label>
          <input
            type="text"
            id="act-desc"
            placeholder="Description"
            onInput={(event) => {
              setDescription(event.target.value);
            }}
            required
          />
          <br />
          <button type="submit">Create Activity</button>
        </form>
      </div>
    </div>
  );
};

export default CreateActivityForm;
