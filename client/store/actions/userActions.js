
import axios from "axios";
//import { url } from "./const";
import { URL_API_3001 } from "../../../constantes"

import { CREATE_USER, GET_USER, GET_JWT, UPDATE_USER } from "./types";

export function createUser(userData) {
  return async (dispatch) => {
    await axios
      .post(`${URL_API_3001}/user/create`, userData) 
      .then((response) => {
        dispatch({ type: CREATE_USER, payload: response.data });
      })
      .catch((error) => console.log(error));
  };

}

export function getToken(token) {
  return {
    type: GET_JWT,
    payload: token,
  };
}

export function getUser(mail) {
  return async (dispatch) => {
    await axios
      .get(`${URL_API_3001}/user/get/?mail=${mail}`)
      .then((response) => {
       dispatch({ type: GET_USER, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}

export function updateUser(data) {
  console.log("in actions update user", data);
  return async (dispatch) => {
    await axios
      .put(`${URL_API_3001}/user/update/`, data)
      .then((response) => {
        dispatch({ type: UPDATE_USER, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}


