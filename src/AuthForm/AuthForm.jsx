import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/Operations";
import s from "./AuthForm.module.scss";

const AuthForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const getName = (e) => {
    setName(e.target.value);
  };
  const getMail = (e) => {
    setEmail(e.target.value);
  };
  const getPass = (e) => {
    setPassword(e.target.value);
  };

  const fechNewUser = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.loginForm}>
      <h2>Registration form</h2>
      <form onSubmit={fechNewUser}>
        <label className={s.input}>
          <span>Name:</span>
          <input type="text" value={name} onChange={getName} />
        </label>
        <label className={s.input}>
          <span>Mail:</span>
          <input type="text" value={email} onChange={getMail} />
        </label>
        <label className={s.input}>
          <span>Password:</span>
          <input type="text" value={password} onChange={getPass} />
        </label>
        <button type="submit">Registrate</button>
      </form>
    </div>
  );
};

export default AuthForm;
