import React from "react";
import { Text, View, StyleSheet,TextInput, Button, Alert, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Loading({ navigation }) {

const MY_STORAGE_KEY = 'token'
const loading = async() =>{
    const value = await AsyncStorage.getItem(MY_STORAGE_KEY)
    console.log("value",value)
    let json = JSON.parse(value)
    console.log("json",json)
    const datos = await axios.get('http://localhost:3001/usuarios?mail=' +  (json.sub.split("|")[0]==="google-oauth2" ? json.nickname +'@gmail.com' :  json.name ))
    console.log("datos",datos)
    if(datos.status===200) {navigation.navigate("Drawer") 
    }else if(datos.status===204) {navigation.navigate("RegisterExtended") }
    
    }

 loading()
    
    return (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });