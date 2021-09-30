import React from 'react'
import { View, Button, Text } from 'react-native';


function Accounts({ navigation }) {
    return (
        <View>
            <Text>This is Statistics</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )

}

export default Accounts