import React, { useState } from 'react'
import { View, Button, Text, TextInput, Image } from 'react-native';
import { styles } from './styles';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native'

const API_URL = 'https://localhost:3001'

function Deposit({ navigation }) {
    const [email, setEmail] = useState();
    const [cardDetails, setCardDetails] = useState();
    const { confirmPayment, loading } = useConfirmPayment;

    const fetchPaymentIntentClientSecret = async () => {
        const response = await fetch(`${API_URL}/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const { clientSecret, error } = await response.json()
        return { clientSecret, error };
    }

    const handleDepositPress = async () => {
        //1.gather customer's billing information
        if (!cardDetails?.complete || !email) {
            Alert.alert("Please enter complete card details and email");
            return;
        }
        const billingDetails = {
            email: email,
        }
        //2.fetch the intent client secret from backend
        try {
            const { clientSecret, error } = await fetchPaymentIntentClientSecret();
            if (error) {
                console.error('Unable to process payment');
            } else {
                const { paymentIntent, error } = await confirmPayment(clientSecret, {
                    type: 'Card',
                    billingDetails: billingDetails,
                });
                if (error) {
                    alert(`Payment confirmation error ${error.message}`);
                } else if (paymentIntent) {
                    alert('Payment Succesful');
                    console.log('Payment Succesful', paymentIntent);
                }
            }
        } catch (err) {
            console.log(err);
        }
        //3.confirm the payment with card details
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TextInput
                    autoCapitalize='none'
                    placeholder='E-mail'
                    keyboardType='email-address'
                    onChange={value => setEmail(value.nativeEvent.text)}
                    style={styles.input}

                />
                <CardField
                    postalCodeEnabled={true}
                    placeholder='4242 4242 4242 4242'
                    cardStyle={styles.card}
                    style={styles.cardContainer}
                    onCardChange={cardDetails => {
                        setCardDetails(cardDetails);
                    }}
                />
            </View>
            <Button
                onPress={handleDepositPress}
                title='Deposit'
                disabled={loading} />
            <Button
                title="Go Home"
                onPress={() => navigation.navigate('Home')} />
        </View>
    )

}

export default Deposit
