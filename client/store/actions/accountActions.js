import axios from 'axios';
import { url } from './const';

import {GET_ACCOUNT, CREATE_ACCOUNT} from "./types"


export function getAccount(id){
    return async (dispatch)=>{
        await axios
        .get(`${url}/account/get/?id=${id}`)
        .then((response) => {
          dispatch({ type: GET_ACCOUNT, payload: response.data });
        })
        .catch((error) => console.log(error));
    };
  }


  export function createAccount(userData){
    return async (dispatch) => {
        await axios
          .post(`${url}/account/update`, userData)
          .then((response) => {
            dispatch({ type: CREATE_ACCOUNT, payload: response.data });
          })
          .catch((error) => console.log(error));
};
}