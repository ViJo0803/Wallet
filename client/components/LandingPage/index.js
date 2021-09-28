import React from 'react'
import { View, Button, Text } from 'react-native';


function LandingPage({ navigation }) {
    return (
        <View>
            <Text>This is LandingPage</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )

}

export default LandingPage
