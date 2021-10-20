import React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

function UserProfile({ navigation }) {
  console.log(navigation);

  const state = useSelector((state) => state.user.user);

  console.log("this is the state ", state);
  return (
    <View style={styles.container}>
      <Image source={state.foto} style={styles.image} />
      <View style={styles.textBox}>
        <View>
          <Text style={styles.text}>
            Name: {state.nombre} {state.apellidos}
          </Text>
        </View>
        <View>
          <Text style={styles.text}>Mail: {state.mail}</Text>
        </View>
        <View>
          <Text style={styles.text}>DNI: {state.dni}</Text>
        </View>
        <View>
          <Text style={styles.text}>Phone: {state.telefono}</Text>
        </View>
        <View>
          <Text style={styles.text}>CP: {state.codigo_postal}</Text>
        </View>

        <View>
          <Text style={styles.text}>Nickname: {state.nickname}</Text>
        </View>
      </View>

      <View style={styles.containerButtons}>
        <Button title="show" style={styles.button} />
        <Button
          title="edit"
          style={styles.button}
          onPress={() => navigation.navigate("EditProfile")}
        />
      </View>
    </View>
  );
}

export default UserProfile;
