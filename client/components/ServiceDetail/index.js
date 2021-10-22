import React, { useState } from "react";
import {
  View,
  Pressable,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { servicePayment } from "../../store/actions/transferActions";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function ServiceDetail({ route, navigation }) {
  const dispatch = useDispatch();
  const [monto, setMonto] = useState();

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
    console.log(dataFiltered);
    dispatch(servicePayment(dataFiltered, idUsuario, idcuentas));
  };

  const { op } = route.params;
  return (
    <View>
      <View style={styles.userCard}>
        <Image source={op.image} style={styles.userImage} />
        <Text style={styles.messageBoxText}> {op.name}</Text>
        <Text style={styles.subtitle}> {op.type}</Text>
      </View>
      <View>
        <Text style={styles.subtitleII}> {op.paymentId}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChange={(value) => setMonto(value.nativeEvent.text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={onSubmit} style={styles.button}>
          <Text style={styles.buttonText}> ACCEPT </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ServiceDetail;
