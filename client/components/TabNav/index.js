import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Coins from '../Coins';
import Services from '../Services';
import Transfers from '../Transfers';
import Deposit from '../Deposit';
import Home from '../Home';



const Tab = createBottomTabNavigator();


function TabNav() {

    return (

        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                "tabBarActiveTintColor": "darkred"
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Coins" component={Coins} />
            <Tab.Screen name="Transfers" component={Transfers} />
            <Tab.Screen name="Services" component={Services} />
            <Tab.Screen name="Deposit" component={Deposit} />
        </Tab.Navigator>
    )
}

export default TabNav