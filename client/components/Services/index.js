import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { services } from "./servicesList";
import { Icon, ListItem } from "react-native-elements";
import { styles } from "./styles";

const allServices = () => {
  return services;
};

function ServicesIndex({ navigation }) {
  const [input, setInput] = useState("");
  let services = allServices();

  const handleChange = (e) => {
    setInput(e);
  };

  if (input.length > 0) {
    const search = services.filter((i) => {
      return i.name.match(input.toLowerCase());
    });

    services = search;

  }

  return (
    <View>
      <TextInput
        type="text"
        placeholder="Search"
        onChangeText={handleChange}
        value={input}
      />

      <ScrollView>
        {services.map((op, i) => (
          <TouchableOpacity
            key={i}
            style={styles.userCard}
            onPress={() => navigation.navigate("ServiceDetail", { op })}
            >

            <Image source={op.image} style={styles.userImage} />
            
            <View style={styles.userCardRight}>
              <Text  style={{ fontWeight: "500" }}> {op.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default ServicesIndex;
