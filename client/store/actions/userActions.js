import axios from 'axios';

import {CREATE_USER, GET_USER, GET_JWT, UPDATE_USER} from "./types"

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


export function updateUser(data){
  console.log("in actions update user", data)
  return async(dispatch)=>{
    await axios
    .put(`http://localhost:3001/user/update/` , data)
    .then((response)=>{
      dispatch({ type: UPDATE_USER, payload: response.data });
    })
    .catch((error) => console.log(error));
  }
}