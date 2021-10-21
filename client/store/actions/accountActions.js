import axios from "axios";
import { URL_API_3001 } from "../../constantes";
import { GET_ACCOUNT, DEPOSIT } from "./types";

export function getAccount(id) {
  return async (dispatch) => {
    await axios
      .get(`${URL_API_3001}/account/get/?id=${id}`)
      .then((response) => {
        dispatch({ type: GET_ACCOUNT, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}

export function deposit(id, monto, idusuario) {
  return async (dispatch) => {
    await axios
      .put(`${URL_API_3001}/account/update/?id=${id}&monto=${monto}`)
      .then((response) => {
        dispatch(getAccount(idusuario))
        dispatch({ type: DEPOSIT, payload: response.data })
      })
  }
}

export function updateAccount(userData) {
  return async (dispatch) => {
    await axios
      .put
  }
}