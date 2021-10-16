import React from 'react'
import { View, Text, Image } from 'react-native';
import { styles } from './styles'

function Accounts() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Accounts component currently on building stage</Text>
            <Image
                source={require('../../assets/work_in_progress_o.png')}
                style={styles.image} />
            
        </View>
    )

}

export default Accounts