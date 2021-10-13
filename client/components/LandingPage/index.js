import React from "react";
import { View, Image } from "react-native";
import Login from "../Login";
import { styles } from "./styles";
import logoMint from "../../assets/Logo_MintI.png";
import RegisterExtended from "../RegisterExtended";
import Loading from "../Loading";
import Drawer from '../Drawer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import store from "../../store/index";;
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

const x = 3
const MY_STORAGE_KEY = 'token'

const retrieveData = async () => {
  try {
      const value = await AsyncStorage.getItem(MY_STORAGE_KEY);
      if (value !== null) {
        const stringToJson = JSON.parse(value)
        console.log('datos en landingPage',stringToJson)
          // Our data is fetched successfully
      }
  } catch (error) {
      // Error retrieving data
      console.log(error.message)
  }
}

function LandingPage({ navigation }) {
  
  return (
      <Stack.Navigator>
        {retrieveData()}
        {/* {x === 1 ? <Stack.Screen name='RegisterExtended' component={RegisterExtended} options={{ headerShown: false }}></Stack.Screen> : console.log('a')}
        {x === 2 ? <Stack.Screen name='Loading' component={Loading} options={{ headerShown: false }}></Stack.Screen> : console.log('b')}
        {x === 3 ? <Stack.Screen name='Drawer' component={Drawer} options={{ headerShown: false }}></Stack.Screen> : console.log('c')}
 */}
        {/* <Stack.Screen name='RegisterExtended' component={RegisterExtended} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Loading' component={Loading} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Drawer' component={Drawer} options={{ headerShown: false }}></Stack.Screen> */}
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Loading' component={Loading} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
  );
}

export default LandingPage;
