import { GET_CONTACT, GET_ALL_CONTACT, UPDATE_CONTACT } from "./types";
import { url } from "./const";
import axios from "axios";

export function getContacts(userId) {
  // return async (dispatch) => {
  //   await axios
  //     .get(`${url}/contact/get/?id=${userId}`)
  //     .then((response) => {
  //       dispatch({ type: GET_CONTACT, payload: response.data });
  //     })
  //     .catch((error) => console.log(error));
  // };
  return (dispatch) => {
    dispatch({
      type: GET_ALL_CONTACT,
      payload:  [
        {
          alias: "pepe",
          tipo: "nada",
          name: "jose",
          lastname: "perez",

        },
        {
          alias: "nick",
          tipo: "algo",
          name: "pedro",
          lastname: "lopez",

        },
        {
          alias: "titu",
          tipo: "ni",
          name: "juan",
          lastname: "garcia",

        },
        {
          alias: "tuca",
          tipo: "nose",
          name: "alejandro",
          lastname: "alvarez",

        },
        {
          alias: "chicho",
          tipo: "yoquese",
          name: "Facundo",
          lastname: "manes",

        },
        {
          alias: "lito",
          tipo: "noimporta",
          name: "Jorge",
          lastname: "gonzalez",

        },
      ]
    })
  }
}
export function getAllContacts() {
  // return async (dispatch) => {
  //   await axios
  //     .get(`${url}/contact/get`)
  //     .then((response) => {
  //       dispatch({ type: GET_ALL_CONTACT, payload: response.data });
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (dispatch) => {
    dispatch({
      type: GET_ALL_CONTACT,
      payload:  [
        {
          alias: "pepe",
          tipo: "nada",
          name: "jose",
          lastname: "perez",

        },
        {
          alias: "nick",
          tipo: "algo",
          name: "pedro",
          lastname: "lopez",

        },
        {
          alias: "titu",
          tipo: "ni",
          name: "juan",
          lastname: "garcia",

        },
        {
          alias: "tuca",
          tipo: "nose",
          name: "alejandro",
          lastname: "alvarez",

        },
        {
          alias: "chicho",
          tipo: "yoquese",
          name: "Facundo",
          lastname: "manes",

        },
        {
          alias: "lito",
          tipo: "noimporta",
          name: "Jorge",
          lastname: "gonzalez",

        },
      ]
    })
  }
  

}

export function updateContacts(data) {
  // return async (dispatch) => {
  //   await axios
  //     .put(`${url}/contact/update/`, date)
  //     .then((response) => {
  //       dispatch({ type: UPDATE_CONTACT, payload: response.data });
  //     })
  //     .catch((error) => console.log(error));
  // };
 return (dispatch) => {
    dispatch({
      type: GET_ALL_CONTACT,
      payload:  [
        {
          alias: "pepe",
          tipo: "nada",
          name: "jose",
          lastname: "perez",

        },
        {
          alias: "nick",
          tipo: "algo",
          name: "pedro",
          lastname: "lopez",

        },
        {
          alias: "titu",
          tipo: "ni",
          name: "juan",
          lastname: "garcia",

        },
        {
          alias: "tuca",
          tipo: "nose",
          name: "alejandro",
          lastname: "alvarez",

        },
        {
          alias: "chicho",
          tipo: "yoquese",
          name: "Facundo",
          lastname: "manes",

        },
        {
          alias: "lito",
          tipo: "noimporta",
          name: "Jorge",
          lastname: "gonzalez",

        },
      ]
    })
  }

}
