import React from 'react'
import { View, Button, Text } from 'react-native';


function Services({ navigation }) {
    return (
        <View>
            <Text>This is Services</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )

}

export default Services