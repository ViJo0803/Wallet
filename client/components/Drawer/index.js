import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from '../LandingPage';
import Statistics from '../Statistics';
import UserProfile from '../UserProfile/index'
import TabNav from '../TabNav';
import Accounts from '../Accounts';
import Contacts from '../Contacts';
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
            initialRouteName="TabNav"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f8f9fa',    
                },
                headerTintColor: '#4E878C',
                drawerActiveBackgroundColor: '#8fd18e',
                drawerInactiveBackgroundColor: '#e3e6e9',
            }}>
            <Drawer.Screen name='TabNav' component={TabNav} options={({ route }) => ({ headerTitle: getHeaderTitle(route),})}/>
            <Drawer.Screen name="User Profile" component={UserProfile} />
            <Drawer.Screen name="Accounts" component={Accounts} />
            <Drawer.Screen name="Contacts" component={Contacts} />
            <Drawer.Screen name="Statistics" component={Statistics} />
            <Drawer.Screen name="Log out" component={LandingPage} options={{headerShown=false}}/>
        </Drawer.Navigator>
    )
}

export default DrawerBar