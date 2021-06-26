import axios from "axios";
import { useState } from "react";

import "./Home.css";

const Home = () => {
  const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

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

  const onLoginSubmit = async (event) => {
    event.preventDefault();
    await loginUser();
    window.location.reload();
  };

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

  const onRegisterSubmit = async (event) => {
    event.preventDefault();
    await registerUser();
    window.location.reload();
  };

  return (
    <div className="home">
      <div className="login">
        <form
          className="form-container"
          noValidate
          autoComplete="off"
          onSubmit={onLoginSubmit}
        >
          <div className="title">Login</div>

          <label for="username">Username</label>
          <input
            id="username"
            label="Username"
            onInput={(event) => {
              setUsername(event.target.value);
            }}
            required
          />
          <br />
          <label for="password">Password</label>
          <input
            id="password"
            label="Password"
            type="password"
            onInput={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="register">
        <form
          className="form-container"
          noValidate
          autoComplete="off"
          onSubmit={onRegisterSubmit}
        >
          <div className="title">Register</div>
          <label for="username">Username</label>
          <input
            id="username"
            label="Username"
            onInput={(event) => {
              setUsername(event.target.value);
            }}
            required
          />
          <br />
          <label for="password">Password</label>

          <input
            id="password"
            label="Password"
            type="password"
            onInput={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
