import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Transfers from "../../Transfers/index.js";
import CardContact from "../../CardContact/index.js";

const Stack = createStackNavigator();

function TransferNav() {
    return (
        <Stack.Navigator initialRouteName="TransferIndex" screenOptions={{ headerShown: false}}>
            <Stack.Screen name="TransferIndex" component={Transfers} />
            <Stack.Screen name="Card Contact" component={CardContact} />
        </Stack.Navigator>
    )
}

export default TransferNav