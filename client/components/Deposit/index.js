import React from 'react'
import { View, Button, Text, Image } from 'react-native';
import { styles } from './styles';


function Deposit({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Deposit component currently on building stage</Text>
            <Image
                source={require('../../assets/deposit.jpg')}
                style={styles.image} />
            <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )

}

export default Deposit
