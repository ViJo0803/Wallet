import React from "react";
import {
  View,
  Button,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./styles";
import { makeTransfer } from "../../store/actions/transferActions";
import { useSelector, useDispatch } from "react-redux";


function ServiceDetail({ route, navigation }) {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const origen = useSelector((state) => state.account.accounts[0].idcuentas);

  // console.log("origen", origen)

  const onSubmit = (data) => {
    // const dataFiltered = {
    //   destino: data.Destino,
    //   origen: origen,
    //   monto: parseInt(data.Monto),
    //   fecha: "2021-10-13 14:58:21.706-03",
    // };

    console.log("data", data)
    dispatch(makeTransfer(dataFiltered))
  
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
    <Text>Destino:</Text>

    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          // style={styles.input}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      name="Destino"
      defaultValue= {op.name}
    />

    {errors.Destino && <Text>This is required.</Text>}

    <Text>Monto:</Text>
    <Controller
      control={control}
      rules={{
        required: true,
        maxLength: 100,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          // style={styles.input}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      name="Monto"
      defaultValue=""
    />
    {errors.Monto && <Text>This is required.</Text>}

    <Button title="Pagar" onPress={handleSubmit(onSubmit)} />
  </View>
  </View>

  );
}

export default ServiceDetail;




