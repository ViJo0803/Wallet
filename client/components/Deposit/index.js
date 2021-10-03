import React from 'react'
import { View, Button, Text, TextInput} from 'react-native';
import { styles } from './styles';


function Deposit({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Deposit component currently on building stage</Text>
            <Image
                source={require('../../assets/deposit.jpg')}
                style={styles.image} />
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>

            <View style={[styles.transferDinero, {
                flexDirection: "row"
            }]}>
                <Button style={styles.buttonIngresar}  title="Ingresar Dinero" onPress={() => {
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

        </View>
    )

}

export default Deposit
