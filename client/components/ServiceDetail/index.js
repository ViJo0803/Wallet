import React, { useState } from "react";
import { View, Button, Text, Image, TextInput } from "react-native";
import { styles } from "./styles";
import { servicePayment } from "../../store/actions/transferActions";
import { useSelector, useDispatch } from "react-redux";


function ServiceDetail({ route, navigation }) {
  const dispatch = useDispatch();
  const [monto, setMonto] = useState();

  const origen = useSelector((state) => state.account.accounts[0].numerocuenta);
  const { user } = useSelector((state) => state.user);
  const idUsuario = user.idusuario

  const onSubmit = () => {
    const dataFiltered = {
      destino: op.name,
      origen: origen,
      monto: monto,
      fecha: "2021-10-13 14:58:21.706-03",
    };
    console.log(dataFiltered)
    dispatch(servicePayment(dataFiltered, idUsuario))

  }

  const { op } = route.params;
  return (

    <View>
      <View>
        <Image source={op.image} style={styles.userImage} />
        <Text> {op.name}</Text>
        <Text> {op.type}</Text>
        <Text> {op.paymentId}</Text>
      </View>

      <View style={styles.container}>

        <Text>Monto:</Text>
        <TextInput

          placeholder="Monto"
          onChange={(value) => setMonto(value.nativeEvent.text)}
        />

        <Button title="Pagar" onPress={onSubmit} />
      </View>
    </View>

  );
}

export default ServiceDetail;




