import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from "../index.js"
import TransactionDetail from "../transactionDetail.js"

const Stack = createStackNavigator()

export default function AccountNav() {
    return (
        <Stack.Navigator
            initialRouteName="AccountIndex"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="AccountIndex"
                component={Accounts}
            />
            <Stack.Screen
                name="TransactionDetail"
                component={TransactionDetail} />
        </Stack.Navigator>
    )
}
