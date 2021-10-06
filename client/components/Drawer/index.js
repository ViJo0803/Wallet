import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from '../LandingPage/index.js';
import Statistics from '../Statistics/index.js';
import UserProfile from '../UserProfile/index'
import TabNav from '../TabNav/index.js';
import Accounts from '../Accounts/index.js';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function getHeaderTitle(route) {

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
        case 'Coins':
            return 'Coins';
        case 'Transfers':
            return 'Transfers';
        case 'Services':
            return 'Services';
        case 'Deposit':
            return 'Deposit';
        default: return 'Home'
    }
}


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
            {/* <Drawer.Screen name='Home' component={TabNav}/> */}


            
            <Drawer.Screen name='Home' component={TabNav} options={({ route }) => ({ headerTitle: getHeaderTitle(route),})}/>

            <Drawer.Screen name="User Profile" component={UserProfile} />
            <Drawer.Screen name="Accounts" component={Accounts} />
            <Drawer.Screen name="Statistics" component={Statistics} />
            <Drawer.Screen name="Log out" component={LandingPage} />
        </Drawer.Navigator>
    )
}

export default DrawerBar