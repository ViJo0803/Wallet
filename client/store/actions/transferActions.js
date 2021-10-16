import axios from "axios";
import { url } from "./const";

import { GET_TRANSFERS,MAKE_TRANSFER } from "./types";

export function getTransfers(id) {

  console.log("in actions transfers", id)
  return async dispatch => {
    await axios
      .get(`${url}/transfers/get?id=${id}`)
      .then(response => {
        dispatch({ type: GET_TRANSFERS, payload: response.data });
      })
      .catch(error => console.log(error));
  };
}


export function makeTransfer(data) {
  return async (dispatch) => {
    await axios
      .post(`${url}/transfers/create?`,data);
    await axios
      .get(`${url}/transfers/get?id=${data.origen}`)
      .then((response) => {
        dispatch({ type: GET_TRANSFERS, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}
