import React from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { styles } from "./styles";
import { Title } from "react-native-paper";


export default function About({ navigation }) {
    return (
        <View style={styles.fullContainer}>
            <ScrollView>
                <Title style={styles.question}>About our team:</Title>
                <Text style={styles.answer}>
                    We are a work team, formed by Henry's students, in which each one comes from different places, situations and experiences, which make this team multi-faceted, being this a great advantage, at the  hour of 'create' and development.
                    Many objectives unite us, between them, to acquire experience and knowledge regarding the profession and teamwork and being able to offer our service in the best way, as Full Stack Web Developers.
                    Integrants::
                    Eva Cristina Vargas Medina
                    Natalia Suarez
                    Victor Jose Carreño Guerra
                    Francisco Massello
                    Agustin Chaves
                    Luciano Fuertes
                    Luciano Mazzetti
                </Text>
                <Title style={styles.question}>About our App:</Title>
                <Text style={styles.answer}>
                    We unanimously decided to create a “Wallet”, in mobile app format, which implied to implement the technologies learned in Henry's Bootcamp and also to have the challenge of applying new technologies.
                    This app is designed to be used as a "virtual wallet", in which you can charge your account, pay for services and transfer money to other users, in an agile and secure way.
                    Its name, "Mint", is based on how fresh mint is, because of the colors it implies, and because it "sounded nice to pronounce" to us. The logo refers to the name and follows the color palette according to the theme.
                    At the beginning, like any project, many alternatives were thought about in terms of design and functionalities, which along the way were changing, leaving this app as our final product.
                    It took a lot of effort on the part of the team and it made us very happy to be able to develop it.

                </Text>
                
                <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}> Go Back </Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}
