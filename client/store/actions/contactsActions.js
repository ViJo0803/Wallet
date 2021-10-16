import { GET_CONTACT, UPDATE_CONTACT } from "./types";
import axios from "axios";

export function getContacts(userId) {
  return async (dispatch) => {
    await axios
      .get(`${url}/contact/get/?id=${userId}`)
      .then((response) => {
        dispatch({ type: GET_CONTACT, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}

export function updateContacts(data) {
  return async (dispatch) => {
    await axios
      .put(`${url}/contact/update/`, date)
      .then((response) => {
        dispatch({ type: UPDATE_CONTACT, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}
