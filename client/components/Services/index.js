import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
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
    setInput(e.toLowerCase());
  };

  if (input.length > 0) {
    const search = services.filter((i) => {
      return i.name.match(input);
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
          <ListItem key={i}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ServiceDetail", { op })}
              >
                <Text> {op.name}</Text>
              </TouchableOpacity>
            </View>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}

export default ServicesIndex;
