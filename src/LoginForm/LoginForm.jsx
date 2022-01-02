import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../redux/Operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getEmail = (e) => setEmail(e.target.value);

  const getPassword = (e) => setPassword(e.target.value);

  const gerAccessCredentials = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h2>Login form</h2>
      <form onSubmit={gerAccessCredentials}>
        <label>
          <span>Mail:</span>
          <input type="text" value={email} onChange={getEmail} />
        </label>
        <label>
          <span>Password:</span>
          <input type="text" value={password} onChange={getPassword} />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
