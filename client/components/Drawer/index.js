import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from '../LandingPage';
import Statistics from '../Statistics/Statistics';
import Home from '../Home/index'


const Drawer = createDrawerNavigator();




function DrawerBar() {
    
    return (
        
        
           <Drawer.Navigator
                initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                {/* <Drawer.Screen name="User Profile" component={UserProfile} /> */}
                {/* <Drawer.Screen name="Cuentas" component={Cuentas} /> */}
                <Drawer.Screen name="Statistics" component={Statistics} />
                <Drawer.Screen name="Log out" component={LandingPage} />
                
                
            
            </Drawer.Navigator> 

        
        
        )
}

export default DrawerBar