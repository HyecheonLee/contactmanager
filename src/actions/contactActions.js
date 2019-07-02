import {ADD_CONTACTS, DELETE_CONTACTS, GET_CONTACTS} from "./types";
import axios from "axios";

export const getContacts = () => async (dispatch) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};
export const deleteContact = (id) => (dispatch) => {
  dispatch({
    type: DELETE_CONTACTS,
    payload: id
  });
};
export const addContact = (contact) => (dispatch) => {
  dispatch({
    type: ADD_CONTACTS,
    payload: contact
  });
};