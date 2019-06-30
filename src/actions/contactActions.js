import {ADD_CONTACTS, DELETE_CONTACTS, GET_CONTACTS} from "./types";

export const getContacts = () => (dispatch) => {
  dispatch({
    type: GET_CONTACTS,
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