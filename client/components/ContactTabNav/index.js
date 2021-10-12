import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ContactList from '../Contacts/ContactList/index.js';
import AddContact from '../Contacts/AddContact/Index.js';

const Tab = createBottomTabNavigator();

export default function ContactTabNav() {
    return (
        <Tab.Navigator
            initialRouteName="Contacts"
            screenOptions={{
                tabBarActiveTintColor: "#2f3542",
                tabBarInactiveTintColor: "#ffffff",
                tabBarStyle: {
                    backgroundColor: "#8fd18e",
                    paddingBottom: "6px",
                    paddingTop: "6px",
                    paddingLeft: "6px",
                    paddingRight: "6px"
                }
            }} >
            <Tab.Screen
                name="Contact List"
                component={ContactList}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-friends" color={color} size="28px" />
                    )
                }} />
            <Tab.Screen
                name="Add Contact"
                component={AddContact}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-plus" color={color} size="24px" />
                    )
                }} />
        </Tab.Navigator>
    )
}
