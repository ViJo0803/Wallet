import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Services from "../Services/index.js";
import TransferNav from "../Transfers/TransferNav/index.js";
import Deposit from "../Deposit/index.js";
import Home from "../Home/index";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { colors } from "../../utils/colors.js";

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.brand,
        tabBarInactiveTintColor: colors.lightGray,
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Transfers"
        component={TransferNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="exchange-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="building" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Deposit"
        component={Deposit}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cash-plus"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNav;
