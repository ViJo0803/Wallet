import React from 'react'
import { View, Button, Text, Image } from 'react-native';
import { styles } from './styles.js'

function Accounts({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Accounts component currently on building stage</Text>
            <Image
                source={require('../../assets/work_in_progress_o.png')}
                style={styles.image} />
            <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )

}

export default Accounts