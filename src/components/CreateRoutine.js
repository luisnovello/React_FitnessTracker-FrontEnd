import axios from "axios";
import { useState } from "react";
import "./Home.css";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const CreateRoutineForm = () => {
  const [name, setName] = useState();
  const [goal, setGoal] = useState();
  const [checked, setChecked] = useState(true);

  const createRoutine = async () => {
    const myToken = JSON.parse(localStorage.getItem("token"));

    const routineBody = {
      name,
      goal,
      checked,
    };

    const url = `${BASE_URL}/routines`;

    try {
      const response = await axios.post(url, routineBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myToken}`,
        },
        data: {
          name,
          goal,
          checked,
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setChecked(event.target.checked);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    createRoutine();
  };

  return (
    <div className="create-routine">
      <div className="routine">
        <form className="form-container" onSubmit={onFormSubmit}>
          <label for="routine-name">Routine Name:</label>
          <input
            type="text"
            id="routine-name"
            placeholder="Routine"
            onInput={(event) => {
              setName(event.target.value);
            }}
            required
          />{" "}
          <br />
          <label for="routine-goal">Activity Description</label>
          <input
            type="text"
            id="routine-goal"
            placeholder="Goal"
            onInput={(event) => {
              setGoal(event.target.value);
            }}
            required
          />
          <br />
          <div>Make it Public?</div>
          <input
            type="checkbox"
            id="isPublic"
            checked={checked}
            onChange={handleChange}
          />{" "}
          <button type="submit">Create Routine</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoutineForm;
