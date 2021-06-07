import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const registerUser = async () => {
    const url = `${BASE_URL}/users/register`;
    try {
      const response = await axios.post(url, {
        username,
        password,
      });
      const { token } = response.data;

      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      debugger;
      throw error;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    registerUser();
  };
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={onFormSubmit}>
        <TextField
          id="Username"
          label="Username"
          onInput={(event) => {
            setUsername(event.target.value);
          }}
        />
        <TextField
          id="Password"
          label="Password"
          type="password"
          onInput={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button type="submit">Register</Button>
      </form>
    </>
  );
};

export default Register;
