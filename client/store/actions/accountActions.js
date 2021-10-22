import axios from "axios";
//import { url } from './const';
import { URL_API_3001 } from "../../constantes";

import { GET_ACCOUNT, DEPOSIT, GET_SERVICE_PAYMENT } from "./types";

export function getAccount(id) {
  console.log("id",id)
  return async (dispatch) => {
    await axios
      .get(`${URL_API_3001}/account/get/?id=${id}`)
      .then((response) => {
        dispatch({ type: GET_ACCOUNT, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}

/*
export function createAccount(userData) {
  return async (dispatch) => {
    await axios
      .post(`${URL_API_3001}/account/update`, userData)
      .then((response) => {
        dispatch({ type: CREATE_ACCOUNT, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}
*/

export function deposit(id, monto, idusuario){
return async(dispatch)=>{
  console.log("in actions")
  console.log("id usuario:",idusuario , "id:", id, "monto:", monto)
  await axios
  .put(`${URL_API_3001}/account/update/?id=${id}&monto=${monto}`)
  .then((response)=>{
    dispatch(getAccount(idusuario))
    dispatch({type:DEPOSIT, payload: response.data})
  })
}
}

export function getPaymentHistory(id){
  return async(dispatch)=>{
    await axios
    .get(`${URL_API_3001}/servicesPayment/get?id=${id}`)
    .then((response)=>{
      dispatch({type:GET_SERVICE_PAYMENT, payload: response.data})
    })
  }
}
