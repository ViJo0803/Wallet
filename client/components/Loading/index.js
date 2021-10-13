import React, { useEffect } from "react";
import {  View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/actions/userActions";
import {styles} from "./styles"
import axios from 'axios'

export default function Loading({ navigation }) {

  const dispatch = useDispatch();


  let token= useSelector((state)=>state.users.jwtToken)
  console.log(" here is the token: ", token);

  let json = token.payload

  console.log("this is the json ", json)

  const mail= json.sub.split("|")[0]==="google-oauth2" ? json.nickname +'@gmail.com' :  json.name 
      
  console.log("this is the mail ", mail)

  const funcionAsync = async () => {
    const requestDB = await axios.get('http://localhost:3001/user/get/?mail='+mail)
    console.log('REQUEST BASE DE DATOS',requestDB)
    if(requestDB.data === ""){
      console.log('request vacio')
      navigation.navigate("RegisterExtended")
    } else{
      navigation.navigate("Drawer")
    }
  }
  funcionAsync()


  /* useEffect(()=>{
    dispatch(getUser(mail))
  }, [dispatch])


const state= useSelector((state)=>state.users.user)


console.log(Object.keys(state).length)

Object.keys(state).length!==0 ?navigation.navigate("Drawer"):navigation.navigate("RegisterExtended") */



    return (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
)
}