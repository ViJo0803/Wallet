// require("dotenv").config();
import axios from "axios";
 import { URL_API_3001 } from "../../constantes";
// const { URL_API_3001 } = process.env;

import { GET_ACCOUNT, DEPOSIT, GET_SERVICE_PAYMENT } from "./types";

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
        dispatch(getAccount(idusuario));
        dispatch({ type: DEPOSIT, payload: response.data });
      });
  };
}

export function getPaymentHistory(id) {
  return async (dispatch) => {
    await axios
      .get(`${URL_API_3001}/servicesPayment/get?id=${id}`)
      .then((response) => {
        dispatch({ type: GET_SERVICE_PAYMENT, payload: response.data });
      });
  };
}
