import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import Login from "../Login";
import { styles } from "./styles";

function LandingPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mint</Text>
            <View style={styles.containerText}>
                <Login navigation={navigation} />
                <View style={styles.button}>
                    <Text style={styles.plainText}>New User</Text>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        title="Register"
                        onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default LandingPage;
