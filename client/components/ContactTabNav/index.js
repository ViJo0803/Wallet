import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ContactList from '../Contacts/ContactList/index.js';
import AddContact from '../Contacts/AddContact/Index.js';

const Tab = createBottomTabNavigator();

export default function ContactTabNav() {
    return (
        <Tab.Navigator  screenOptions={{ headerShown=false }} >
            <Tab.Screen
                name="Contacts"
                component={ContactList}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size="30px" />
                    )
                }} />
            <Tab.Screen
                name="Add Contact"
                component={AddContact}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size="30px" />
                    )
                }} />
        </Tab.Navigator>
    )
}
