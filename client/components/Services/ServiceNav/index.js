import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ServicesIndex from "../index.js";
import ServiceDetail from "../../ServiceDetail/index.js";

const Stack = createStackNavigator();

function ServiceNav() {
  return (
    <Stack.Navigator
      initialRouteName="ServicesIndex"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ServicesIndex" component={ServicesIndex} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
    </Stack.Navigator>
  );
}

export default ServiceNav;
