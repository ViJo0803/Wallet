import axios from "axios";

import { GET_TRANSFERS,MAKE_TRANSFER } from "./types";

export function getTransfers(id) {

  console.log("in actions transfers", id)
  return async dispatch => {
    await axios
      .get(`http://localhost:3001/transfers/get?id=${id}`)
      .then(response => {
        dispatch({ type: GET_TRANSFERS, payload: response.data });
      })
      .catch(error => console.log(error));
  };
}


export function makeTranfer(data){
  return async dispatch =>{
    await axios
    .post(`http://localhost:3001/transfers/create?`, data)
    .then(response=>{
      dispatch({type:MAKE_TRANSFER, payload: response.data })
    })
    .catch(error => console.log(error));
  }
}
