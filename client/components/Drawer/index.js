import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from '../LandingPage';
import Statistics from '../Statistics';
import UserProfile from '../UserProfile/index'
import TabNav from '../TabNav';
import Accounts from '../Accounts';

const Drawer = createDrawerNavigator();




function DrawerBar() {

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f8f9fa',
                    
                },
                headerTintColor: '#4E878C',
                drawerActiveBackgroundColor: '#8fd18e',
                drawerInactiveBackgroundColor: '#e3e6e9',
            }}>
            <Drawer.Screen name='Home' component={TabNav}/>
            <Drawer.Screen name="User Profile" component={UserProfile} />
            <Drawer.Screen name="Accounts" component={Accounts} />
            <Drawer.Screen name="Statistics" component={Statistics} />
            <Drawer.Screen name="Log out" component={LandingPage} />
        </Drawer.Navigator>
    )
}

export default DrawerBar