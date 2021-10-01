import React from 'react'
import { View, Button, Text } from 'react-native';
import {styles} from './styles'


function Transfers({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is transfers</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )

}

export default Transfers

