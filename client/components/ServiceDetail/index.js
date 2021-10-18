import React from "react";
import { View, Text, Image } from "react-native";

function ServiceDetail({ route, navigation }) {
  const { op } = route.params;
  console.log(op);
  return (
    <View>
      <Text>DETALLES DE SERVICIOS</Text>
      <Text> {op.name}</Text>
      <Text> {op.type}</Text>
      <Text> {op.paymentId}</Text>
      <Image source={op.image} />
    </View>
  );
}

export default ServiceDetail;
