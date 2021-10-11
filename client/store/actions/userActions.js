import axios from 'axios';

import {CREATE_USER, GET_USER, GET_JWT} from "./types"

export function createUser(userData){
  console.log("in actions create User" ,)
    return async (dispatch) => {
        await axios
          .post(`http://localhost:3001/user/create`, userData)
          .then((response) => {
            dispatch({ type: CREATE_USER, payload: response.data });
          })
          .catch((error) => console.log(error));
};
}

/*
export function getToken(token){

  console.log("in actions get token", token)

  return {type: GET_JWT , payload: token}
  
}

*/

export function getToken(token) {
  console.log("in actions get token", token)
  
    return({
      type: GET_JWT,
      payload:token
    })

  
}

export function getUser(mail) {

  console.log("in actions get user", mail)
    return async (dispatch) => {
        await axios
        .get(`http://localhost:3001/user/get/?mail=${mail}`)
        .then((response) => {
          dispatch({ type: GET_USER, payload: response.data });
        })
        .catch((error) => console.log(error));
    };
  }