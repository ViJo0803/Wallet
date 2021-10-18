import React from "react";
import { View, Text } from "react-native";
import { ExtendedCredentialsContext } from "./CredentialsContext";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerBar from "../components/Drawer/index";
import GoogleExtraRegister from "../screens/GoogleExtraRegister";

const Stack = createStackNavigator();

export default function CredentialsNav() {

  return (
    <ExtendedCredentialsContext.Consumer>
      {({ extendedCredentials }) => {
        <Stack.Navigator>
          {!extendedCredentials ? (
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
    </ExtendedCredentialsContext.Consumer>
  );
}
