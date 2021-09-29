import React from 'react'

import { View, Text } from 'react-native';
import { styles } from './styles'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Menu() {
    return (
        <View style={styles.container}>
            
        </View>
    )
}

function DrawerMenu(){
    return(
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='LandingPage'
          component={LandingPage}
          options={{
            headerShown: false,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
          }} />
        <Stack.Screen
          name='Home'
          component={Home} />
        <Stack.Screen
          name='Register'
          component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default DrawerMenu
