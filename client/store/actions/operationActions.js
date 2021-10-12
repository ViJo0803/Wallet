import axios from "axios";

import { GET_OPERATIONS } from "./types";

export function getOperations(id) {


  console.log("in actions operations", id)
  return async dispatch => {
    await axios
      .get(`http://localhost:3001/operaciones?id=${id}`)
      .then(response => {
        dispatch({ type: GET_OPERATIONS, payload: response.data });
      })
      .catch(error => console.log(error));
  };
}