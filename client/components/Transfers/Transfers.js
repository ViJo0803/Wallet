import React from 'react'
import { View, Button, Text } from 'react-native';


function Transfers({ navigation }) {
    return (
        <View>
            <Text>This is transfers</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )

}

export default Transfers

