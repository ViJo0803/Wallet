import React from 'react'
import { View, Text, ScrollView, TextInput} from 'react-native';
import { styles } from './styles';
import 'react-native-gesture-handler';



function Home() {
    
    
    return (

        <View style={styles.container}>

            <View style={styles.cuentas}>

                <View>
                    <Text style={styles.titleCuenta}>Account $</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1
                        }}
                        defaultValue="$ 15.618,45"
                    />
                </View>

                <View>
                    <Text style={styles.titleCuenta}>Account US$</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1
                        }}
                        defaultValue="US$ 2.300"
                    />
                </View>
            </View>


            <View >
                <Text style={styles.titleTransfer}>Transfers</Text>
            </View>

            <ScrollView style={styles.scrollTransfer} >
                <TextInput sytle={styles.textTransf} defaultValue= '$... date: dd/mm/aa' />
                <TextInput sytle={styles.textTransf} defaultValue= '$... date: dd/mm/aa' />
                <TextInput sytle={styles.textTransf} defaultValue= '$... date: dd/mm/aa' />
                <TextInput sytle={styles.textTransf} defaultValue= '$... date: dd/mm/aa' />
                <TextInput sytle={styles.textTransf} defaultValue= '$... date: dd/mm/aa' />
                <TextInput sytle={styles.textTransf} defaultValue= '$... date: dd/mm/aa' />
                <TextInput sytle={styles.textTransf} defaultValue= '$... date: dd/mm/aa' />
                <TextInput sytle={styles.textTransf} defaultValue= '$... date: dd/mm/aa' />
                <TextInput sytle={styles.textTransf} defaultValue= '$... date: dd/mm/aa' />
                <TextInput sytle={styles.textTransf} defaultValue= '$... date: dd/mm/aa' />
                
            </ScrollView>
        </View>
    )
}


export default Home
