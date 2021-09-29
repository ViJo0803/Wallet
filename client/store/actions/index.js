import axios from 'axios';

import {CREATE_USER, LOG_IN} from "./types"

export function createUser(userData){

    const dataUser = {
        username: userData.username,
        email: userData.email,
        dni: userData.dni,
        password: userData.password,
      };

      return async (dispatch)=>{
          await axios.post("backurl", dataUser)
          .then((res)=>{
              dispatch({type:CREATE_USER, payload: dataUser })
          })
          .catch((error) => console.log(error));
      }
}