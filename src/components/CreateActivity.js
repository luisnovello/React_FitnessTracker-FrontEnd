import { Button, Checkbox, TextField } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const CreateActivityForm = () => {
  const [name, setName] = useState();
  const [goal, setGoal] = useState();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    event.preventDefault();
    setChecked(event.target.checked);
  };

  const createActivity = async () => {
    const myToken = JSON.parse(localStorage.getItem("token"));

    const url = `${BASE_URL}/activities`;

    try {
      const response = await axios.post(url, {
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

  const onFormSubmit = (event) => {
    event.preventDefault();
    createActivity();
  };

  return (
    <>
      <form className="createActivity" onSubmit={onFormSubmit}>
        <div>
          <TextField
            required
            label="Activity Name"
            onInput={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField
            required
            label="Activity Goal"
            onInput={(event) => {
              setGoal(event.target.value);
            }}
          />
          <Checkbox checked={checked} onChange={handleChange} color="primary" />
        </div>
        <Button type="submit">Create Activity</Button>
      </form>
    </>
  );
};

export default CreateActivityForm;
