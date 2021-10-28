import { GET_CONTACT, GET_ALL_CONTACT, UPDATE_CONTACT } from "./types";
import { url } from "./const";
import axios from "axios";
import { URL_API_3001 } from "../../constantes";

export function getContacts(userId) {
  return async (dispatch) => {
    await axios
      .get(`${URL_API_3001}/contact/get/?id=${userId}`)
      .then((response) => {
        dispatch({ type: GET_CONTACT, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}
export function getAllContacts() {
  return async (dispatch) => {
    await axios.get(`${URL_API_3001}/contact/get`).then((response) => {
      dispatch({ type: GET_ALL_CONTACT, payload: response.data });
    });
    console
      .log("data contactos: ", response.data)
      .catch((error) => console.log(error));
  };
}

export function updateContacts(data, userId) {
  return async (dispatch) => {
    await axios
      .post(`${URL_API_3001}/contact/add/`, data)
      .then((response) => {
        if (response.data === "") alert("Something went Wrong");
        else if (response.data[1] === true) alert("Contact added successfully");
        else if (response.data[1] === false) alert("Contact already exist");
        dispatch(getContacts(userId));
        dispatch({ type: UPDATE_CONTACT, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}
