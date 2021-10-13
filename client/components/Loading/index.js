import React, { useEffect } from "react";
import {  View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/actions/userActions";
import {styles} from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage";


const MY_STORAGE_KEY = 'token'

export default function Loading({ navigation }) {
    /* const retrieveData = async () => {
      try {
          const value = await AsyncStorage.getItem(MY_STORAGE_KEY);
          if (value !== null) {
            const stringToJson = JSON.parse(value)
            console.log('datos del async storage: ',stringToJson)
            /* console.log('datos parseados',stringToJson) */
              // Our data is fetched successfully
        //  }
      //} catch (error) {
          // Error retrieving data
          ///console.log(error.message)
      //}
    //} */
    //retrieveData()

    return (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
)
}