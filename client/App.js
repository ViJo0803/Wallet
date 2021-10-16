import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store/index";
import React, { useState } from "react";
import RootStack from "../client/navigators/RootStack";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "../client/loginComponents/CredentialsContext";
import dotenv from "dotenv";

dotenv.config();

// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

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
      <CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>
        <RootStack />
      </CredentialsContext.Provider>
    </Provider>
  );
}
