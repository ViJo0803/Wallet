import React, { useState } from "react";
import { View, Pressable, Text, Image, TextInput } from "react-native";
import { styles } from "./styles";
import { servicePayment } from "../../store/actions/transferActions";
import { useSelector, useDispatch } from "react-redux";
import { Title, TouchableRipple } from "react-native-paper";

function ServiceDetail({ route, navigation }) {
  const dispatch = useDispatch();
  const [monto, setMonto] = useState();
  const [monto2, setMonto2] = useState();

  const origen = useSelector((state) => state.account.accounts[0].numerocuenta);
  const idcuentas = useSelector((state) => state.account.accounts[0].idcuentas);
  const { user } = useSelector((state) => state.user);
  const idUsuario = user.idusuario;

  const onSubmit = () => {
    const dataFiltered = {
      destino: op.name,
      origen: origen,
      monto: monto,
      fecha: "2021-10-13 14:58:21.706-03",
    };
    dispatch(servicePayment(dataFiltered, idUsuario, idcuentas));
  };

  const { op } = route.params;
  return (
    <View>
      <View style={styles.userCard}>
        <Image source={op.image} style={styles.userImage} />
        <View style={styles.titlescontainer}>
          <Text style={styles.messageBoxText}> {op.name}</Text>
          <Text style={styles.subtitle}> {op.type}</Text>
        </View>
      </View>
      <View>
        <Title style={styles.subtitleII}> {op.paymentId}</Title>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChange={(value) => setMonto2(value.nativeEvent.text)}
        />
      </View>
      <View>
        <Title style={styles.subtitleII}>Payment Amount</Title>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChange={(value) => setMonto(value.nativeEvent.text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={onSubmit} style={styles.button}>
          <Title style={styles.buttonText}> ACCEPT </Title>
        </Pressable>
      </View>
    </View>
  );
}

export default ServiceDetail;
