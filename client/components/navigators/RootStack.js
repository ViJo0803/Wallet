import React from 'react';



// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import store from "../../store/index";;


// screens
import Login from '../Login'
import Drawer from '../Drawer'
import LandingPage from '../LandingPage';


const Stack = createStackNavigator();

// credentials context

const RootStack = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LandingPage' component={LandingPage}options={{ headerShown: false }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    )
  }
export default RootStack;
