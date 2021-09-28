import React from 'react'
import { View, Button, Text } from 'react-native';
import { styles } from './styles'


function LandingPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is LandingPage</Text>
            <View style={styles.containerText}>
                <View>
                    <Button style={styles.button} title="Log In" onPress={() => navigation.navigate('Home')} />
                </View>
                <Text>New User?</Text>
                <View>
                    <Button style={styles.button} title="Register" onPress={() => navigation.navigate('Register')} />
                </View>
            </View>
        </View>
    )

}

export default LandingPage
