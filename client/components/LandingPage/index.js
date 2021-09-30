import React from 'react'
import { View, Button, Text } from 'react-native';
import RegisterInit from "../RegisterInit";
import { styles } from './styles'

function LandingPage({ navigation }) {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>This is LandingPage</Text>
            <View style={styles.containerText}>
                <RegisterInit />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Log In" onPress={() => navigation.navigate('Drawer')} />
                </View>
                <Text>New User</Text>
                <View style={styles.button}>
                    <Button style={styles.buttonContainer} title="Register" onPress={() => navigation.navigate('Register')} />
                </View>
            </View>
        </View>

    )

}

export default LandingPage
