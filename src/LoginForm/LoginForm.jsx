import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../redux/Operations";
import s from "./LoginForm.module.scss";

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
    <div className={s.loginForm}>
      <h2>Login form</h2>
      <form onSubmit={gerAccessCredentials}>
        <label className={s.input}>
          <span className={s.mailLabel}>Mail:</span>
          <input type="email" value={email} onChange={getEmail} />
        </label>
        <label className={s.input}>
          <span>Password:</span>
          <input type="text" value={password} onChange={getPassword} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
