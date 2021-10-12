import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Coins from "../Coins";
import Services from "../Services";
import Transfers from "../Transfers";
import Deposit from "../Deposit";
import Home from "../Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2f3542",
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: "#8fd18e",
          paddingBottom: "6px",
          paddingTop: "6px",
          paddingLeft: "6px",
          paddingRight: "6px"
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size="30px" />
          )
        }}
      />
      <Tab.Screen
        name="Coins"
        component={Coins}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="coins" color={color} size="20px" />
          )
        }}
      />
      <Tab.Screen
        name="Transfers"
        component={Transfers}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="exchange-alt" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="building" color={color} size="20px" />
          )
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
              size="30px"
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNav;
