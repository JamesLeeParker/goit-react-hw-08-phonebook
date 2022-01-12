import { createAction } from "@reduxjs/toolkit";
import * as api from "../services/api";

const setContacts = createAction("contacts/contacts_set");
const addContact = createAction("contacts/contact_add");
const deleteContact = createAction("contacts/contact_delete");
const onFilter = createAction("contacts/filter_change");

const getContacts = () => (dispatch) => {
  api.getData().then((contacts) => dispatch(setContacts(contacts)));
};

const addItem = (contact) => (dispatch) => {
  api.saveItem(contact).then((contacts) => dispatch(addContact(contacts)));
};

const onDeleteContact = (id) => (dispatch) => {
  api.deleteItem(id);
  dispatch(deleteContact(id));
};

export {
  deleteContact,
  addContact,
  setContacts,
  onFilter,
  getContacts,
  addItem,
  onDeleteContact,
};
