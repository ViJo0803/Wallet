import React from "react";
import { Text, View, TextInput, Button, Alert, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from "../../store/actions/userActions";
import {styles} from "./styles"

export default async function Loading({ navigation }) {

  const dispatch = useDispatch();
  const MY_STORAGE_KEY = 'token'
  const value = await AsyncStorage.getItem(MY_STORAGE_KEY)
  let json = JSON.parse(value)
  const mail= json.sub.split("|")[0]==="google-oauth2" ? json.nickname +'@gmail.com' :  json.name

  useEffect(()=>{
    dispatch(getUser(mail))
  },[])

  const state = useSelector((state) => state.users.user);


  state? navigation.navigate("Drawer"):navigation.navigate("RegisterExtended")
  

  
    
    return (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
)
}