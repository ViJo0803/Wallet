import React from "react";
import { View, Button, Text } from "react-native";
import RegisterInit from "../RegisterInit";
import { styles } from "./styles";

function LandingPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mint</Text>
            <View style={styles.containerText}>
                <RegisterInit navigation={navigation} />
                <Text>New User</Text>
                <View style={styles.button}>
                    <Button
                        style={styles.buttonContainer}
                        title="Register"
                        onPress={() => navigation.navigate("Register")}
                    />
                </View>
            </View>
        </View>
    );
}

export default LandingPage;
