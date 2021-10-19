import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store/index";
import React, { useState } from "react";
// React navigation stack
import RootStack from "../client/navigators/RootStack";
// apploading
import AppLoading from "expo-app-loading";
// async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";
// credentials context
import { CredentialsContext } from "../client/loginComponents/CredentialsContext";
//----------dep
import axios from "axios";

axios.defaults.baseURL = "http://a777-179-6-101-89.ngrok.io";
//---------------dep
const Stack = createStackNavigator();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkLoginCredentials = () => {
    AsyncStorage.getItem("flowerCribCredentials")
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appReady) {
    return (
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <CredentialsContext.Provider
        value={{ storedCredentials, setStoredCredentials }}
      >
        <RootStack />
      </CredentialsContext.Provider>
    </Provider>
  );
}
