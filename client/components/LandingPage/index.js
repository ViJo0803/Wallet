import React from 'react'
import { View, Button, Text } from 'react-native';
import { styles } from './styles'


function LandingPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text  style={styles.title}>This is LandingPage</Text>
            <View style={styles.containerText}>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Log In" onPress={() => navigation.navigate('Home')} />
                </View>
                <Text>Prueba</Text>
                <View style={styles.button}>
                    <Button  style={styles.buttonContainer} title="Register" onPress={() => navigation.navigate('Register')} />
                </View>
            </View>
        </View>
    )

}

export default LandingPage
