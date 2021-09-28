import React from 'react'
import { View, Button, Text } from 'react-native';
import RegisterInit from "../RegisterInit";

function LandingPage({ navigation }) {
    return (
        <View>
            <Text>This is LandingPage</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
            <RegisterInit/>
        </View>
    )

}

export default LandingPage
