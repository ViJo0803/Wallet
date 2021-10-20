import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Transfers from "../../Transfers/index.js";
import CardContact from "../../CardContact/index.js";
import AddContact from "../../AddContact/index.js";

const Stack = createStackNavigator();

function TransferNav() {
    return (
        <Stack.Navigator initialRouteName="TransferIndex" screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Transfer to favourite" component={Transfers} />
            <Stack.Screen name="Card Contact" component={CardContact} />
            <Stack.Screen name="Add Contact" component={AddContact} />
        </Stack.Navigator>
    )
}

export default TransferNav