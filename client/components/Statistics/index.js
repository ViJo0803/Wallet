import React from 'react'
import { View, Button, Text } from 'react-native';
import {styles} from './styles'

function Statistics({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is Statistics</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )

}

export default Statistics