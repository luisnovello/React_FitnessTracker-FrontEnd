import { Link } from "react-router-dom";

const Login = (props) => {
  const { setUserLogin } = props;
  return (
    <>
      <h1>Login</h1>
      <form>
        <label>
          username
          <input type="text" name="name" placeholder="username" />
        </label>
        <label>
          password
          <input type="text" name="name" placeholder="password" />
        </label>
      </form>
    </>
  );
};

export default Login;
