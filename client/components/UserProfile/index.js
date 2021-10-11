import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Image, Button} from 'react-native'
import { styles } from './styles'



function UserProfile() {
<<<<<<< Updated upstream

    // Logica> Traerme el mail del asyncstorage y en base a eso hacer la consulta a la base de datos
    // Por ahora que no se puedan editar los datos

        const state = useSelector((state) => state.users.user);
        let token= useSelector((state)=>state.users.jwtToken)

        console.log("in user details, this is the token",token)
        console.log("in user details, this is the state",state)
        
=======
    const state = useSelector((state) => state.user);
    console.log("this is the state ", state)
>>>>>>> Stashed changes
    return (
        <View style={styles.container}>
            <Image
                source={state.foto}
                style={styles.image} />
            <View style={styles.textBox}>
            <View>
                <Text style={styles.text}>Name: {state.nombre} {state.apellidos} </Text>
            </View>
<<<<<<< Updated upstream
            
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
            
=======
            <View  style={styles.containerButtons}>
                    <Button title="show"  style={styles.button} />
                    <Button title="edit"  style={styles.button} onPress={PerformanceNavigationTiming.navigate("EditProfile")}/>
                </View>
>>>>>>> Stashed changes
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