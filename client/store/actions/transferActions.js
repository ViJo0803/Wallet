import axios from "axios";
//import { url } from "./const";

import { URL_API_3001 } from "../../constantes"


import { GET_TRANSFERS,MAKE_TRANSFER } from "./types";

export function getTransfers(id) {

  //console.log("in actions transfers", id)
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
      .post(`${URL_API_3001}/transfers/create?`,data);
    await axios
      .get(`${URL_API_3001}/transfers/get?id=${data.origen}`)
      .then((response) => {
        dispatch({ type: GET_TRANSFERS, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}
