import React from "react";
import { Text, View, TextInput, Button, Alert, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios"
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from "../../store/actions";
import {styles} from "./styles"

export default function Loading({ navigation }) {

  const dispatch = useDispatch();
  const MY_STORAGE_KEY = 'token'

  const loading = async() =>{
      const value = await AsyncStorage.getItem(MY_STORAGE_KEY)
      let json = JSON.parse(value)
      const mail= json.sub.split("|")[0]==="google-oauth2" ? json.nickname +'@gmail.com' :  json.name 
      console.log(mail)
      const datos = await axios.get('http://localhost:3001/user?mail=' + mail )
      console.log("response",datos.data)
      if(datos.data) {
        dispatch(getUser(datos.data.mail)) 
        navigation.navigate("Drawer")
      } else{
        navigation.navigate("RegisterExtended")
      }
      
      }

  loading()
    
    return (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
)
}