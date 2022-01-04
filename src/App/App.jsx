import { nanoid } from "nanoid";
import { useState, useEffect, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Phonebook from "../Phonebook/Phonebook";
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";
import AuthForm from "../AuthForm/AuthForm";
import { fetchCurrentUser } from "../redux/Operations";

const STORAGE_KEY = "contacts";

const App = () => {
  const dispatch = useDispatch();
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

  return (
    <div>
      <Header />
      {/* <Suspense fallback={<div>Loadding...</div>}> */}
      <Switch>
        <Route path={"/contacts"}>
          <Phonebook
            contacts={getFilteredContact()}
            onFilterChange={handleFilterChange}
          />
        </Route>
        <Route path={"/login"}>
          <LoginForm />
        </Route>
        <Route path={"/registration"}>
          <AuthForm />
        </Route>
      </Switch>
      {/* </Suspense> */}
    </div>
  );
};

export default App;
