import React from 'react'

import { View, Text, Image, Button} from 'react-native'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { get } from 'react-hook-form';
import { datosDeUsuario } from '../Drawer';
const MY_STORAGE_KEY = 'token'


function UserProfile() {

    // Logica> Traerme el mail del asyncstorage y en base a eso hacer la consulta a la base de datos
    // Por ahora que no se puedan editar los datos
    
    /* function funcionCreadora () {
        const datosF = getDataAsync()
        console.log('datosf', datosF)

        /* setTimeout(2000) */
        /* return (
            <Text style={styles.text}>AAAAAA{datosF}B</Text>
        ) */
    datosDeUsuario()
    const retrieveData = async () => {
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
    }
    retrieveData()

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/JimC.jpg')}
                style={styles.image} />
            <View style={styles.textBox}>
            <View>
                <Text style={styles.text}>Name: Jim Carrey</Text>
            </View>
            <View>
            {/* {       
            for (property in datosA) {
                console.log(`${property}: ${datosA[property]}`);
              }     
              
                //   <Text>
                //      {e}
                //   </Text>
            } */}
            </View>
            <View>
                <Text style={styles.text}>Mail: JimCar96@gmail.com</Text>
            </View>
            <View>
                <Text style={styles.text}>DNI: 17432564</Text>
            </View>
            <View>
                <Text style={styles.text}>Phone: 3534986748</Text>
            </View>
            <View>
                <Text style={styles.text}>CP: 16700</Text>
            </View>
            
            <View>
                <Text style={styles.text}>Nickname: Jim</Text>
            </View>
            <View>
                <Text style={styles.text}>Password: ********</Text>
                
            </View>
            </View>
            
            
            <View  style={styles.containerButtons}>
                    <Button title="show"  style={styles.button} />
                    <Button title="edit"  style={styles.button} />
                </View>
            
        </View>
    )
}

export default UserProfile


/*
nombre
apellidos
mail
nickname
hash
dni
telefono
foto
codigo_postal
*/