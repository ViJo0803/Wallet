import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./components/LandingPage";
import RegisterExtended from "./components/RegisterExtended";
import DrawerBar from "./components/Drawer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            headerShown: false,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30
          }}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerBar}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="RegisterExtended" component={RegisterExtended} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
