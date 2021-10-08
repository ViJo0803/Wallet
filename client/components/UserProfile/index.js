import React from 'react'
import { useSelector, useDispatch } from "react-redux";
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
    
    

        const state = useSelector((state) => state.User);

        console.log( "this is the state ", state)

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
                source={state.foto}
                style={styles.image} />
            <View style={styles.textBox}>
            <View>
                <Text style={styles.text}>Name: {state.nombre} {state.apellidos} </Text>
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
                <Text style={styles.text}>Mail: {state.mail}</Text>
            </View>
            <View>
                <Text style={styles.text}>DNI: {state.dni}</Text>
            </View>
            <View>
                <Text style={styles.text}>Phone: {state.telefono}</Text>
            </View>
            <View>
                <Text style={styles.text}>CP: {state.codigo_postal}</Text>
            </View>
            
            <View>
                <Text style={styles.text}>Nickname: {state.nickname}</Text>
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