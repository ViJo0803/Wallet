import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from "../index.js"
import TransactionDetail from "../transactionDetail.js"

const Stack = createStackNavigator()

export default function AccountNav() {
    return (
        <Stack.Navigator
            initialRouteName="AccountIndex">
            <Stack.Screen
                name="AccountIndex"
                component={Accounts}
                headerShown={false} />
            <Stack.Screen
                name="TransactionDetail"
                component={TransactionDetail}
                headerShown={false} />
        </Stack.Navigator>
    )
}
