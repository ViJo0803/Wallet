import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from '../LandingPage';
<<<<<<< HEAD
import Statistics from '../Statistics/Statistics';
import UserProfile from '../UserProfile/index'
import Home from '../Home/index'
=======
import Statistics from '../Statistics';
import UserProfile from '../UserProfile/index'
import TabNav from '../TabNav';
import Accounts from '../Accounts';
>>>>>>> TabNav

const Drawer = createDrawerNavigator();




function DrawerBar() {

    return (
<<<<<<< HEAD
        
        
           <Drawer.Navigator
                initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="User Profile" component={UserProfile} />
                {/* <Drawer.Screen name="Cuentas" component={Cuentas} /> */}
                <Drawer.Screen name="Statistics" component={Statistics} />
                <Drawer.Screen name="Log out" component={LandingPage} />
                
                
            
            </Drawer.Navigator> 

        
        
        )
=======
        <Drawer.Navigator
            initialRouteName="TabNav">
            <Drawer.Screen
                name='Home'
                component={TabNav}
            />
            <Drawer.Screen name="User Profile" component={UserProfile} />
            <Drawer.Screen name="Accounts" component={Accounts} /> 
            <Drawer.Screen name="Statistics" component={Statistics} />
            <Drawer.Screen name="Log out" component={LandingPage} />
        </Drawer.Navigator>
    )
>>>>>>> TabNav
}

export default DrawerBar