import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ServiceNav from "../Services/ServiceNav/index.js";
import TransferNav from "../Transfers/TransferNav/index.js";
import Deposit from "../Deposit/index.js";
import QRScan from "../QRScanner/index.js";
import Home from "../Home/index";
import AddContact from "../AddContact/index.js";

const Stack = createStackNavigator();

function TabNav() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Home} />
      <Stack.Screen name="Transfers" component={TransferNav} />
      <Stack.Screen name="Services" component={ServiceNav} />
      <Stack.Screen name="Deposit" component={Deposit} />
      <Stack.Screen name="QRScan" component={QRScan} />
      <Stack.Screen name="Add Contact" component={AddContact} />
    </Stack.Navigator>
  );
}

export default TabNav;
