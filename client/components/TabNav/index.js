import React, { useEffect, useMemo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Coins from "../Coins/index.js";
import Services from "../Services/index.js";
import TransferNav from "../Transfers/TransferNav/index.js";
import Deposit from "../Deposit/index.js";
import Home from "../Home/index";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

function TabNav() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#2f3542",
                tabBarInactiveTintColor: "#ffffff",
                tabBarStyle: {
                    backgroundColor: "#8fd18e",
                },
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Coins"
                component={Coins}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="coins" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="TransferNav"
                component={TransferNav}
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
                        <FontAwesome5 name="building" color={color} size={size} />
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
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNav;
