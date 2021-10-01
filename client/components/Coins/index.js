import React from 'react'
import { View, Button, Text } from 'react-native';
import { styles } from './styles'


function Coins({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is Coins</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )

}

export default Coins