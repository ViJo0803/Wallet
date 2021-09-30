import React from 'react'
import { View, Button, Text } from 'react-native';


function Coins({ navigation }) {
    return (
        <View>
            <Text>This is Coins</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )

}

export default Coins