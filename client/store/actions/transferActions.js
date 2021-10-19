import axios from "axios";
//import { url } from "./const";

import { URL_API_3001 } from "../../constantes"
import {getAccount} from "./accountActions"

import { GET_TRANSFERS, MAKE_TRANSFER } from "./types";

export function getTransfers(id) {

  return async dispatch => {
    await axios
      .get(`${URL_API_3001}/transfers/get?id=${id}`)
      .then(response => {
        dispatch({ type: GET_TRANSFERS, payload: response.data });
      })
      .catch(error => console.log(error));
  };
}


export function makeTransfer(data) {
  return async (dispatch) => {
    await axios
        .post(`${URL_API_3001}/transfers/create`,data)
      .then((response)=>{
        if (response.data !== "") alert("Transfer Successful");
        else if (response.data === "") alert("Something went Wrong");
      })
    await axios
      .get(`${URL_API_3001}/transfers/get?id=${data.origen}`)
      .then((response) => {
        dispatch({ type: GET_TRANSFERS, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}

export function servicePayment(data, idusuario) {
  console.log("this is service payment", data, idusuario)
  //console.log('ruta', `${URL_API_3001}/servicesPayment`, data)
  return async (dispatch) => {
    await axios
      .post(`${URL_API_3001}/servicesPayment`, data)
      .then((response) => {
        console.log("response.satus",response)
        if (response.data !== "") alert("Payment Successful");
        else if (response.data === "") alert("Something went Wrong");
        dispatch(getAccount(idusuario))
        })
      .catch((error) => console.log(error));
  };
}
