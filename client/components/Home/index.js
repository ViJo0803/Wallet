import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from '../LandingPage';
import Transfers from '../Transfers/Transfers';
import Services from '../Services/Services';
import Deposit from '../Deposit/Deposit';
import Statistics from '../Statistics/Statistics';
import Coins from '../Coins/Coins';



const Drawer = createDrawerNavigator();


function Container(){
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            
            
            <View style={[styles.cuentas, {
                flexDirection: "row"
            }]}>
      
                <View>
                    <Text style={styles.titleCuenta}>Cuenta 1</Text>
                    <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    defaultValue="render saldo"
                    />
                </View>
            
                <View>
                    <Text style={styles.titleCuenta}>Cuenta 2</Text>
                    <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    defaultValue="render saldo"
                    />
                </View>
            </View>
            
            
            <View >
                <Text style={styles.titleTransfer}>Transfers</Text>
            </View>

            <ScrollView style={styles.scrollTransfer} >
                <Text>Transfer 1</Text>
                <Text>Transfer 2</Text>
                <Text>Transfer 3</Text>
                <Text>Transfer 4</Text>
                <Text>Transfer 5</Text>
                <Text>Transfer 6</Text>
                <Text>Transfer 7</Text>
                <Text>Transfer 8</Text>
                <Text>Transfer 9</Text>
                <Text>Transfer 10</Text>
                
                
            </ScrollView>

            
        </View>
    )
}

function Home() {
    
    return (
        
        
           <Drawer.Navigator
                initialRouteName="Home">
                <Drawer.Screen name="Home" component={Container} />
                {/* <Drawer.Screen name="User Profile" component={UserProfile} /> */}
                <Drawer.Screen name="Deposit" component={Deposit} />
                <Drawer.Screen name="Transfers" component={Transfers} />
                <Drawer.Screen name="Services" component={Services} />
                <Drawer.Screen name="Coins" component={Coins} />
                <Drawer.Screen name="Statistics" component={Statistics} />
                <Drawer.Screen name="Cerrar Sesion" component={LandingPage} />
            
            </Drawer.Navigator> 

        
        
        )
}



export default Home
