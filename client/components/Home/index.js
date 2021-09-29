import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-elements';
// import { mdiMenu } from '@mdi/js';


function Home() {
    
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <Text>On the left would be an Menu Icon... You're now Home</Text>
            {/* <Icon
                type="material-community"
                name={mdiMenu}
                size={22}
            /> */}
            <View style={[styles.cuentas, {
                flexDirection: "row"
            }]}>
      
                <View>
                    <Text>Cuenta 1</Text>
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
                    <Text>Cuenta 2</Text>
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
            
            <View style={[styles.transferDinero, {
                flexDirection: "row"
            }]}>
                <Button title="Ingresar Dinero" onPress={() => {
                        alert('You tapped the button!');
                }} />
                <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                placeholder="Ingrese un monto..."
                defaultValue=""
                />
            </View>
            <View style={styles.titleTransfer}>
                <Text>Transferencias</Text>

            </View>
            <ScrollView style={styles.scrollTransfer} >
                <Text>Transferencia 1</Text>
                <Text>Transferencia 2</Text>
                <Text>Transferencia 3</Text>
                <Text>Transferencia 4</Text>
                <Text>Transferencia 5</Text>
                <Text>Transferencia 6</Text>
                <Text>Transferencia 7</Text>
                <Text>Transferencia 8</Text>
                <Text>Transferencia 9</Text>
                <Text>Transferencia 10</Text>
                
                
            </ScrollView>

            
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
      height:'100%',
      padding: 20,
    },
    cuentas: {
      height:'15%',
      justifyContent:"space-around",
      padding: 20,
    },
    transferDinero: {
      height:'15%',
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      padding: 20,
      margin: 20,
    },
    titleTransfer: {
        height:'15%',
        alignSelf:"center"
    },
    scrollTransfer: {
        height:'65%',
    }
  });

export default Home
