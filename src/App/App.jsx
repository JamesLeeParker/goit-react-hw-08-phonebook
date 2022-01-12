import { useState, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Phonebook from "../Phonebook/Phonebook";
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";
import AuthForm from "../AuthForm/AuthForm";
import { fetchCurrentUser } from "../redux/Operations";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import s from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const isUserLoadding = useSelector((state) => state.auth.isUserLoadding);
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const getFilteredContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };
  if (isUserLoadding) return <>Loader...</>;
  return (
    <div className={s.container}>
      <Header />
      <Switch>
        <PrivateRoute path={"/contacts"}>
          <Phonebook
            contacts={getFilteredContact()}
            onFilterChange={handleFilterChange}
          />
        </PrivateRoute>
        <PublicRoute path={"/login"} resricted>
          <LoginForm />
        </PublicRoute>
        <PublicRoute path={"/registration"} resricted>
          <AuthForm />
        </PublicRoute>
      </Switch>
    </div>
  );
};

export default App;
