import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import jwtDecode from "jwt-decode";

import { CREATE_USER, LOG_IN } from "./types";

export function createUser(userData) {
  const dataUser = {
    username: userData.username,
    email: userData.email,
    dni: userData.dni,
    password: userData.password,
  };

  return async (dispatch) => {
    await axios
      .post("backurl", dataUser)
      .then((res) => {
        dispatch({ type: CREATE_USER, payload: dataUser });
      })
      .catch((error) => console.log(error));
  };
}

export function userlogin(decoded) {
  console.log("userloggin");

  return async (dispatch) => {
    dispatch({ type: LOG_IN, payload: decoded });
  };
}


export function getUserData() {
    return async (dispatch) => {
        try {
            const value = await AsyncStorage.getItem(MY_STORAGE_KEY);
                if (value !== null) {
                var stringToJson = JSON.parse(value)
                const datos = await axios.get('http://localhost:3001/usuarios?mail=' +  (stringToJson.sub.split("|")[0]==="google-oauth2" ? stringToJson.nickname +'@gmail.com' :  stringToJson.name ))
                const objetoUserProfile = {
                    valueName : datos.data[0].nombre + ' ' + datos.data[0].apellidos,
                    valueMail : datos.data[0].mail,
                    valueImage : datos.data[0].foto,
                    valueDNI : datos.data[0].dni,
                    valuePhone : datos.data[0].telefono,
                    valueCP : datos.data[0].codigo_postal,
                    valueNickname : datos.data[0].nickname,
                }
                
                // await AsyncStorage.mergeItem(MY_STORAGE_KEY, JSON.stringify(objetoUserProfile))
                await AsyncStorage.setItem(MY_STORAGE_KEY, '')
                await AsyncStorage.setItem(MY_STORAGE_KEY, JSON.stringify(objetoUserProfile)) // antes en esta linea estaba el mergeItem
                return objetoUserProfile
            }
        } catch (error) {
            /* console.log(error.message) */
        }
    }   
}