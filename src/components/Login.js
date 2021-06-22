import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const loginUser = async () => {
    const url = `${BASE_URL}/users/login`;
    try {
      const response = await axios.post(url, {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      console.error(error);
    }
  };

  const onLoginSubmit = (event) => {
    event.preventDefault();
    loginUser();
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={onLoginSubmit}>
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
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default Login;
