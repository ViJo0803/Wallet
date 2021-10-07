import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from '../LandingPage';
import Statistics from '../Statistics';
import UserProfile from '../UserProfile/index'
import TabNav from '../TabNav';
import Accounts from '../Accounts';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const MY_STORAGE_KEY = 'token'

export const datosDeUsuario = async () => {
    try {
        const value = await AsyncStorage.getItem(MY_STORAGE_KEY);
            if (value !== null) {
            var stringToJson = JSON.parse(value)
            const datos = await axios.get('http://localhost:3001/usuarios?mail=' +  (stringToJson.sub.split("|")[0]==="google-oauth2" ? stringToJson.nickname +'@gmail.com' :  stringToJson.name ))
            const objetoUserProfile = {
                valueName : datos.data[0].nombre + ' ' + datos.data[0].apellidos,
                valueMail : datos.data[0].mail,
                valueImage : datos.data[0].foto,
                valueDNI : datos.data[0].dni,
                valuePhone : datos.data[0].telefono,
                valueCP : datos.data[0].codigo_postal,
                valueNickname : datos.data[0].nickname,
            }
            await AsyncStorage.mergeItem(MY_STORAGE_KEY, JSON.stringify(objetoUserProfile))
            return objetoUserProfile
        }
    } catch (error) {
        console.log(error.message)
    }
}

/* const retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem(MY_STORAGE_KEY);
          if (value !== null) {
          var stringToJson = JSON.parse(value)
          console.log(stringToJson)
          return stringToJson
        }
    } catch (error) {
        console.log(error.message)
    }
  } */

datosDeUsuario() // Esta funcion hace una consulta a la base de datos con el email del usuario logeado y sube esos datos al async storage
/* retrieveData() */ // Esta funcion muestra lo que hay en el async storage


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