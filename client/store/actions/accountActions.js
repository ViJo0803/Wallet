import axios from 'axios';

import {GET_ACCOUNT, CREATE_ACCOUNT} from "./types"


export function getAccount(id){
    return async (dispatch)=>{
        await axios
        .get(`http://192.168.0.121:3001/cuentas/?id=${id}`)
        .then((response) => {
          dispatch({ type: GET_ACCOUNT, payload: response.data });
        })
        .catch((error) => console.log(error));
    };
  }


  export function createAccount(userData){
    return async (dispatch) => {
        await axios
          .post(`http://192.168.0.121:3001/cuentas`, userData)
          .then((response) => {
            dispatch({ type: CREATE_ACCOUNT, payload: response.data });
          })
          .catch((error) => console.log(error));
};
}