import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import 'react-native-gesture-handler';






function Home(){
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





export default Home
