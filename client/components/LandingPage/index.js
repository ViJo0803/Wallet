import React from 'react'
import { View, Button, Text } from 'react-native';


function LandingPage({ navigation }) {
    return (
        <View>
            <Text>This is LandingPage</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Drawer')}/>
        </View>
    )

}

export default LandingPage
