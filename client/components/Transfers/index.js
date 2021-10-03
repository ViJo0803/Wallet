import React from 'react'
import { View, Button, Text } from 'react-native';
import {styles} from './styles'


function Transfers({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Transfers component currently on building stage</Text>
            <Image
                source={require('../../assets/transfer.jpg')}
                style={styles.image} />
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )

}

export default Transfers

