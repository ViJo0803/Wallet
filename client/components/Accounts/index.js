import React from 'react'
import { View, Button, Text } from 'react-native';
import {styles} from './styles'

function Accounts({ navigation }) {
    return (
        <View>
            <Text>Accounts component currently on building stage</Text>
            <Image
                source={require('../../assets/work_in_progress_o.png')}
                style={styles.image} />
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )

}

export default Accounts