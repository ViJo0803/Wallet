import React, { useState } from 'react'
import { View, Button, Text, TextInput, Image, Alert} from 'react-native';
import { styles } from './styles';
import {StripeProvider, CardField, useConfirmPayment} from "@stripe/stripe-react-native";


function Deposit({ navigation }) {
    const [cardDetails, setCardDetails] = useState();
    const [confirmPayment, loading ] = useConfirmPayment();
    
    const handlePayPress = async () => {
        if(!cardDetails){
            Alert.alert("Please enter complete card details");
        }
    }


    return (
        <StripeProvider publishableKey="pk_test_51JhMITEXyI68WKmq82Oq3dN9qfmzBPk8Huia3A6JJ5gNpQ6gfQnjgcr39QciQhITJFSO7shmajo9Ly1qO599iMFs00yeWSn37q">
        <View style={styles.container}>
            <Text style={styles.text}>Deposit component currently on building stage</Text>
            <Image
                source={require('../../assets/deposit.jpg')}
                style={styles.image} />
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>

           {/*  <View style={[styles.transferDinero, {
                flexDirection: "row"
            }]}>
                <Button style={styles.buttonIngresar}  title="Ingresar Dinero" onPress={() => {
                        alert('You tapped the button!');
                }} />
                <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                placeholder="Ingrese un monto..."
                defaultValue=""
                />
            </View> */}

        </View>
        <CardField
            postalCodeEnabled={true}
            placeholder={{
                number: "4242 4242 4242 4242",
            }}
            cardStyle={styles.card}
            style={styles.cardContainer}
            onCardChange={cardDetails => {
                setCardDetails(cardDetails);
            }}

        />
            <Button onPress={handlePayPress} title="Pay" 
            disabled={loading} />
        </StripeProvider>
    )

}

export default Deposit
