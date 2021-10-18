import React from "react";
import { View, Text } from "react-native";
import { CredentialsContext } from "./CredentialsContext";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerBar from "../components/Drawer/index";

const Stack = createStackNavigator();

export default function ExtendedCredentialsContext() {

  const { extendedCredentials, setExtendedCredentials } = useContext(
    ExtendedCredentialsContext
  );

  //chequeo de back por datos que le faltan a google

  //const user = get de usuario con mail
  //user.dni ? setExtendedCredentials : ''
  
  
  return (
    <CredentialsContext.Consumer>
      {({ extendedCredentials }) => {
        <Stack.Navigator>
          {!extendedCredentials.dni ? (
            <Stack.Screen
              name="ExtraRegister"
              component={GoogleExtraRegister}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Drawer"
              component={DrawerBar}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>;
      }}
    </CredentialsContext.Consumer>
  );
}
