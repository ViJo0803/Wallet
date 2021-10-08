import React from "react";
import { View, ActivityIndicator } from "react-native";
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles'


export default function Loading({ navigation }) {

  const MY_STORAGE_KEY = 'token'
  const loading = async () => {
    const value = await AsyncStorage.getItem(MY_STORAGE_KEY)
    console.log("value", value)
    let json = JSON.parse(value)
    console.log("json", json)
    const datos = await axios.get('http://localhost:3001/user?mail=' + (json.sub.split("|")[0] === "google-oauth2" ? json.nickname + '@gmail.com' : json.name))
    console.log("datos", datos)
    if (datos.status === 200) {
      navigation.navigate("Drawer")
    } else if (datos.status === 204) {
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
