import React, { useContext } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Statistics from '../Statistics/index.js';
import UserProfile from '../UserProfile/index'
import TabNav from '../TabNav/index.js';
import AccountNav from '../Accounts/AccountNav/index.js';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { CredentialsContext } from "../../loginComponents/CredentialsContext";
import AsyncStorage from "@react-native-async-storage/async-storage";



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

    const { storedCredentials, setStoredCredentials } =
        useContext(CredentialsContext);

    const clearLogin = () => {
        AsyncStorage.removeItem("flowerCribCredentials")
            .then(() => {
                setStoredCredentials("");
            })
            .catch((error) => console.log(error));
    };

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
            }}
            drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props} >
                        <DrawerItemList {...props} />
                        <DrawerItem label="Logout" onPress={() => clearLogin()} style={{ backgroundColor: '#e3e6e9' }} />
                    </DrawerContentScrollView>
                )
            }}>
            <Drawer.Screen name='TabNav' component={TabNav} options={({ route }) => ({ headerTitle: getHeaderTitle(route), })} />
            <Drawer.Screen name="User Profile" component={UserProfile} />
            <Drawer.Screen name="Accounts" component={AccountNav} />
            <Drawer.Screen name="Statistics" component={Statistics} />
        </Drawer.Navigator>
    )
}

export default DrawerBar