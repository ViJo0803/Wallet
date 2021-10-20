import { GET_CONTACT, GET_ALL_CONTACT, UPDATE_CONTACT } from "./types";
import { url } from "./const";
import axios from "axios";
import { URL_API_3001 } from "../../constantes";

export function getContacts(userId) {
  return async (dispatch) => {
    await axios
      .get(`${URL_API_3001}/contact/get/?id=${userId}`)
      .then((response) => {
        dispatch({ type: GET_CONTACT, payload: response.data });
        console.log("data contactos id: ", response.data);
      })
      .catch((error) => console.log(error));
  };
}
export function getAllContacts() {
  return async (dispatch) => {
    await axios.get(`${URL_API_3001}/contact/get`).then((response) => {
      dispatch({ type: GET_ALL_CONTACT, payload: response.data });
    });
    console
      .log("data contactos: ", response.data)
      .catch((error) => console.log(error));
  };
}

export function updateContacts(data) {
  return async (dispatch) => {
    await axios
      .post(`${URL_API_3001}/contact/add/`, data)
      .then((response) => {
        
        dispatch({ type: UPDATE_CONTACT, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}

// return (dispatch) => {
//   dispatch({
//     type: GET_ALL_CONTACT,
//     payload:  [
//       {
//         alias: "pepe",
//         tipo: "nada",
//         name: "jose",
//         lastname: "perez",

//       },
//       {
//         alias: "nick",
//         tipo: "algo",
//         name: "pedro",
//         lastname: "lopez",

//       },
//       {
//         alias: "titu",
//         tipo: "ni",
//         name: "juan",
//         lastname: "garcia",

//       },
//       {
//         alias: "tuca",
//         tipo: "nose",
//         name: "alejandro",
//         lastname: "alvarez",

//       },
//       {
//         alias: "chicho",
//         tipo: "yoquese",
//         name: "Facundo",
//         lastname: "manes",

//       },
//       {
//         alias: "lito",
//         tipo: "noimporta",
//         name: "Jorge",
//         lastname: "gonzalez",

//       },
//     ]
//   })
// }

// return (dispatch) => {
//   dispatch({
//     type: GET_ALL_CONTACT,
//     payload:  [
//       {
//         alias: "pepe",
//         tipo: "nada",
//         name: "jose",
//         lastname: "perez",

//       },
//       {
//         alias: "nick",
//         tipo: "algo",
//         name: "pedro",
//         lastname: "lopez",

//       },
//       {
//         alias: "titu",
//         tipo: "ni",
//         name: "juan",
//         lastname: "garcia",

//       },
//       {
//         alias: "tuca",
//         tipo: "nose",
//         name: "alejandro",
//         lastname: "alvarez",

//       },
//       {
//         alias: "chicho",
//         tipo: "yoquese",
//         name: "Facundo",
//         lastname: "manes",

//       },
//       {
//         alias: "lito",
//         tipo: "noimporta",
//         name: "Jorge",
//         lastname: "gonzalez",

//       },
//     ]
//   })
// }

//  return (dispatch) => {
//     dispatch({
//       type: GET_ALL_CONTACT,
//       payload:  [
//         {
//           alias: "pepe",
//           tipo: "nada",
//           name: "jose",
//           lastname: "perez",

//         },
//         {
//           alias: "nick",
//           tipo: "algo",
//           name: "pedro",
//           lastname: "lopez",

//         },
//         {
//           alias: "titu",
//           tipo: "ni",
//           name: "juan",
//           lastname: "garcia",

//         },
//         {
//           alias: "tuca",
//           tipo: "nose",
//           name: "alejandro",
//           lastname: "alvarez",

//         },
//         {
//           alias: "chicho",
//           tipo: "yoquese",
//           name: "Facundo",
//           lastname: "manes",

//         },
//         {
//           alias: "lito",
//           tipo: "noimporta",
//           name: "Jorge",
//           lastname: "gonzalez",

//         },
//       ]
//     })
//   }
