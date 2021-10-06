import React from 'react'
import { View, Button, Text, Image } from 'react-native';
import {styles} from './styles.js'

function Statistics({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Statistics component currently on building stage</Text>
            <Image
                source={require('../../assets/statistics.jpg')}
                style={styles.image} />
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )

}

export default Statistics