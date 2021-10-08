import axios from 'axios';

import {CREATE_USER, GET_USER} from "./types"

export function createUser(userData){
    return async (dispatch) => {
        await axios
          .post(`http://localhost:3001/user`, userData)
          .then((response) => {
            dispatch({ type: CREATE_USER, payload: response.data });
          })
          .catch((error) => console.log(error));
};
}

export function getUser(mail) {
    return async (dispatch) => {
        await axios
        .get(`http://localhost:3001/user/${mail}`)
        .then((response) => {
          dispatch({ type: GET_USER, payload: response.data });
        })
        .catch((error) => console.log(error));
    };
  }


/* export function loadUser(userMail){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/usuarios?mail=' + userMail);
        return dispatch({
            type:"LOAD_USER",
            payload:json.data,
        })
    }
} */